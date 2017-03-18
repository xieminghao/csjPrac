(function () {
    var currentPeriodNumber = -1;
    var timeInterval = 38000;
    var nextPeriodNumber = -1;
    //请求出错次数
    var errorCount = 0;
    //请求次数
    var requireCount = 0;
    function afterAwarded() {
        var _page = $("#pageName").val();
        if (_page) {
            var _container = $("#pageName").attr("container");
            var _time = $("#pageName").attr("time");
            var unload = $("#pageName").attr("unload");
            if (unload && unload == "1") return;
            _time = ~ ~_time;
            _container = _container ? _container : "lot-wrap";
            setTimeout(function () {
                $.get('/xync/' + _page, { t: Math.random() }, function (text) {
                    $('#' + _container).html(text);
                    //文字闪烁
                    Glitter();
                });
            }, _time);
        }
        else {
            var fun = $("#callFun").val();
            var _time = $("#callFun").attr("time");
            if (fun) {
                var funs = fun.split('|');
                setTimeout(function () {
                    for (var i = 0; i < funs.length; i++) {
                        window[funs[i]]();
                    }
                }, _time);
            }
        }
    }
    var awardTick = function () {
        $.get('/xync/ajax', { ajaxhandler: 'GetXyncAwardData', t: Math.random() }, function (data) {
            requireCount += 1;
            if ((data.current.periodNumber != currentPeriodNumber) && currentPeriodNumber != -1) {
                timeInterval = 38000;
                window.setTimeout(afterAwarded, 5000);
                $(".currentAward .period").css("color", "green");
                requireCount = errorCount = 0;
                hideLotPeriodNumWarn();
            }
            if (timeInterval != 0) {
                $(".currentAward .period").html(data.current.periodNumber + " 期");
                var nums = data.current.awardNumbers.split(',');
                var str = "";
                for (var i = 0; i < nums.length; i++) {
                    str = str + "<span class='no" + nums[i] + "'></span>";
                }
                $(".lot-nums").html(str);
                if (currentPeriodNumber == -1) {
                    $(".currentAward .period").css("color", "green");
                }
                if (currentPeriodNumber == -1) {    //判断第一次加载
                    currentPeriodNumber = data.current.periodNumber;
                    luzhuFirstShow(currentPeriodNumber, ctimeOfPeriod);
                }
                currentPeriodNumber = data.current.periodNumber;
                nextPeriodNumber = data.next.periodNumber;
            }
            var _time = parseInt(parseInt(data.next.awardTimeInterval) + timeInterval + parseInt(Math.random() * 15000));
            window.setTimeout(awardTick, data.next.awardTimeInterval < 10 ? 5000 : _time);
            timeInterval = 0;
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(awardTick, 5000 + Math.random() * 10000);
                errorCount++;
            }
        });
        if (errorCount >= 5 || requireCount > 6) {
            showLotPeriodNumWarn(nextPeriodNumber);
        }
    };

    var loadAwardTimesTimer, ctimeOfPeriod = -1;
    var cpCurrAwardData = null;
    var cpNextAwardTimeInterval = -1;
    function loadAwardTimes() {
        $.get('/xync/ajax', { ajaxhandler: 'GetXyncAwardTimes', t: Math.random() }, function (data) {
            //请求到数据后需要做的事情
            cpCurrAwardData = data;

            //期数不同，则开始封盘倒计时
            if (data.current.periodNumber != cpNumber) {
                cpNextAwardTimeInterval = data.next.awardTimeInterval;
                if (countDownTimer) window.clearInterval(countDownTimer);
                countDownTimer = window.setInterval(function () {
                    cpNextAwardTimeInterval = Math.max(0, cpNextAwardTimeInterval - 1000);
                    showCountDown(cpNextAwardTimeInterval, data.next.periodNumber)
                }, 1000);
            }
            cpNumber = data.current.periodNumber;
            if (ctimeOfPeriod == -1) {//判断第一次加载
                ctimeOfPeriod = data.current.periodNumber;
                luzhuFirstShow(currentPeriodNumber, ctimeOfPeriod);
                stopAwardHappyYear(data.time);
            }
            $(".warnTime #period").html("第" + data.next.periodNumber + "期");
            var leavePeriod = 97 - cpNumber;
            if (leavePeriod == 0) {
                var d = new Date();
                var nd = new Date(data.next.awardTime.split(' ')[0].replace("-", "/", "gi"));
                if (d.getDate() == nd.getDate()) leavePeriod = 97;
            }
            $(" .lot-award .currentAward .period-info .period-leave").html(leavePeriod);
            loadAwardTimesTimer = window.setTimeout(loadAwardTimes, data.next.awardTimeInterval < 10 ? 10000 : data.next.awardTimeInterval + 1000);
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(loadAwardTimes, 5000 + Math.random() * 10000);
                errorCount++;
            }
        });
        if (errorCount >= 5) {
            showLotPeriodNumWarn(nextPeriodNumber);
        }
    }

    window.setTimeout(awardTick, 1000);
    //每10秒刷新开奖时间数据
    loadAwardTimesTimer = window.setTimeout(loadAwardTimes, 1000);
})();


function updateHistoryRecord() {
    $.get('/xync/ajax', { ajaxhandler: 'GetNewestRecord', t: Math.random() }, function (data) {
        var numbers = data.numbers.split(',');
        var tr1 = $("#history tr").eq(1);
        var clsName = "odd";
        if (tr1) {
            clsName = tr1.attr("class") == "odd" ? "even" : "odd";
        }
        var html = '<tr class="' + clsName + '"><td><p class="p">' + data.period + '</p><p class="t">' + data.drawingTime;
        html += '</p></td><td class="nums">';
        for (var i = 0; i < numbers.length; i++) {
            html += '<i class="lot-no' + numbers[i] + '"></i>';
        }
        html += '</td>';
        html += '<td>' + data.total + '</td>';
        html += '<td><p ' + (data.totalOddorEven == "单" ? 'class="r"' : '') + '>' + data.totalOddorEven + '</p></td>';
        html += '<td><p ' + (data.totalBigOrSmall == "大" ? 'class="r"' : '') + '>' + data.totalBigOrSmall + '</p></td>';
        html += '<td><p ' + (data.totalmantissa == "大" ? 'class="r"' : '') + '>尾 ' + data.totalmantissa + '</p></td>';
        html += '<td><p ' + (data.longhu == "龍" ? 'class="r"' : (data.longhu == "和" ? 'class="g"' : '')) + '>' + data.longhu + '</p></td>';
        html += '</tr>';

        $("#history .head").after(html);

        if (typeof showNum != 'undefined' && showNum instanceof Function) {
            showNum();
        }

        var history_gg = $(".history_gg");
        history_gg.each(function (i) { $(this).prev().before($(this)); });


        html = '<tr ><td>' + data.period + '</td>';
        html += '<td>' + data.drawingTime + '</td>';
        for (var i = 0; i < numbers.length; i++) {
            html += '<td>' + numbers[i] + '</i>';
        }
        html += '<td>' + data.total + '</td>';
        html += '<td>' + data.totalOddorEven + '</td>';
        html += '<td>' + data.totalBigOrSmall + '</td>';
        html += '<td>尾' + data.totalmantissa + '</td>';
        html += '<td>' + data.longhu + '</td>';

        html += '</tr>';
        $("#smallHistory tr:last").remove();
        $("#smallHistory .head").after(html);
    }, 'json');
}