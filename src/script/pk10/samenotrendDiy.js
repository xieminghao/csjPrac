// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = '';
var lotteryLuzhu = "";
var vdraw = 0;
var bflag = false;
function drawTrend() {
    vdraw += 1;
    bflag = true;
    $("#periodInfo").val(vdraw);
}
$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.web_dateLineBody').replaceWith(res);

		$(function () {

        require(['trendChart'], function (trendChart) {
            var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".shenred4"] }, lineWidth: 2, lineColor: "#BB8569" });


            var ajaxUrl = "/pk10/SameNoTrend";
            //首次读取后台数据
            var datas = '[{"Front":0,"Middle":0,"Back":1,"Period":606584,"Drawing_Date":"03-12","Drawing_Time":"21:12","Nums":"\u4e5d","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":606405,"Drawing_Date":"03-11","Drawing_Time":"21:12","Nums":"\u4e5d","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":606226,"Drawing_Date":"03-10","Drawing_Time":"21:12","Nums":"\u516b","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":606047,"Drawing_Date":"03-09","Drawing_Time":"21:12","Nums":"\u4e03","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":605868,"Drawing_Date":"03-08","Drawing_Time":"21:12","Nums":"\u4e9a","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":605689,"Drawing_Date":"03-07","Drawing_Time":"21:12","Nums":"\u56db","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":605510,"Drawing_Date":"03-06","Drawing_Time":"21:12","Nums":"\u5341","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":605331,"Drawing_Date":"03-05","Drawing_Time":"21:12","Nums":"\u516b","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":605152,"Drawing_Date":"03-04","Drawing_Time":"21:12","Nums":"\u4e03","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":604973,"Drawing_Date":"03-03","Drawing_Time":"21:12","Nums":"\u4e94","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":604794,"Drawing_Date":"03-02","Drawing_Time":"21:12","Nums":"\u51a0","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":604615,"Drawing_Date":"03-01","Drawing_Time":"21:12","Nums":"\u4e94","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":604436,"Drawing_Date":"02-28","Drawing_Time":"21:12","Nums":"\u5341","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":604257,"Drawing_Date":"02-27","Drawing_Time":"21:12","Nums":"\u51a0","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":604078,"Drawing_Date":"02-26","Drawing_Time":"21:12","Nums":"\u4e09","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":603899,"Drawing_Date":"02-25","Drawing_Time":"21:12","Nums":"\u516d","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":603720,"Drawing_Date":"02-24","Drawing_Time":"21:12","Nums":"\u51a0","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":603541,"Drawing_Date":"02-23","Drawing_Time":"21:12","Nums":"\u4e94","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":603362,"Drawing_Date":"02-22","Drawing_Time":"21:12","Nums":"\u4e94","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":603183,"Drawing_Date":"02-21","Drawing_Time":"21:12","Nums":"\u56db","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":603004,"Drawing_Date":"02-20","Drawing_Time":"21:12","Nums":"\u4e5d","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":602825,"Drawing_Date":"02-19","Drawing_Time":"21:12","Nums":"\u4e9a","Big":0,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":602646,"Drawing_Date":"02-18","Drawing_Time":"21:12","Nums":"\u4e5d","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":602467,"Drawing_Date":"02-17","Drawing_Time":"21:12","Nums":"\u51a0","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":602288,"Drawing_Date":"02-16","Drawing_Time":"21:12","Nums":"\u4e09","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":602109,"Drawing_Date":"02-15","Drawing_Time":"21:12","Nums":"\u4e5d","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":601930,"Drawing_Date":"02-14","Drawing_Time":"21:12","Nums":"\u4e03","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":601751,"Drawing_Date":"02-13","Drawing_Time":"21:12","Nums":"\u51a0","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":601572,"Drawing_Date":"02-12","Drawing_Time":"21:12","Nums":"\u4e03","Big":0,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":601393,"Drawing_Date":"02-11","Drawing_Time":"21:12","Nums":"\u4e09","Big":0,"Small":0,"Odd":0,"Even":1}]';//走势图数据json
            var option = '[606764,606763,606762,606761,606760,606759,606758,606757,606756,606755,606754,606753,606752,606751,606750,606749,606748,606747,606746,606745,606744,606743,606742,606741,606740,606739,606738,606737,606736,606735,606734,606733,606732,606731,606730,606729,606728,606727,606726,606725,606724,606723,606722,606721,606720,606719,606718,606717,606716,606715,606714,606713,606712,606711,606710,606709,606708,606707,606706,606705,606704,606703,606702,606701,606700,606699,606698,606697,606696,606695,606694,606693,606692,606691,606690,606689,606688,606687,606686,606685,606684,606683,606682,606681,606680,606679,606678,606677,606676,606675,606674,606673,606672,606671,606670,606669,606668,606667,606666,606665,606664,606663,606662,606661,606660,606659,606658,606657,606656,606655,606654,606653,606652,606651,606650,606649,606648,606647,606646,606645,606644,606643,606642,606641,606640,606639,606638,606637,606636,606635,606634,606633,606632,606631,606630,606629,606628,606627,606626,606625,606624,606623,606622,606621,606620,606619,606618]';//下拉框期号数据json
            var time = '21:17';//当期期开奖时间
            var viewmodel = avalon.define('chart', function (vm) {
                vm.ballName = "号码1";//走势名称
                vm.ball = 0;//球号索引
                vm.ballArrary = ["冠", "亚", "三", "四", "五", "六", "七", "八", "九", "十"];//列头
                vm.totaldata = [];//走势图数据
                vm.selectdata = [];//绑定下拉框期号数据
                vm.time = time;//当期选择期开奖时间
                vm.periodInfo = 0;
                vm.changeball = function (t, b, o) {
                    vm.ballName = t;
                    vm.ball = b;
                    $(".data-stat").hide();
                    $(".trendChartloading").show();
                    chartLine.clearLines();
                    var vsel = $("#periodCount option:selected").val();
                    $.get(ajaxUrl, { id: vm.ball, pid: vsel }, function (data) {
                        //alert(data);
                        var dataObj = eval("(" + data + ")");//转换为json对象 
                        vm.totaldata = dataObj.chart;
                        //vm.selectdata = dataObj.option;
                        vm.time = dataObj.time;

                        vm.SetStyle(vsel);
                        vm.drawLine();

                        $(".data-stat").show();
                        $(".trendChartloading").hide();
                    }, 'html');
                };
                vm.changePeriod = function (t, pid) {
                    var vperid;
                    if ("object" == typeof (t)) {
                        vperid = $(t).val();
                    } else {
                        vperid = pid;
                    }
                    $(".data-stat").hide();
                    $(".trendChartloading").show();
                    chartLine.clearLines();
                    $.get(ajaxUrl, { id: vm.ball, pid: vperid }, function (data) {
                        var dataObj = eval("(" + data + ")");//转换为json对象 
                        vm.totaldata = dataObj.chart;
                        vm.time = dataObj.time;

                        vm.SetStyle(vperid);
                        vm.drawLine();

                        $(".data-stat").show();
                        $(".trendChartloading").hide();
                    }, 'html');
                }
                vm.currNo = 0;
                vm.nextNo = 0;
                vm.nextTime = "";
                vm.currDate = "";
                vm.newIssue = 0; //最近新一期期号
                vm.newNumber = "";//最近新一期开出开奖号码
                vm.nextCurrNo = "";//用于存储走势第一条期号

                vm.SetStyle = function (vperid) {

                    if (vm.nextNo == vperid || (vm.currNo == vperid && ((vperid == vm.newIssue && vm.newNumber == "") || vm.currNo > vm.newIssue))) {
                        vm.nextCurrNo = vperid;
                        $("#td_award").show();
                    } else if (vm.currNo == vperid && vm.totaldata[0].Period != vm.currNo) {
                        vm.nextCurrNo = vperid;
                        $("#td_award").show();
                    }
                    else {
                        $("#td_award").hide();
                    }

                }
                vm.AddOption = function () {
                    if ($("#periodCount option").eq(0).val() != vm.nextNo) {
                        $("#periodCount").prepend("<option value='" + vm.nextNo + "'>" + vm.nextNo + "期</option>");
                    }
                }
                vm.SetLoadAwardInfo = function () {
                    $.get('/pk10/AjaxTrend', { t: Math.random() }, function (data) {
                        //{"time":1409971185065,"current":{"periodNumber":27,"awardTime":"2014-09-06 10:30:00"},"next":{"periodNumber":28,"awardTime":"2014-09-06 10:40:00"}}
                        vm.currNo = data.current.periodNumber;
                        vm.nextNo = data.next.periodNumber;
                        vm.nextCurrNo = data.next.periodNumber;
                        vm.nextTime = new Date(data.next.awardTime.replace(/-/g, "/")).pattern("MM/dd HH:mm");
                        vm.currDate = new Date(data.current.awardTime.replace(/-/g, "/")).pattern("MM-dd");
                        //alert(data.newIssue.periodNumber + ":" + data.newIssue.awardNumber);
                        vm.newIssue = data.newIssue.periodNumber;
                        vm.newNumber = data.newIssue.awardNumber;

                        if (true == bflag) {

                            vm.AddOption();

                            if ($("#periodCount option:selected").val() == vm.currNo) {
                                vm.changePeriod("", vm.currNo);
                            }
                        }

                    }, 'json').error(function () {

                    });
                }
                vm.drawLine = function () {
                    chartLine.clearLines();
                    chartLine.reDraw();
                };

                vm.$watch("periodInfo", function (v) {
                    vm.periodInfo = v;
                    vm.SetLoadAwardInfo();

                });
            });

            var vjson = eval(datas);
            viewmodel.totaldata = vjson;
            viewmodel.selectdata = eval(option);

            $(".data-stat").show();
            $(".trendChartloading").hide();
            viewmodel.SetLoadAwardInfo();

            avalon.scan();
            $(".jsloading").hide();
            viewmodel.drawLine();

        })
    });
	}
});


