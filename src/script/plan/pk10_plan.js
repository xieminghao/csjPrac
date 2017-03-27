(function () {
    var currentPeriodNumber = -1;
    var nextPeriodNumber = -1;
    var timeInterval = 35000;
    //请求出错次数
    var errorCount = 0;
    //请求次数
    var requireCount = 0;

    var awardTick = function () {
        $.get('/pk10/ajax', { ajaxhandler: 'GetPk10AwardData', t: Math.random() }, function (data) {
            //计数请求次数
            requireCount += 1;
            if ((data.current.periodNumber != currentPeriodNumber) && currentPeriodNumber != -1) {
                timeInterval = 38000;
                window.setTimeout(updateHistoryRecord, 5000);
            }
            if (timeInterval != 0) {
                if (currentPeriodNumber == -1) {    //判断第一次加载
                    currentPeriodNumber = data.current.periodNumber;
                }
                currentPeriodNumber = data.current.periodNumber;
                nextPeriodNumber = data.next.periodNumber;
            }

            var _time = parseInt(parseInt(data.next.awardTimeInterval) + timeInterval + parseInt(Math.random() * 15000));
            window.setTimeout(awardTick, data.next.awardTimeInterval < 10 ? 10000 : _time);
            timeInterval = 0;
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(awardTick, 5000 + Math.random() * 10000);
                errorCount++;
            }
        });
    };

    var loadAwardTimesTimer, ctimeOfPeriod = -1;
    var cpCurrAwardData = null;
    var cpNextAwardTimeInterval = -1;
    function loadAwardTimes() {
        $.get('/Pk10/ajax', { ajaxhandler: 'GetPk10PlanAwardTimes', t: Math.random() }, function (data) {
            //请求到数据后需要做的事情
            cpCurrAwardData = data;

            //期数不同，则开始封盘倒计时
            if (data.current.periodNumber != cpNumber) {
                cpNextAwardTimeInterval = data.next.awardTimeInterval;
                if (countDownTimer) {
                    window.clearInterval(countDownTimer);
                }
                countDownTimer = window.setInterval(function () {
                    cpNextAwardTimeInterval = Math.max(0, cpNextAwardTimeInterval - 1000);
                    showCountDown(cpNextAwardTimeInterval, data.next.periodNumber, data.planState);
                }, 1000);
            }
            cpNumber = data.current.periodNumber;
            if (ctimeOfPeriod == -1) {//判断第一次加载
                ctimeOfPeriod = data.current.periodNumber;
            }
            //$("#p_period").html(data.current.periodNumber + "期");
            //$("#p_hasperiod").html(data.firstPeriod + 179 - cpNumber + "期");

            //$("#p_hasperiod").html(30 - parseInt($("#p_period").attr("data-plan")) + "期");

            $("#period").html("第" + data.next.periodNumber + "期");
            $("#period").attr("data-period", data.next.periodNumber);


            loadAwardTimesTimer = window.setTimeout(loadAwardTimes, data.next.awardTimeInterval < 10 ? 10000 : data.next.awardTimeInterval + 1000);

            var numPeriod = data.current.periodNumber - data.firstPeriod;
            // if ((numPeriod >= 35 && numPeriod <= 65) || (numPeriod >= 137 && numPeriod <= 167))
            $("#planInfo").show();
            if (0 == data.planState || "0" == data.planState) {
                $("#planTimer").hide();
                $("#planStop").hide();
                $("#periodTimer").show();
                window.setTimeout(awardTick, 5000);
            } else if (3 == data.planState || "3" == data.planState) {
                $("#periodTimer").hide();
                $("#planTimer").hide();
                $("#planInfo").hide();
                $("#planStop").show();
            } else {
                $("#periodTimer").hide();
                $("#planStop").hide();
                $("#planTimer").show();
            }
        }, 'json').error(function () {
            if (errorCount < 20) {
                window.setTimeout(loadAwardTimes, 5000 + Math.random() * 10000);
                errorCount++;
            }
        });
    }
    //每10秒刷新开奖时间数据
    loadAwardTimesTimer = window.setTimeout(loadAwardTimes, 1000);
})();


function updateHistoryRecord() {
    $.get('/pk10/numberplan', { t: Math.random() }, function (text) {
        $('#planList').html(text);
    });
}