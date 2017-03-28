// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);



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

	            var ajaxUrl = "/xyft/SameSumTrend";
	            //首次读取后台数据
	            var datas = '[{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"03-20","Drawing_Time":"22:14","Nums":"15","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"03-19","Drawing_Time":"22:14","Nums":"17","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-18","Drawing_Time":"22:14","Nums":"10","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-17","Drawing_Time":"22:14","Nums":"8","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-16","Drawing_Time":"22:14","Nums":"13","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-15","Drawing_Time":"22:14","Nums":"6","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"03-14","Drawing_Time":"22:14","Nums":"16","Big":1,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-13","Drawing_Time":"22:14","Nums":"10","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"03-12","Drawing_Time":"22:14","Nums":"17","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-11","Drawing_Time":"22:14","Nums":"12","Big":1,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-10","Drawing_Time":"22:14","Nums":"11","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-09","Drawing_Time":"22:14","Nums":"9","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-08","Drawing_Time":"22:14","Nums":"10","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-07","Drawing_Time":"22:14","Nums":"10","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-06","Drawing_Time":"22:14","Nums":"8","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"03-05","Drawing_Time":"22:14","Nums":"11","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-04","Drawing_Time":"22:14","Nums":"8","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-03","Drawing_Time":"22:14","Nums":"6","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"03-02","Drawing_Time":"22:14","Nums":"15","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"03-01","Drawing_Time":"22:14","Nums":"5","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"02-28","Drawing_Time":"22:14","Nums":"16","Big":1,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"02-27","Drawing_Time":"22:14","Nums":"15","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"02-26","Drawing_Time":"22:14","Nums":"7","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"02-25","Drawing_Time":"22:14","Nums":"15","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"02-24","Drawing_Time":"22:14","Nums":"13","Big":1,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"02-23","Drawing_Time":"22:14","Nums":"18","Big":1,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"02-22","Drawing_Time":"22:14","Nums":"6","Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":0,"Period":110,"Drawing_Date":"02-21","Drawing_Time":"22:14","Nums":"11","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":0,"Period":110,"Drawing_Date":"02-20","Drawing_Time":"22:14","Nums":"3","Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":0,"Back":1,"Period":110,"Drawing_Date":"02-19","Drawing_Time":"22:14","Nums":"18","Big":1,"Small":0,"Odd":0,"Even":1}]';//走势图数据json
	            var option = '[110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]';//下拉框期号数据json
	            var time = '110';//当期期开奖时间
	            var maxcount = '110';//当期最新一期期号

	            var viewmodel = avalon.define('chart', function (vm) {
	                vm.ballName = "冠亚和";//走势名称
	                vm.ball = 0;//球号索引
	                vm.ballArrary = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];//列头
	                vm.totaldata = [];//走势图数据
	                vm.selectdata = [];//绑定下拉框期号数据
	                vm.time = time;//当期选择期开奖时间
	                vm.periodInfo = 0;
	               
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
	                        vm.time = vperid;

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
	                    $.get('/xyft/AjaxTrend', { t: Math.random() }, function (data) {
	                        vm.currNo = data.current.periodNumber;
	                        vm.nextNo = data.next.periodNumber;
	                        vm.nextCurrNo = data.next.periodNumber;
	                        vm.nextTime = data.next.count;
	                        vm.currDate = new Date(data.current.awardTime.replace(/-/g, "/")).pattern("MM-dd");
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
	            viewmodel.nextTime = maxcount;

	            $(".data-stat").show();
	            $(".trendChartloading").hide();
	            viewmodel.SetLoadAwardInfo();

	            avalon.scan();
	            $(".jsloading").hide();
	            viewmodel.drawLine();
	        })
	    });
	    var bflag = false;

	    var vdraw = 0;
	    function drawTrend() {
	        vdraw += 1;
	        bflag = true;
	        $("#periodInfo").val(vdraw);
	      
	    }


		
	}
});


