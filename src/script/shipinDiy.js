// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);

// var successFn = function(res){
// 	// console.log(res);
// 	if(pathname == '/pk10/'){
// 		$('#lot-content').html(res);
// 	} else {
// 		// var x = res.match(/<script[\s\S]*?\/script>/g);
// 		// console.log(x);
// 		$('.lot-wrap').replaceWith(res);
// 	}

// 	$('.feedbackDiv').remove();
// 	$('li[data-tag="zh"]').remove();
// 	$('li[data-tag="tbm"]').remove();
// 	$('li[data-tag="sjyy"]').remove();


// }

$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').append(res);

        var iframeEle = $('<div style="padding:0px 10px 20px;clear:left;"><iframe width="1000" height="420" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" src="http://www.5188pk10.com/zhibo.html"></iframe><div>');
        // iframeEle.attr('src','http://m.1399p.com/video/pk10');
        $('#img-scroll').before(iframeEle);

		$(function () {
            $('.btn_share_html').click(function () {
                $('#copyInput').val('<iframe src="http://www.1395p.com/pk10/shipin/?mode=iframe" width="980" height="630" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });
            
            $('.btn_share_url').click(function () {
                $('#copyInput').val('http://www.1395p.com/pk10/shipin/');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });

            var vLottery = "pk10";
            $("#" + vLottery).remove();

            if ("pk10" != vLottery) {
                CheckAward("pk10", "GetPk10AwardTimes", this.pk10_downTimer, pk10_number, "pk10-time");
            }
            if ("cqssc" != vLottery) {
                CheckAward("shishicai", "GetCqsscAwardTimes", this.cqssc_downTimer, cqssc_number, "cqssc-time");
            }
            if ("gdkl10" != vLottery) {
                CheckAward("gdkl10", "GetGDKL10AwardTimes", this.gdkl10_downTimer, gdkl10_number, "gdkl10-time");
            }
            if ("jsk3" != vLottery) {
                CheckAward("jsk3", "GetJsk3AwardTimes", this.jsk3_downTimer, jsk3_number, "jsk3-time");
            }
            if ("xync" != vLottery) {
                CheckAward("xync", "GetXyncAwardTimes", this.xync_downTimer, xync_number, "xync-time");
            }
            if ("xyft" != vLottery) {
                CheckAward("xyft", "GetXyftAwardTimes", this.xyft_downTimer, xyft_number, "xyft-time");
            }
            if ("kl8" != vLottery) {
                CheckAward("kl8", "GetKl8AwardTimes", this.kl8_downTimer, kl8_number, "kl8-time");
            }
            if ("jxssc" != vLottery) {
                CheckAward("jxssc", "GetJxsscAwardTimes", this.jxssc_downTimer, jxssc_number, "jxssc-time");
            }
            if ("shssl" != vLottery) {
                CheckAward("shssl", "GetShsslAwardTimes", this.shssl_downTimer, shssl_number, "shssl-time");
            }
            if ("gd11x5" != vLottery) {
                CheckAward("gd11x5", "GetAwardTimes", this.gd11x5_downTimer, gd11x5_number, "gd11x5-time");
            }
            if ("jx11x5" != vLottery) {
                CheckAward("jx11x5", "GetAwardTimes", this.jx11x5_downTimer, jx11x5_number, "jx11x5-time");
            }
            if ("syydj" != vLottery) {
                CheckAward("syydj", "GetAwardTimes", this.syydj_downTimer, syydj_number, "syydj-time");
            }
            if ("tjssc" != vLottery) {
                CheckAward("tjssc", "GetAwardTimes", this.tjssc_downTimer, tjssc_number, "tjssc-time");
            }
            if ("xjssc" != vLottery) {
                CheckAward("xjssc", "GetAwardTimes", this.xjssc_downTimer, xjssc_number, "xjssc-time");
            }
            if ("fc3d" != vLottery) {
                CheckAward("fc3d", "GetAwardTimes", this.fc3d_downTimer, fc3d_number, "fc3d-time");
            }
            if ("pl3" != vLottery) {
                CheckAward("pl3", "GetAwardTimes", this.pl3_downTimer, pl3_number, "pl3-time");
            }
            DY_scroll('#img-scroll', '#prev', '#next', '#img-list', 3, true);// true为自动播放，不加此参数或false就默认不自动

            $(".web_moreVideoContent li").hover(
               function () {
                   $(".web_mengban", $(this)).animate({ opacity: 0.3 }, 500);
               },
               function () {
                   $(".web_mengban", $(this)).animate({ opacity: 0 }, 500);
               }
             )
        });

        // award.jsk
        (function () { 
            var currentPeriodNumber = -1;
            var nextPeriodNumber = -1;
            var timeInterval = 35000;
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
                        $.get('/pk10/' + _page, { t: Math.random() }, function (text) {
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
                $.get('/pk10/ajax', { ajaxhandler: 'GetPk10AwardData', t: Math.random() }, function (data) {
                    //计数请求次数
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
                    window.setTimeout(awardTick, data.next.awardTimeInterval < 10 ? 10000 : _time);
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
                $.get('/Pk10/ajax', { ajaxhandler: 'GetPk10AwardTimes', t: Math.random() }, function (data) {
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
                            showCountDown(cpNextAwardTimeInterval, data.next.periodNumber);
                        }, 1000);
                    }
                    cpNumber = data.current.periodNumber;
                    if (ctimeOfPeriod == -1) {//判断第一次加载
                        ctimeOfPeriod = data.current.periodNumber;
                        luzhuFirstShow(currentPeriodNumber, ctimeOfPeriod);
                        stopAwardHappyYear(data.time);
                    }
                    $(".warnTime #period").html("第" + data.next.periodNumber + "期");
                    $(" .lot-award .currentAward .period-info .period-leave").html(data.firstPeriod+179-cpNumber);
                     
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
            $.get('/Pk10/ajax', { ajaxhandler: 'GetNewestRecord', t: Math.random() }, function (data) {
                if (data && data.numbers) {
                    var numbers = data.numbers.split(',');
                    var longhu = data.longhu;
                    var tr1 = $("#history tr").eq(1);
                    var clsName = "odd";
                    if (tr1) {
                        clsName = tr1.attr("class") == "odd" ? "even" : "odd";
                    }
                    var html = '<tr class="' + clsName + '"><td><p class="p">' + data.period + '</p><p class="t">' + data.drawingTime;
                    html += '</p></td><td class="nums">';
                    for (var i = 0; i < numbers.length; i++) {
                        html += '<i class="pk-no' + numbers[i] + '"></i>';
                    }
                    html += '</td>';
                    html += '<td>' + data.guanyahe + '</td>';
                    html += '<td><p ' + (data.guanyahedx == "大" ? 'class="r"' : '') + '>' + data.guanyahedx + '</p></td>';
                    html += '<td><p ' + (data.guanyaheds == "单" ? 'class="r"' : '') + '>' + data.guanyaheds + '</p></td>';
                    for (var i = 0; i < longhu.length; i++) {
                        html += '<td><p ' + (longhu[i] == "龍" ? 'class="r"' : '') + '>' + longhu[i] + '</p></td>';
                    }
                    html += '</tr>';

                    $("#history .head").after(html);

                    html = '<tr ><td>'+data.period+ '</td>';
                    html +='<td>'+data.drawingTime+'</td>';
                    for (var i = 0; i < numbers.length; i++) {
                        html += '<td>'+numbers[i]+'</i>';
                    }
                    html +='<td>'+data.guanyahe+'</td>';
                    html += '<td>'+ data.guanyahedx + '</td>';
                    html += '<td>' + data.guanyaheds + '</td>';
                    for (var i = 0; i < longhu.length; i++) {
                        html += '<td>' + longhu[i] + '</td>';
                    }
                    html += '</tr>';
                    $("#smallHistory tr:last").remove();
                    $("#smallHistory .head").after(html);

                    if (typeof showNum != 'undefined' && showNum instanceof Function) {
                        showNum();
                    }

                    var history_gg = $(".history_gg");
                    history_gg.each(function (i) { $(this).prev().before($(this)); });
                } else {
                    setTimeout(updateHistoryRecord, 3000);
                }
            }, 'json');

            if (typeof reloadChangLong != 'undefined' && reloadChangLong instanceof Function) {
                reloadChangLong();
            }
            if ($("b", $("#ballstat-switch")).hasClass("checked") && typeof reloadBallStatRemind != 'undefined' && reloadBallStatRemind instanceof Function) {
                reloadBallStatRemind();
            }
        }

        function LoadPk10TipSet() {
            var tip_car = parseInt($.cookie("pk10_tip_car") == null ? 1 : $.cookie("pk10_tip_car"));
            var tip_changlong = parseInt($.cookie("pk10_tip_changlong") == null ? 1 : $.cookie("pk10_tip_changlong"));
            var tip_ballstat = parseInt($.cookie("pk10_tip_ballstat") == null ? 1 : $.cookie("pk10_tip_ballstat"));
            if (1 == tip_car) {
                if ($("#car-switch > b").attr("class") == "checkbox") {
                    $("#car-switch > b").addClass("checked");
                }
            } else {
                $("#car-switch > b").removeClass("checked");
                $(".checkBlock").hide();
            }
            if (1 == tip_changlong) {
                if ($("#changlong-switch > b").attr("class") == "checkbox") {
                    $("#changlong-switch > b").addClass("checked");

                }
            } else {
                $("#changlong-switch > b").removeClass("checked");
                $("#changlong_warn").hide();
            }
            if (1 == tip_ballstat) {
                if ($("#ballstat-switch > b").attr("class") == "checkbox") {
                    $("#ballstat-switch > b").addClass("checked");

                }
            } else {
                $("#ballstat-switch > b").removeClass("checked");
                $("#ballstat_remind").hide();
            }

        }

	}
});


