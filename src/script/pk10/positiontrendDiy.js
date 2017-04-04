// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = '/pk10/positiontrend';
var lotMenu = '';
var lotteryLuzhu = "";;

function updateRecord() {
	$("#dataopened").val(parseInt( $("#dataopened").val())+1);
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
	        var showHotColdTrend = $.cookie("pk10_hotcold_trend");
	        showHotColdTrend = showHotColdTrend ? false : true;
	        require(['trendChart'], function (trendChart) {
	            var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".hover2"] }, lineWidth: 2, lineColor: "#BB8569", ckbSplit: "#chkFGX" });
	            // ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX"
	        var datas = '[{"Period":606751,"Result":10,"Nums":[7,26,5,10,1,8,4,2,20,0],"ZX":0,"FX":1,"CH":2,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":606750,"Result":5,"Nums":[6,25,4,9,0,7,3,1,19,16],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":606749,"Result":8,"Nums":[5,24,3,8,7,6,2,0,18,15],"ZX":1,"FX":5,"CH":0,"Big":0,"Small":3,"Odd":2,"Even":0},{"Period":606748,"Result":8,"Nums":[4,23,2,7,6,5,1,0,17,14],"ZX":0,"FX":4,"CH":2,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":606747,"Result":7,"Nums":[3,22,1,6,5,4,0,12,16,13],"ZX":0,"FX":3,"CH":1,"Big":0,"Small":1,"Odd":0,"Even":4},{"Period":606746,"Result":3,"Nums":[2,21,0,5,4,3,48,11,15,12],"ZX":1,"FX":2,"CH":0,"Big":3,"Small":0,"Odd":0,"Even":3},{"Period":606745,"Result":3,"Nums":[1,20,0,4,3,2,47,10,14,11],"ZX":0,"FX":1,"CH":14,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":606744,"Result":1,"Nums":[0,19,4,3,2,1,46,9,13,10],"ZX":1,"FX":0,"CH":13,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":606743,"Result":6,"Nums":[11,18,3,2,1,0,45,8,12,9],"ZX":0,"FX":3,"CH":12,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":606742,"Result":5,"Nums":[10,17,2,1,0,16,44,7,11,8],"ZX":0,"FX":2,"CH":11,"Big":7,"Small":0,"Odd":0,"Even":1},{"Period":606741,"Result":4,"Nums":[9,16,1,0,3,15,43,6,10,7],"ZX":0,"FX":1,"CH":10,"Big":6,"Small":0,"Odd":1,"Even":0},{"Period":606740,"Result":3,"Nums":[8,15,0,1,2,14,42,5,9,6],"ZX":2,"FX":0,"CH":9,"Big":5,"Small":0,"Odd":0,"Even":1},{"Period":606739,"Result":4,"Nums":[7,14,2,0,1,13,41,4,8,5],"ZX":1,"FX":0,"CH":8,"Big":4,"Small":0,"Odd":1,"Even":0},{"Period":606738,"Result":5,"Nums":[6,13,1,19,0,12,40,3,7,4],"ZX":0,"FX":1,"CH":7,"Big":3,"Small":0,"Odd":0,"Even":3},{"Period":606737,"Result":3,"Nums":[5,12,0,18,1,11,39,2,6,3],"ZX":3,"FX":0,"CH":6,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":606736,"Result":5,"Nums":[4,11,7,17,0,10,38,1,5,2],"ZX":2,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":606735,"Result":8,"Nums":[3,10,6,16,2,9,37,0,4,1],"ZX":1,"FX":0,"CH":4,"Big":0,"Small":2,"Odd":2,"Even":0},{"Period":606734,"Result":10,"Nums":[2,9,5,15,1,8,36,29,3,0],"ZX":0,"FX":2,"CH":3,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":606733,"Result":5,"Nums":[1,8,4,14,0,7,35,28,2,16],"ZX":0,"FX":1,"CH":2,"Big":2,"Small":0,"Odd":0,"Even":7},{"Period":606732,"Result":1,"Nums":[0,7,3,13,4,6,34,27,1,15],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":6},{"Period":606731,"Result":9,"Nums":[4,6,2,12,3,5,33,26,0,14],"ZX":1,"FX":2,"CH":0,"Big":0,"Small":2,"Odd":0,"Even":5},{"Period":606730,"Result":9,"Nums":[3,5,1,11,2,4,32,25,0,13],"ZX":0,"FX":1,"CH":38,"Big":0,"Small":1,"Odd":0,"Even":4},{"Period":606729,"Result":3,"Nums":[2,4,0,10,1,3,31,24,11,12],"ZX":1,"FX":0,"CH":37,"Big":3,"Small":0,"Odd":0,"Even":3},{"Period":606728,"Result":5,"Nums":[1,3,6,9,0,2,30,23,10,11],"ZX":0,"FX":1,"CH":36,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":606727,"Result":1,"Nums":[0,2,5,8,7,1,29,22,9,10],"ZX":1,"FX":0,"CH":35,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":606726,"Result":6,"Nums":[3,1,4,7,6,0,28,21,8,9],"ZX":0,"FX":1,"CH":34,"Big":0,"Small":1,"Odd":3,"Even":0},{"Period":606725,"Result":2,"Nums":[2,0,3,6,5,1,27,20,7,8],"ZX":1,"FX":0,"CH":33,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":606724,"Result":6,"Nums":[1,3,2,5,4,0,26,19,6,7],"ZX":0,"FX":1,"CH":32,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":606723,"Result":1,"Nums":[0,2,1,4,3,10,25,18,5,6],"ZX":1,"FX":0,"CH":31,"Big":5,"Small":0,"Odd":0,"Even":2},{"Period":606722,"Result":3,"Nums":[13,1,0,3,2,9,24,17,4,5],"ZX":0,"FX":1,"CH":30,"Big":4,"Small":0,"Odd":0,"Even":1},{"Period":606721,"Result":2,"Nums":[12,0,6,2,1,8,23,16,3,4],"ZX":1,"FX":0,"CH":29,"Big":3,"Small":0,"Odd":1,"Even":0},{"Period":606720,"Result":5,"Nums":[11,8,5,1,0,7,22,15,2,3],"ZX":0,"FX":1,"CH":28,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":606719,"Result":4,"Nums":[10,7,4,0,5,6,21,14,1,2],"ZX":2,"FX":0,"CH":27,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":606718,"Result":9,"Nums":[9,6,3,2,4,5,20,13,0,1],"ZX":1,"FX":0,"CH":26,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":606717,"Result":10,"Nums":[8,5,2,1,3,4,19,12,7,0],"ZX":0,"FX":2,"CH":25,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":606716,"Result":4,"Nums":[7,4,1,0,2,3,18,11,6,24],"ZX":0,"FX":1,"CH":24,"Big":3,"Small":0,"Odd":1,"Even":0},{"Period":606715,"Result":3,"Nums":[6,3,0,43,1,2,17,10,5,23],"ZX":2,"FX":0,"CH":23,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":606714,"Result":5,"Nums":[5,2,3,42,0,1,16,9,4,22],"ZX":1,"FX":0,"CH":22,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":606713,"Result":6,"Nums":[4,1,2,41,13,0,15,8,3,21],"ZX":0,"FX":1,"CH":21,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":606712,"Result":2,"Nums":[3,0,1,40,12,6,14,7,2,20],"ZX":2,"FX":0,"CH":20,"Big":2,"Small":0,"Odd":1,"Even":0}]';
	            var stats = '[{"Period":0,"Result":0,"Nums":[4,3,7,4,8,4,1,3,3,3],"ZX":19,"FX":18,"CH":3,"Big":14,"Small":26,"Odd":23,"Even":17},{"Period":0,"Result":0,"Nums":[13,26,7,43,13,16,48,29,20,24],"ZX":3,"FX":5,"CH":38,"Big":7,"Small":3,"Odd":3,"Even":7}]';
	            var hotcolds = '[{"period":606752,"hot":[5,3],"warm":[10,8,7,1,6,4],"cold":[2,9]},{"period":606751,"hot":[5,3],"warm":[8,7,1,6,4,10,9],"cold":[2]},{"period":606750,"hot":[3,5],"warm":[8,7,1,6,4,10,9],"cold":[2]},{"period":606749,"hot":[3,5],"warm":[8,7,1,6,4,10,9],"cold":[2]},{"period":606748,"hot":[3,5],"warm":[7,1,6,4,8,10,9],"cold":[2]},{"period":606747,"hot":[3,5],"warm":[1,6,4,8,10,9],"cold":[2,7]},{"period":606746,"hot":[3,5],"warm":[1,6,4,8,10,9],"cold":[2,7]},{"period":606745,"hot":[5],"warm":[1,6,4,3,8,10,9,2],"cold":[7]},{"period":606744,"hot":[5],"warm":[6,4,3,8,10,1,9,2],"cold":[7]},{"period":606743,"hot":[5],"warm":[4,3,8,10,1,9,6,2],"cold":[7]},{"period":606742,"hot":[3,5],"warm":[4,8,10,1,9,6,2],"cold":[7]},{"period":606741,"hot":[3,5],"warm":[4,8,10,1,9,6,2],"cold":[7]},{"period":606740,"hot":[5],"warm":[4,3,8,10,1,9,6,2],"cold":[7]},{"period":606739,"hot":[5],"warm":[3,8,10,1,9,6,2,4],"cold":[7]},{"period":606738,"hot":[5],"warm":[3,8,10,1,9,6,2,4],"cold":[7]},{"period":606737,"hot":[5],"warm":[8,10,1,9,3,6,2,4],"cold":[7]},{"period":606736,"hot":[],"warm":[8,10,5,1,9,3,6,2,4],"cold":[7]},{"period":606735,"hot":[],"warm":[10,5,1,9,3,6,2,4],"cold":[7,8]},{"period":606734,"hot":[5],"warm":[1,9,3,6,2,4,10],"cold":[7,8]},{"period":606733,"hot":[],"warm":[1,9,3,5,6,2,4,10],"cold":[7,8]},{"period":606732,"hot":[],"warm":[9,3,5,1,6,2,4,10],"cold":[7,8]},{"period":606731,"hot":[3],"warm":[9,5,1,6,2,4,10],"cold":[7,8]},{"period":606730,"hot":[3],"warm":[5,1,6,2,4,9,10],"cold":[7,8]},{"period":606729,"hot":[],"warm":[5,1,6,2,3,4,9,10],"cold":[7,8]},{"period":606728,"hot":[3],"warm":[1,6,2,5,4,9,10],"cold":[7,8]},{"period":606727,"hot":[3],"warm":[6,2,1,5,4,9,10],"cold":[7,8]},{"period":606726,"hot":[3],"warm":[2,6,1,5,4,9,10],"cold":[7,8]},{"period":606725,"hot":[3],"warm":[6,1,2,5,4,9,10,8],"cold":[7]},{"period":606724,"hot":[3],"warm":[1,2,5,4,9,10,6,8],"cold":[7]},{"period":606723,"hot":[3],"warm":[2,5,4,9,10,6,1,8],"cold":[7]},{"period":606722,"hot":[3],"warm":[2,5,4,9,10,6,1,8],"cold":[7]},{"period":606721,"hot":[3],"warm":[5,4,9,10,6,2,1,8],"cold":[7]},{"period":606720,"hot":[3],"warm":[4,9,10,5,6,2,1,8],"cold":[7]},{"period":606719,"hot":[3],"warm":[9,10,4,5,6,2,1,8],"cold":[7]},{"period":606718,"hot":[3],"warm":[10,4,5,6,2,9,1,8,7],"cold":[]},{"period":606717,"hot":[3],"warm":[4,5,6,2,9,1,8,7],"cold":[10]},{"period":606716,"hot":[3,2],"warm":[5,6,9,1,8,7],"cold":[4,10]},{"period":606715,"hot":[2,3,1],"warm":[5,6,9,8,7],"cold":[4,10]},{"period":606714,"hot":[2,3,1],"warm":[6,9,8,5,7],"cold":[4,10]},{"period":606713,"hot":[2,3,1],"warm":[9,6,8,5,7],"cold":[4,10]},{"period":606712,"hot":[3,1,2],"warm":[9,6,8,5,7,10],"cold":[4]}]';
	        var viewmodel = avalon.define('chart', function (vm) {
	            vm.ballName = '冠军';
	            vm.ball = 1;
	            vm.periodCount = 40;
	            vm.trendDatas = [];
	            vm.totalDatas = [];
	            vm.$hotColdDatas = [];
	            vm.flagPeriod = -1;
	            vm.updown = 1;
	            vm.fgxIscheck = true;
	            vm.hotcoldIscheck = showHotColdTrend;
	            vm.changeball = function (t, b) {
	                vm.ballName = t ;
	                vm.ball = b;
	                chartLine.clearLines();
	                $(".data-stat").hide();
	                $(".trendChartloading").show();
	                $.get("/pk10/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
	                    var json = eval(data);
	                    vm.$hotColdDatas = json.hotcold;
	                    var tdatas = json.list;
	                    var sdatas = json.stat;
	                    vm.trendDatas = tdatas;
	                    vm.totalDatas = sdatas;
	                    if (vm.trendDatas.length > 0) {
	                        viewmodel.addVirtualBalls();
	                        viewmodel.drawLine();
	                    }
	                    $(".data-stat").show();
	                    $(".trendChartloading").hide();
	                }, 'json');
	            };
	            vm.chkFgx = function () {
	                vm.fgxIscheck = !vm.fgxIscheck;
	                chartLine.splitDisplay();
	            }
	            vm.chkHotCold = function () {
	                vm.hotcoldIscheck = !vm.hotcoldIscheck;
	                if (vm.hotcoldIscheck) {
	                    $.cookie("pk10_hotcold_trend", "", null, { expires: -1, path: "/", secure: false });
	                } else {
	                    $.cookie("pk10_hotcold_trend", "", "1", { expires: 3600 * 24 * 30, path: "/", secure: false });
	                }
	            }
	            vm.hotcoldCls = function (p,r, n) {
	                if (!vm.hotcoldIscheck || n != 0) return "";
	                for (var i = 0; i < viewmodel.$hotColdDatas.length; i++) {
	                    if (viewmodel.$hotColdDatas[i].period == p) {
	                        var hc = viewmodel.$hotColdDatas[i];
	                        if (hc.hot.indexOf(~~r) > -1) return "redBall";
	                        else if (hc.cold.indexOf(~~r) > -1) return "blueBall";
	                        else return "yellowBall";
	                        break;
	                    }
	                }
	            }
	            vm.sortDatas = function () {
	                viewmodel.trendDatas.sort(function (a, b) {
	                    var r = a.Period > b.Period ? -1 : 1;
	                    return vm.updown * r;
	                });
	            };
	            vm.removeData = function (p) {
	                for (var i = viewmodel.trendDatas.length - 1; i > -1; i--) {
	                    if (viewmodel.trendDatas[i].Period == p) {
	                        viewmodel.trendDatas.removeAt(i);
	                        break;
	                    }
	                }
	            };
	            vm.maxData = {
	                get: function () {
	                    if (vm.trendDatas.length > 0) {
	                        var a = vm.trendDatas[0];
	                        var b = vm.trendDatas[vm.trendDatas.length - 1];
	                        if (a.Period > b.Period) return a;
	                        else return b;
	                    } else {
	                        return {};
	                    }
	                }
	            };
	            vm.getData = function (p) {
	                for (var i = vm.trendDatas.length - 1; i > -1; i--) {
	                    if (vm.trendDatas[i].Period == p) {
	                        return vm.trendDatas[i];
	                    }
	                }
	                return null;
	            };
	            vm.drawLine = function () {
	                chartLine.clearLines();
	                chartLine.reDraw();
	            };
	            vm.pushVirtual = function (p) {
	                viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], isVirtual: true, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null });
	            };
	            vm.virtualBall = function (p, n) {
	                var r = vm.getData(p);
	                if (r.Result == parseInt(n)) {
	                    r.Result = 0;
	                } else {
	                    r.Result = parseInt(n);
	                }
	                vm.calculate(r);
	                vm.checkVirtual(p);
	                vm.drawLine();
	            };
	            vm.checkVirtual = function (p) {
	                var maxPeripd = vm.maxData.Period;
	                if (p < maxPeripd) {
	                    for (var i = p + 1; i <= maxPeripd; i++) {
	                        var next = vm.getData(i);
	                        if (next.Result > 0) {
	                            vm.calculate(next);
	                        } else {
	                            break;
	                        }
	                    }
	                }
	            };
	            vm.calculate = function (r) {
	                var prev = vm.getData(r.Period - 1);
	                if ((r && r.Result <= 0) || (prev && prev.Result <= 0)) {
	                    r.Result = 0;
	                    r.FX = null;
	                    r.ZX = null;
	                    r.CH = null;
	                    r.Big = null;
	                    r.Small = null;
	                    r.Odd = null;
	                    r.Even = null;
	                }
	                else if (r && prev && prev.Result > 0) {
	                    if (!r.isVirtual) {
	                        for (var i = 0; i < 10; i++) {
	                            if (r.Nums[i] == r.Result) {
	                                r.Nums[i] = 0;
	                            }
	                            else {
	                                r.Nums[i] = prev.Nums[i] + 1;
	                            }
	                        }
	                    }
	                    if (r.Result == prev.Result) {
	                        r.CH = 0;
	                        r.FX = prev.FX + 1;
	                        r.ZX = prev.ZX + 1;
	                    } else if (r.Result > prev.Result) {
	                        r.CH = prev.CH + 1;
	                        r.ZX = 0;
	                        r.FX = prev.FX + 1;
	                    } else {
	                        r.CH = prev.CH + 1;
	                        r.ZX = prev.ZX + 1;
	                        r.FX = 0;
	                    }
	                    if (r.Result % 2 == 0) {
	                        r.Even = 0;
	                        r.Odd = prev.Odd + 1;
	                    } else {
	                        r.Odd = 0;
	                        r.Even = prev.Even + 1;
	                    }
	                    if (r.Result > 5) {
	                        r.Big = 0;
	                        r.Small = prev.Small + 1;
	                    } else {
	                        r.Big = prev.Big + 1;
	                        r.Small = 0;
	                    }
	                }
	            };
	            vm.statTotal = function (d) {
	                var newArr = viewmodel.totalDatas;

	                newArr[0].Nums[d.Result - 1] += 1;
	                for (var i = 0; i < 10; i++) {
	                    if (d.Nums[i] > newArr[1].Nums[i]) {
	                        newArr[1].Nums[i] = d.Nums[i];
	                    }
	                }
	                if (d.ZX == 0) {
	                    newArr[0].ZX += 1;
	                } else if(d.ZX>newArr[1].ZX){
	                    newArr[1].ZX = d.ZX;
	                }
	                if (d.CH == 0) {
	                    newArr[0].CH += 1;
	                } else if (d.CH > newArr[1].CH) {
	                    newArr[1].CH = d.CH;
	                }
	                if (d.FX == 0) {
	                    newArr[0].FX += 1;
	                } else if (d.FX > newArr[1].FX) {
	                    newArr[1].FX = d.FX;
	                }
	                if (d.Big == 0) {
	                    newArr[0].Big += 1;
	                } else if (d.Big > newArr[1].Big) {
	                    newArr[1].Big = d.Big;
	                }
	                if (d.Small == 0) {
	                    newArr[0].Small += 1;
	                } else if (d.Small > newArr[1].Small) {
	                    newArr[1].Small = d.Small;
	                }
	                if (d.Odd == 0) {
	                    newArr[0].Odd += 1;
	                } else if (d.Odd > newArr[1].Odd) {
	                    newArr[1].Odd = d.Odd;
	                }
	                if (d.Even == 0) {
	                    newArr[0].Even += 1;
	                } else if (d.Even > newArr[1].Even) {
	                    newArr[1].Even = d.Even;
	                }

	                viewmodel.totalDatas = newArr;
	            };
	            vm.addVirtualBalls = function () {
	                viewmodel.pushVirtual(viewmodel.maxData.Period + 1);
	                viewmodel.pushVirtual(viewmodel.maxData.Period + 1);
	                viewmodel.pushVirtual(viewmodel.maxData.Period + 1);
	            };
	            vm.$watch("periodCount", function (v) {
	                vm.changeball(vm.ballName, vm.ball);
	            });
	            vm.$watch("flagPeriod", function (value, oldvalue) {
	               if (value == -1) return;
	                $.get("/pk10/hotcoldstat", {pos:viewmodel.ball,count: vm.periodCount, istoday: vm.periodCount == 0 ,t: Math.random() }, function (hcdata) {
	                    viewmodel.$hotColdDatas = hcdata.hotcold;
	                    $.get("/pk10/ajax", { ajaxHandler: 'GetPk10AwardData', t: Math.random() }, function (data) {
	                   
	                        var p = data.current.periodNumber;
	                        viewmodel.removeData(p);
	                        var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
	                        viewmodel.calculate(a);
	                        viewmodel.trendDatas.push(a);
	                        viewmodel.pushVirtual(viewmodel.maxData.Period + 1);
	                        viewmodel.sortDatas();

	                        if (viewmodel.periodCount > 0) {
	                            var tmpFgx = viewmodel.fgxIscheck;
	                            if (tmpFgx) {
	                                viewmodel.fgxIscheck = false;
	                                chartLine.splitDisplay();
	                            }
	                            viewmodel.trendDatas.pop();
	                            if (tmpFgx) {
	                                viewmodel.fgxIscheck = tmpFgx;
	                                chartLine.splitDisplay();
	                            }
	                        }

	                        viewmodel.checkVirtual();
	                        viewmodel.drawLine();
	                        viewmodel.statTotal(a);
	                    }, 'json');
	                    if (!vm.hotcoldIscheck) return;
	                    vm.hotcoldIscheck = false;
	                    vm.hotcoldIscheck = true;
	                    avalon.scan();
	                }, 'json');
	            })
	        });
	      
	        viewmodel.trendDatas = eval(datas);
	        viewmodel.totalDatas = eval(stats);
	        viewmodel.$hotColdDatas = eval(hotcolds);
	        $(".data-stat").show();
	        $(".trendChartloading").hide();
	        if (viewmodel.trendDatas.length > 0) {
	            viewmodel.addVirtualBalls();
	        }
	        //   viewmodel.sortDatas();
	        avalon.scan();
	        $(".jsloading").hide();
	        viewmodel.drawLine();
	   });
	    });

		
	}
});


