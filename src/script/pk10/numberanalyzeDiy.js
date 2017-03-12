// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";


$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.lot-wrap').replaceWith(res);
		
		window.updateRecord = function() {
	        $("#dataopened").val(parseInt($("#dataopened").val()) + 1);
	    }
	    $(function () {

	        $("#web_tj ul li").bind("click", function () {
	            $(this).toggleClass("cur");
	        });
	        $("#analyzeBtn").bind("click", function () {
	            var numsli = $("#web_tj ul li.cur");
	            if (numsli.length > 2 && numsli.length < 10) {
	                var nums = [];
	                for (var i = 0; i < numsli.length; i++) {
	                    nums.push($(numsli[i]).attr("data-num"));
	                }
	                if ($("#nums").val() == nums.join(",")) return;
	                $("#nums").val(nums.join(","));
	                $("#warn_msg").hide();
	                $("#canvas").remove();
	                $("#chart").hide();
	                $(".jsloading").show();
	            } else {
	                $("#warn_msg").show();
	            }
	        });
	        require(['trendChart'], function (trendChart) {
	            var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".shenblue", ".shenred2", ".greenBg2"] }, lineWidth: 2, lineColor: "#BB8569" });

	            var viewmodel = avalon.define('analyze', function (vm) {
	                vm.numsTxt = "";
	                vm.$nums = [];
	               // vm.$constNums = [1,2,3,4,5,6,7,8,9,10];
	                vm.analyDatas = [];
	                vm.periodCount = 30;
	                vm.flagPeriod = -1;
	                vm.drawLine = function () {
	                    chartLine.clearLines();
	                    chartLine.reDraw();
	                };
	                vm.convertPosition = function (i) {
	                    switch (~~i) {
	                        case 1: return '冠';
	                        case 2: return '亚';
	                        case 3: return '三';
	                        case 4: return '四';
	                        case 5: return '五';
	                        case 6: return '六';
	                        case 7: return '七';
	                        case 8: return '八';
	                        case 9: return '九';
	                        case 10: return '十';
	                    }
	                }
	                vm.calculate = function (a) {
	                    var d = a;
	                    d.pos = [];
	                    for (var i = 1; i <= 10; i++) {
	                        d.pos.push(d.nums.indexOf(i)+1);
	                    }
	                    d.min = d.pos[viewmodel.$nums[0]-1];
	                    d.max = d.pos[viewmodel.$nums[0]-1];
	                    for (var j = viewmodel.$nums.length - 1; j > 0; j--) {
	                        d.min = Math.min(d.min, d.pos[viewmodel.$nums[j]-1]);
	                        d.max = Math.max(d.max, d.pos[viewmodel.$nums[j]-1]);
	                    }
	                    d.kd = d.max - d.min;
	                    return d;
	                }
	                vm.refreshData = function () {
	                    $(".web_noDataDiv").hide();
	                    $("#chart").hide();
	                    $(".jsloading").show();
	                    $.get("/pk10/getawardlist", { t: Math.random(), count: viewmodel.periodCount }, function (data) {
	                        viewmodel.analyDatas.clear();
	                        for (var i = 0; i < data.datas.length; i++) {
	                            viewmodel.analyDatas.push(viewmodel.calculate(data.datas[i]));
	                        }
	                        $("#chart").show();
	                        $(".jsloading").hide();
	                        viewmodel.drawLine();
	                    }, 'json');
	                }
	                vm.$watch("periodCount", function (v) {
	                    //vm.periodCount = v;
	                    if (viewmodel.analyDatas.length <= 0) return;
	                    viewmodel.analyDatas.clear();
	                    $("#canvas").remove();
	                    $("#chart").hide();
	                    $(".jsloading").show();
	                    viewmodel.refreshData();
	                });
	                vm.$watch("numsTxt", function (value, oldvalue) {
	                    if (value.length < 3) return;
	                    viewmodel.$nums = [];
	                    var nts = value.split(",");
	                    for (var i = 0; i < nts.length; i++) {
	                        viewmodel.$nums.push(~~nts[i]);
	                    }
	                    viewmodel.refreshData();
	                });
	                vm.$watch("flagPeriod", function (value, oldvalue) {
	                    if (value == -1) return;
	                    if (viewmodel.analyDatas.length <= 0 || viewmodel.$nums.length < 3) return;
	                    $.get("/pk10/getawardlist", { count: 1, t: Math.random() }, function (data) {
	                        var p = data.datas[0];
	                        viewmodel.analyDatas.unshift(viewmodel.calculate(p));
	                        viewmodel.analyDatas.removeAt(viewmodel.analyDatas.length-1);
	                        viewmodel.drawLine();
	                    }, 'json');
	                });
	            });

	            avalon.scan();
	        });

	    });


		// award.js
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


