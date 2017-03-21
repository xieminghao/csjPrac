// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
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

		function updateRecord() {
	        $("#dataopened").val(parseInt( $("#dataopened").val())+1);
	    }

	    $(function () { 
	        require(['trendChart'], function (trendChart) {
	            var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".hover2"] }, lineWidth: 2, lineColor: "#BB8569", ckbSplit: "#chkFGX" });
	            // ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX"
		        var datas = '[{"Period":170321100,"Result":8,"Nums":[15,5,47,7,2,1,4,0,3,9],"ZX":0,"FX":2,"CH":10,"Big":0,"Small":2,"Odd":2,"Even":0},{"Period":170321099,"Result":6,"Nums":[14,4,46,6,1,0,3,13,2,8],"ZX":0,"FX":1,"CH":9,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321098,"Result":5,"Nums":[13,3,45,5,0,14,2,12,1,7],"ZX":1,"FX":0,"CH":8,"Big":1,"Small":0,"Odd":0,"Even":3},{"Period":170321097,"Result":9,"Nums":[12,2,44,4,5,13,1,11,0,6],"ZX":0,"FX":2,"CH":7,"Big":0,"Small":2,"Odd":0,"Even":2},{"Period":170321096,"Result":7,"Nums":[11,1,43,3,4,12,0,10,15,5],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321095,"Result":2,"Nums":[10,0,42,2,3,11,1,9,14,4],"ZX":1,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321094,"Result":7,"Nums":[9,26,41,1,2,10,0,8,13,3],"ZX":0,"FX":1,"CH":4,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321093,"Result":4,"Nums":[8,25,40,0,1,9,14,7,12,2],"ZX":2,"FX":0,"CH":3,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321092,"Result":5,"Nums":[7,24,39,5,0,8,13,6,11,1],"ZX":1,"FX":0,"CH":2,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321091,"Result":10,"Nums":[6,23,38,4,1,7,12,5,10,0],"ZX":0,"FX":2,"CH":1,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321090,"Result":5,"Nums":[5,22,37,3,0,6,11,4,9,2],"ZX":2,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":170321089,"Result":5,"Nums":[4,21,36,2,0,5,10,3,8,1],"ZX":1,"FX":0,"CH":54,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321088,"Result":10,"Nums":[3,20,35,1,15,4,9,2,7,0],"ZX":0,"FX":1,"CH":53,"Big":0,"Small":1,"Odd":3,"Even":0},{"Period":170321087,"Result":4,"Nums":[2,19,34,0,14,3,8,1,6,42],"ZX":1,"FX":0,"CH":52,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":170321086,"Result":8,"Nums":[1,18,33,3,13,2,7,0,5,41],"ZX":0,"FX":1,"CH":51,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321085,"Result":1,"Nums":[0,17,32,2,12,1,6,7,4,40],"ZX":1,"FX":0,"CH":50,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321084,"Result":6,"Nums":[2,16,31,1,11,0,5,6,3,39],"ZX":0,"FX":2,"CH":49,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321083,"Result":4,"Nums":[1,15,30,0,10,12,4,5,2,38],"ZX":0,"FX":1,"CH":48,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321082,"Result":1,"Nums":[0,14,29,19,9,11,3,4,1,37],"ZX":1,"FX":0,"CH":47,"Big":1,"Small":0,"Odd":0,"Even":4},{"Period":170321081,"Result":9,"Nums":[1,13,28,18,8,10,2,3,0,36],"ZX":0,"FX":1,"CH":46,"Big":0,"Small":1,"Odd":0,"Even":3},{"Period":170321080,"Result":1,"Nums":[0,12,27,17,7,9,1,2,5,35],"ZX":2,"FX":0,"CH":45,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321079,"Result":7,"Nums":[3,11,26,16,6,8,0,1,4,34],"ZX":1,"FX":0,"CH":44,"Big":0,"Small":3,"Odd":0,"Even":1},{"Period":170321078,"Result":8,"Nums":[2,10,25,15,5,7,1,0,3,33],"ZX":0,"FX":2,"CH":43,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170321077,"Result":7,"Nums":[1,9,24,14,4,6,0,3,2,32],"ZX":0,"FX":1,"CH":42,"Big":0,"Small":1,"Odd":0,"Even":3},{"Period":170321076,"Result":1,"Nums":[0,8,23,13,3,5,4,2,1,31],"ZX":1,"FX":0,"CH":41,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321075,"Result":9,"Nums":[14,7,22,12,2,4,3,1,0,30],"ZX":0,"FX":2,"CH":40,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170321074,"Result":8,"Nums":[13,6,21,11,1,3,2,0,24,29],"ZX":0,"FX":1,"CH":39,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321073,"Result":5,"Nums":[12,5,20,10,0,2,1,8,23,28],"ZX":1,"FX":0,"CH":38,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321072,"Result":7,"Nums":[11,4,19,9,3,1,0,7,22,27],"ZX":0,"FX":1,"CH":37,"Big":0,"Small":3,"Odd":0,"Even":1},{"Period":170321071,"Result":6,"Nums":[10,3,18,8,2,0,1,6,21,26],"ZX":1,"FX":0,"CH":36,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170321070,"Result":7,"Nums":[9,2,17,7,1,4,0,5,20,25],"ZX":0,"FX":2,"CH":35,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321069,"Result":5,"Nums":[8,1,16,6,0,3,2,4,19,24],"ZX":0,"FX":1,"CH":34,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170321068,"Result":2,"Nums":[7,0,15,5,16,2,1,3,18,23],"ZX":1,"FX":0,"CH":33,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321067,"Result":7,"Nums":[6,7,14,4,15,1,0,2,17,22],"ZX":0,"FX":1,"CH":32,"Big":0,"Small":4,"Odd":0,"Even":1},{"Period":170321066,"Result":6,"Nums":[5,6,13,3,14,0,4,1,16,21],"ZX":1,"FX":0,"CH":31,"Big":0,"Small":3,"Odd":4,"Even":0},{"Period":170321065,"Result":8,"Nums":[4,5,12,2,13,1,3,0,15,20],"ZX":0,"FX":2,"CH":30,"Big":0,"Small":2,"Odd":3,"Even":0},{"Period":170321064,"Result":6,"Nums":[3,4,11,1,12,0,2,9,14,19],"ZX":0,"FX":1,"CH":29,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321063,"Result":4,"Nums":[2,3,10,0,11,23,1,8,13,18],"ZX":1,"FX":0,"CH":28,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321062,"Result":7,"Nums":[1,2,9,3,10,22,0,7,12,17],"ZX":0,"FX":1,"CH":27,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321061,"Result":1,"Nums":[0,1,8,2,9,21,14,6,11,16],"ZX":2,"FX":0,"CH":26,"Big":6,"Small":0,"Odd":0,"Even":1}]';
		        var stats = '[{"Period":0,"Result":0,"Nums":[5,2,0,4,6,5,8,5,3,2],"ZX":22,"FX":17,"CH":1,"Big":23,"Small":17,"Odd":22,"Even":18},{"Period":0,"Result":0,"Nums":[15,26,47,19,16,23,14,13,24,42],"ZX":2,"FX":2,"CH":54,"Big":6,"Small":4,"Odd":4,"Even":4}]';
		        var viewmodel = avalon.define('chart', function (vm) {
		            vm.ballName = '冠军';
		            vm.ball = 1;
		            vm.periodCount = 40;
		            vm.trendDatas = [];
		            vm.totalDatas = [];
		            vm.flagPeriod = -1;
		            vm.$updown = 1;
		            vm.fgxIscheck = true;
		            vm.showPeriod = function (period) {
		                var p = period % 1000;
		                return (20000000 + Math.floor(period / 1000)) + "-" + p;
		            }
		            vm.changeball = function (t, b) {
		                vm.ballName = t ;
		                vm.ball = b;
		                chartLine.clearLines();
		                $(".data-stat").hide();
		                $(".trendChartloading").show();
		                $.get("/xyft/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
		                    var json = eval(data);
		                    var tdatas = json.list;
		                    var sdatas = json.stat;
		                    vm.trendDatas = tdatas;
		                    vm.totalDatas = sdatas;
		                    if (viewmodel.trendDatas.length > 0) {
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
		            vm.sortDatas = function () {
		                viewmodel.trendDatas.sort(function (a, b) {
		                    var r = a.Period > b.Period ? -1 : 1;
		                    return vm.$updown * r;
		                });
		            };
		            vm.removeData = function (p) {
		                for (var i = vm.trendDatas.length - 1; i > -1; i--) {
		                    if (vm.trendDatas[i].Period == p) {
		                        vm.trendDatas.removeAt(i);
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
		            vm.getPrevData = function (p) {
		                var a = vm.trendDatas[0];
		                var b = vm.trendDatas[vm.trendDatas.length - 1];
		                if (a.Period > b.Period) {
		                    for (var i = 0; i < vm.trendDatas.length - 1; i++) {
		                        if (vm.trendDatas[i].Period < p) {
		                            return vm.trendDatas[i];
		                        }
		                    }
		                } else {
		                    for (var i = vm.trendDatas.length - 1; i >-1 ; i--) {
		                        if (vm.trendDatas[i].Period < p) {
		                            return vm.trendDatas[i];
		                        }
		                    }
		                }
		                return null;
		            };
		            vm.drawLine = function () {
		                chartLine.clearLines();
		                chartLine.reDraw();
		            };
		            vm.pushVirtual = function (p) {
		                var dt = Math.floor(p / 1000);
		                var period = p % 1000;
		                if (period > 180) {
		                    period = 1;
		                    var y = Math.floor(dt / 10000);
		                    var m = Math.floor(dt / 100) % 100;
		                    var d = dt % 100;
		                    var newDt = new Date(2000 + y, m-1, d);
		                    newDt.setDate(newDt.getDate() + 1);
		                    p = ~~newDt.pattern("yyMMdd") * 1000 + period;
		                }
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
		                        if (!next) continue;
		                        if (next.Result > 0) {
		                            vm.calculate(next);
		                        } else {
		                            break;
		                        }
		                    }
		                }
		            };
		            vm.calculate = function (r) {
		                var prev = vm.getPrevData(r.Period);
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
		                vm.periodCount = v;
		                vm.changeball(vm.ballName, vm.ball);
		            });
		            vm.$watch("flagPeriod", function (value, oldvalue) {
		                if (value == -1) return;
		                $.get("/xyft/ajax", { ajaxHandler: 'GetxyftAwardData', t: Math.random() }, function (data) {
		                    var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
		                    var p =(ds*1000+ data.current.periodNumber)%1000000000;
		                    viewmodel.removeData(p);
		                    var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
		                    viewmodel.calculate(a);
		                    viewmodel.trendDatas.push(a);
		                    viewmodel.pushVirtual(viewmodel.maxData.Period + 1);
		                    viewmodel.sortDatas();
		                    viewmodel.checkVirtual();
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
		                    viewmodel.drawLine();
		                    viewmodel.statTotal(a);
		                }, 'json');
		            })
		        });
		      
		        viewmodel.trendDatas = eval(datas);
		        viewmodel.totalDatas = eval(stats);

		        $(".data-stat").show();
		        $(".trendChartloading").hide();
		        if (viewmodel.trendDatas.length > 0) {
		            viewmodel.addVirtualBalls();
		        }
		        //   viewmodel.sortDatas();
		        avalon.scan();
		        viewmodel.drawLine();
		        $(".jsloading").hide();
		    });
		});


		
	}
});


