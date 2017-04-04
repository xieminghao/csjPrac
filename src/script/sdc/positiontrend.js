// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = '';
var lotteryLuzhu = "";
function updateRecord() {
    $("#dataopened").val(parseInt($("#dataopened").val()) + 1);
}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.web_dateLineBody').replaceWith(res);
        $(function () {
            require(['trendChart'], function (trendChart) {
                var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".hover2"] }, lineWidth: 2, lineColor: "#BB8569", ckbSplit: "#chkFGX" });
                // ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX"
                var datas = '[{"Period":170321065,"Result":6,"Nums":[4,12,6,2,3,1,0,18,7,25],"ZX":0,"FX":2,"CH":27,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170321064,"Result":5,"Nums":[3,11,5,1,2,0,31,17,6,24],"ZX":0,"FX":1,"CH":26,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321063,"Result":3,"Nums":[2,10,4,0,1,6,30,16,5,23],"ZX":1,"FX":0,"CH":25,"Big":5,"Small":0,"Odd":0,"Even":1},{"Period":170321062,"Result":4,"Nums":[1,9,3,14,0,5,29,15,4,22],"ZX":0,"FX":1,"CH":24,"Big":4,"Small":0,"Odd":5,"Even":0},{"Period":170321061,"Result":0,"Nums":[0,8,2,13,1,4,28,14,3,21],"ZX":1,"FX":0,"CH":23,"Big":3,"Small":0,"Odd":4,"Even":0},{"Period":170321060,"Result":4,"Nums":[9,7,1,12,0,3,27,13,2,20],"ZX":0,"FX":1,"CH":22,"Big":2,"Small":0,"Odd":3,"Even":0},{"Period":170321059,"Result":2,"Nums":[8,6,0,11,23,2,26,12,1,19],"ZX":1,"FX":0,"CH":21,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":170321058,"Result":8,"Nums":[7,5,16,10,22,1,25,11,0,18],"ZX":0,"FX":1,"CH":20,"Big":0,"Small":5,"Odd":1,"Even":0},{"Period":170321057,"Result":5,"Nums":[6,4,15,9,21,0,24,10,1,17],"ZX":1,"FX":0,"CH":19,"Big":0,"Small":4,"Odd":0,"Even":1},{"Period":170321056,"Result":8,"Nums":[5,3,14,8,20,1,23,9,0,16],"ZX":0,"FX":1,"CH":18,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321055,"Result":5,"Nums":[4,2,13,7,19,0,22,8,1,15],"ZX":1,"FX":0,"CH":17,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170321054,"Result":8,"Nums":[3,1,12,6,18,2,21,7,0,14],"ZX":0,"FX":1,"CH":16,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321053,"Result":1,"Nums":[2,0,11,5,17,1,20,6,8,13],"ZX":1,"FX":0,"CH":15,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321052,"Result":5,"Nums":[1,2,10,4,16,0,19,5,7,12],"ZX":0,"FX":1,"CH":14,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321051,"Result":0,"Nums":[0,1,9,3,15,2,18,4,6,11],"ZX":2,"FX":0,"CH":13,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321050,"Result":1,"Nums":[21,0,8,2,14,1,17,3,5,10],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":0,"Even":5},{"Period":170321049,"Result":5,"Nums":[20,3,7,1,13,0,16,2,4,9],"ZX":0,"FX":1,"CH":11,"Big":0,"Small":1,"Odd":0,"Even":4},{"Period":170321048,"Result":3,"Nums":[19,2,6,0,12,7,15,1,3,8],"ZX":1,"FX":0,"CH":10,"Big":1,"Small":0,"Odd":0,"Even":3},{"Period":170321047,"Result":7,"Nums":[18,1,5,3,11,6,14,0,2,7],"ZX":0,"FX":1,"CH":9,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321046,"Result":1,"Nums":[17,0,4,2,10,5,13,3,1,6],"ZX":1,"FX":0,"CH":8,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321045,"Result":8,"Nums":[16,24,3,1,9,4,12,2,0,5],"ZX":0,"FX":1,"CH":7,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321044,"Result":3,"Nums":[15,23,2,0,8,3,11,1,5,4],"ZX":1,"FX":0,"CH":6,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321043,"Result":7,"Nums":[14,22,1,9,7,2,10,0,4,3],"ZX":0,"FX":1,"CH":5,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321042,"Result":2,"Nums":[13,21,0,8,6,1,9,4,3,2],"ZX":2,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321041,"Result":5,"Nums":[12,20,6,7,5,0,8,3,2,1],"ZX":1,"FX":0,"CH":3,"Big":0,"Small":5,"Odd":0,"Even":2},{"Period":170321040,"Result":9,"Nums":[11,19,5,6,4,9,7,2,1,0],"ZX":0,"FX":5,"CH":2,"Big":0,"Small":4,"Odd":0,"Even":1},{"Period":170321039,"Result":8,"Nums":[10,18,4,5,3,8,6,1,0,23],"ZX":0,"FX":4,"CH":1,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321038,"Result":7,"Nums":[9,17,3,4,2,7,5,0,20,22],"ZX":1,"FX":3,"CH":0,"Big":0,"Small":2,"Odd":0,"Even":2},{"Period":170321037,"Result":7,"Nums":[8,16,2,3,1,6,4,0,19,21],"ZX":0,"FX":2,"CH":4,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321036,"Result":4,"Nums":[7,15,1,2,0,5,3,6,18,20],"ZX":0,"FX":1,"CH":3,"Big":3,"Small":0,"Odd":2,"Even":0},{"Period":170321035,"Result":2,"Nums":[6,14,0,1,9,4,2,5,17,19],"ZX":3,"FX":0,"CH":2,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321034,"Result":3,"Nums":[5,13,6,0,8,3,1,4,16,18],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321033,"Result":6,"Nums":[4,12,5,25,7,2,0,3,15,17],"ZX":1,"FX":2,"CH":0,"Big":0,"Small":4,"Odd":2,"Even":0},{"Period":170321032,"Result":6,"Nums":[3,11,4,24,6,1,0,2,14,16],"ZX":0,"FX":1,"CH":16,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321031,"Result":5,"Nums":[2,10,3,23,5,0,6,1,13,15],"ZX":1,"FX":0,"CH":15,"Big":0,"Small":2,"Odd":0,"Even":2},{"Period":170321030,"Result":7,"Nums":[1,9,2,22,4,3,5,0,12,14],"ZX":0,"FX":1,"CH":14,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321029,"Result":0,"Nums":[0,8,1,21,3,2,4,10,11,13],"ZX":2,"FX":0,"CH":13,"Big":2,"Small":0,"Odd":2,"Even":0},{"Period":170321028,"Result":2,"Nums":[5,7,0,20,2,1,3,9,10,12],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321027,"Result":5,"Nums":[4,6,22,19,1,0,2,8,9,11],"ZX":0,"FX":1,"CH":11,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321026,"Result":4,"Nums":[3,5,21,18,0,9,1,7,8,10],"ZX":1,"FX":0,"CH":10,"Big":1,"Small":0,"Odd":5,"Even":0}]';
                var stats = '[{"Period":0,"Result":0,"Nums":[3,3,4,4,4,8,3,5,5,1],"ZX":19,"FX":19,"CH":2,"Big":22,"Small":18,"Odd":21,"Even":19},{"Period":0,"Result":0,"Nums":[21,24,22,25,23,9,31,18,20,25],"ZX":3,"FX":5,"CH":27,"Big":5,"Small":5,"Odd":5,"Even":5}]';
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
                        $.get("/sdc/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
                    vm.chkFgx = function () {
                        vm.fgxIscheck = !vm.fgxIscheck;
                        chartLine.splitDisplay();
                    }
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
                        viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], isVirtual: true, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null });
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
                        else if (r && prev && prev.Result > -1) {
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
                            if (r.Result > 4) {
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

                        newArr[0].Nums[d.Result] += 1;
                        for (var i = 0; i < 10; i++) {
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
                        $.get("/sdc/ajax", { ajaxHandler: 'GetSdcAwardData', t: Math.random() }, function (data) {
                            var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
                            var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
                            viewmodel.removeData(p);
                            var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
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