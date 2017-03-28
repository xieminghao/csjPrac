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

		function updateRecord() {
		    $("#dataopened").val(parseInt( $("#dataopened").val())+1);
		}

		$(function () {
	        require(['trendChart'], function (trendChart) {
	            var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".hover2"] }, lineWidth: 2, lineColor: "#BB8569", ckbSplit: "#chkFGX" });
	            // ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX"
	            var datas = '[{"Period":170321069,"Result":5,"Nums":[1,127,15,3,0,7,13,12,67,97,10,27,46,22,16,8,4,18,25,14],"ZX":0,"FX":2,"CH":1,"Big":4,"Small":0,"Odd":0,"Even":3},{"Period":170321068,"Result":1,"Nums":[0,126,14,2,5,6,12,11,66,96,9,26,45,21,15,7,3,17,24,13],"ZX":3,"FX":1,"CH":0,"Big":3,"Small":0,"Odd":0,"Even":2},{"Period":170321067,"Result":1,"Nums":[0,125,13,1,4,5,11,10,65,95,8,25,44,20,14,6,2,16,23,12],"ZX":2,"FX":0,"CH":31,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170321066,"Result":4,"Nums":[26,124,12,0,3,4,10,9,64,94,7,24,43,19,13,5,1,15,22,11],"ZX":1,"FX":0,"CH":30,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321065,"Result":17,"Nums":[25,123,11,1,2,3,9,8,63,93,6,23,42,18,12,4,0,14,21,10],"ZX":0,"FX":1,"CH":29,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321064,"Result":4,"Nums":[24,122,10,0,1,2,8,7,62,92,5,22,41,17,11,3,45,13,20,9],"ZX":3,"FX":0,"CH":28,"Big":3,"Small":0,"Odd":1,"Even":0},{"Period":170321063,"Result":5,"Nums":[23,121,9,5,0,1,7,6,61,91,4,21,40,16,10,2,44,12,19,8],"ZX":2,"FX":0,"CH":27,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170321062,"Result":6,"Nums":[22,120,8,4,12,0,6,5,60,90,3,20,39,15,9,1,43,11,18,7],"ZX":1,"FX":0,"CH":26,"Big":1,"Small":0,"Odd":3,"Even":0},{"Period":170321061,"Result":16,"Nums":[21,119,7,3,11,1,5,4,59,89,2,19,38,14,8,0,42,10,17,6],"ZX":0,"FX":1,"CH":25,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321060,"Result":6,"Nums":[20,118,6,2,10,0,4,3,58,88,1,18,37,13,7,19,41,9,16,5],"ZX":1,"FX":0,"CH":24,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321059,"Result":11,"Nums":[19,117,5,1,9,7,3,2,57,87,0,17,36,12,6,18,40,8,15,4],"ZX":0,"FX":1,"CH":23,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321058,"Result":4,"Nums":[18,116,4,0,8,6,2,1,56,86,28,16,35,11,5,17,39,7,14,3],"ZX":1,"FX":0,"CH":22,"Big":3,"Small":0,"Odd":2,"Even":0},{"Period":170321057,"Result":8,"Nums":[17,115,3,9,7,5,1,0,55,85,27,15,34,10,4,16,38,6,13,2],"ZX":0,"FX":1,"CH":21,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321056,"Result":7,"Nums":[16,114,2,8,6,4,0,20,54,84,26,14,33,9,3,15,37,5,12,1],"ZX":1,"FX":0,"CH":20,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321055,"Result":20,"Nums":[15,113,1,7,5,3,10,19,53,83,25,13,32,8,2,14,36,4,11,0],"ZX":0,"FX":1,"CH":19,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321054,"Result":3,"Nums":[14,112,0,6,4,2,9,18,52,82,24,12,31,7,1,13,35,3,10,22],"ZX":1,"FX":0,"CH":18,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321053,"Result":15,"Nums":[13,111,10,5,3,1,8,17,51,81,23,11,30,6,0,12,34,2,9,21],"ZX":0,"FX":1,"CH":17,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321052,"Result":6,"Nums":[12,110,9,4,2,0,7,16,50,80,22,10,29,5,21,11,33,1,8,20],"ZX":1,"FX":0,"CH":16,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":170321051,"Result":18,"Nums":[11,109,8,3,1,2,6,15,49,79,21,9,28,4,20,10,32,0,7,19],"ZX":0,"FX":1,"CH":15,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321050,"Result":5,"Nums":[10,108,7,2,0,1,5,14,48,78,20,8,27,3,19,9,31,49,6,18],"ZX":1,"FX":0,"CH":14,"Big":3,"Small":0,"Odd":0,"Even":1},{"Period":170321049,"Result":6,"Nums":[9,107,6,1,11,0,4,13,47,77,19,7,26,2,18,8,30,48,5,17],"ZX":0,"FX":1,"CH":13,"Big":2,"Small":0,"Odd":4,"Even":0},{"Period":170321048,"Result":4,"Nums":[8,106,5,0,10,57,3,12,46,76,18,6,25,1,17,7,29,47,4,16],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":3,"Even":0},{"Period":170321047,"Result":14,"Nums":[7,105,4,1,9,56,2,11,45,75,17,5,24,0,16,6,28,46,3,15],"ZX":0,"FX":1,"CH":11,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321046,"Result":4,"Nums":[6,104,3,0,8,55,1,10,44,74,16,4,23,9,15,5,27,45,2,14],"ZX":2,"FX":0,"CH":10,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321045,"Result":7,"Nums":[5,103,2,57,7,54,0,9,43,73,15,3,22,8,14,4,26,44,1,13],"ZX":1,"FX":0,"CH":9,"Big":1,"Small":0,"Odd":0,"Even":3},{"Period":170321044,"Result":19,"Nums":[4,102,1,56,6,53,31,8,42,72,14,2,21,7,13,3,25,43,0,12],"ZX":0,"FX":1,"CH":8,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321043,"Result":3,"Nums":[3,101,0,55,5,52,30,7,41,71,13,1,20,6,12,2,24,42,16,11],"ZX":2,"FX":0,"CH":7,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321042,"Result":12,"Nums":[2,100,13,54,4,51,29,6,40,70,12,0,19,5,11,1,23,41,15,10],"ZX":1,"FX":0,"CH":6,"Big":0,"Small":2,"Odd":2,"Even":0},{"Period":170321041,"Result":16,"Nums":[1,99,12,53,3,50,28,5,39,69,11,2,18,4,10,0,22,40,14,9],"ZX":0,"FX":1,"CH":5,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321040,"Result":1,"Nums":[0,98,11,52,2,49,27,4,38,68,10,1,17,3,9,19,21,39,13,8],"ZX":1,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321039,"Result":12,"Nums":[15,97,10,51,1,48,26,3,37,67,9,0,16,2,8,18,20,38,12,7],"ZX":0,"FX":1,"CH":3,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321038,"Result":5,"Nums":[14,96,9,50,0,47,25,2,36,66,8,103,15,1,7,17,19,37,11,6],"ZX":1,"FX":0,"CH":2,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321037,"Result":14,"Nums":[13,95,8,49,19,46,24,1,35,65,7,102,14,0,6,16,18,36,10,5],"ZX":0,"FX":4,"CH":1,"Big":0,"Small":1,"Odd":6,"Even":0},{"Period":170321036,"Result":8,"Nums":[12,94,7,48,18,45,23,0,34,64,6,101,13,42,5,15,17,35,9,4],"ZX":4,"FX":3,"CH":0,"Big":4,"Small":0,"Odd":5,"Even":0},{"Period":170321035,"Result":8,"Nums":[11,93,6,47,17,44,22,0,33,63,5,100,12,41,4,14,16,34,8,3],"ZX":3,"FX":2,"CH":0,"Big":3,"Small":0,"Odd":4,"Even":0},{"Period":170321034,"Result":8,"Nums":[10,92,5,46,16,43,21,0,32,62,4,99,11,40,3,13,15,33,7,2],"ZX":2,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":3,"Even":0},{"Period":170321033,"Result":8,"Nums":[9,91,4,45,15,42,20,0,31,61,3,98,10,39,2,12,14,32,6,1],"ZX":1,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":170321032,"Result":20,"Nums":[8,90,3,44,14,41,19,33,30,60,2,97,9,38,1,11,13,31,5,0],"ZX":0,"FX":4,"CH":3,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321031,"Result":15,"Nums":[7,89,2,43,13,40,18,32,29,59,1,96,8,37,0,10,12,30,4,6],"ZX":0,"FX":3,"CH":2,"Big":0,"Small":2,"Odd":0,"Even":6},{"Period":170321030,"Result":11,"Nums":[6,88,1,42,12,39,17,31,28,58,0,95,7,36,8,9,11,29,3,5],"ZX":0,"FX":2,"CH":1,"Big":0,"Small":1,"Odd":0,"Even":5}]';
	            var stats = '[{"Period":0,"Result":0,"Nums":[3,0,2,5,4,4,2,5,0,0,2,2,0,2,2,2,1,1,1,2],"ZX":17,"FX":19,"CH":4,"Big":15,"Small":25,"Odd":17,"Even":23},{"Period":0,"Result":0,"Nums":[26,127,15,57,19,57,31,33,67,97,28,103,46,42,21,19,45,49,25,22],"ZX":4,"FX":4,"CH":31,"Big":4,"Small":3,"Odd":6,"Even":6}]';
	            var viewmodel = avalon.define('chart', function (vm) {
	                vm.ballName = '第一球';
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
	                    vm.ballName = t;
	                    vm.ball = b;
	                    chartLine.clearLines();
	                    $(".data-stat").hide();
	                    $(".trendChartloading").show();
	                    $.get("/gdkl10/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
	                        for (var i = vm.trendDatas.length - 1; i > -1 ; i--) {
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
	                    if (period > 120) {
	                        period = 1;
	                        var y = Math.floor(dt / 10000);
	                        var m = Math.floor(dt / 100) % 100;
	                        var d = dt % 100;
	                        var newDt = new Date(2000 + y, m - 1, d);
	                        newDt.setDate(newDt.getDate() + 1);
	                        p = ~~newDt.pattern("yyMMdd") * 1000 + period;
	                    }
	                    viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], isVirtual: true, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null });
	                };
	                vm.virtualBall = function (p, n) {
	                    var r = vm.getData(p);
	                    if (r.Result == parseInt(n)) {
	                        r.Result = -1;
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
	                    r.Result = ~~r.Result;
	                    if ((r && r.Result < 0) || (prev && prev.Result < 0)) {
	                        r.Result = -1;
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
	                            for (var i = 0; i < 20; i++) {
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
	                        if (r.Result > 10) {
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

	                    newArr[0].Nums[d.Result-1] += 1;
	                    for (var i = 0; i < 20; i++) {
	                        if (d.Nums[i] > newArr[1].Nums[i]) {
	                            newArr[1].Nums[i] = d.Nums[i];
	                        }
	                    }
	                    if (d.ZX == 0) {
	                        newArr[0].ZX += 1;
	                    } else if (d.ZX > newArr[1].ZX) {
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
	                    $.get("/gdkl10/ajax", { ajaxHandler: 'Getgdkl10AwardData', t: Math.random() }, function (data) {
	                        var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
	                        var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
	                        viewmodel.removeData(p);
	                        var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
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


