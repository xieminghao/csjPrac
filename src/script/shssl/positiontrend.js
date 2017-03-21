// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');

function updateRecord() {
    $("#dataopened").val(parseInt( $("#dataopened").val())+1);
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
                var datas = '[{"Period":170321023,"Result":8,"Nums":[10,12,9,1,5,11,2,4,0,3],"ZX":0,"FX":1,"CH":5,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321022,"Result":3,"Nums":[9,11,8,0,4,10,1,3,6,2],"ZX":2,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321021,"Result":6,"Nums":[8,10,7,22,3,9,0,2,5,1],"ZX":1,"FX":0,"CH":3,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321020,"Result":9,"Nums":[7,9,6,21,2,8,12,1,4,0],"ZX":0,"FX":3,"CH":2,"Big":0,"Small":2,"Odd":0,"Even":2},{"Period":170321019,"Result":7,"Nums":[6,8,5,20,1,7,11,0,3,24],"ZX":0,"FX":2,"CH":1,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321018,"Result":4,"Nums":[5,7,4,19,0,6,10,20,2,23],"ZX":3,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":6,"Even":0},{"Period":170321017,"Result":4,"Nums":[4,6,3,18,0,5,9,19,1,22],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":5,"Even":0},{"Period":170321016,"Result":8,"Nums":[3,5,2,17,7,4,8,18,0,21],"ZX":1,"FX":3,"CH":0,"Big":0,"Small":2,"Odd":4,"Even":0},{"Period":170321015,"Result":8,"Nums":[2,4,1,16,6,3,7,17,0,20],"ZX":0,"FX":2,"CH":8,"Big":0,"Small":1,"Odd":3,"Even":0},{"Period":170321014,"Result":2,"Nums":[1,3,0,15,5,2,6,16,11,19],"ZX":0,"FX":1,"CH":7,"Big":2,"Small":0,"Odd":2,"Even":0},{"Period":170321013,"Result":0,"Nums":[0,2,22,14,4,1,5,15,10,18],"ZX":1,"FX":0,"CH":6,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321012,"Result":5,"Nums":[7,1,21,13,3,0,4,14,9,17],"ZX":0,"FX":1,"CH":5,"Big":0,"Small":1,"Odd":0,"Even":3},{"Period":170321011,"Result":1,"Nums":[6,0,20,12,2,1,3,13,8,16],"ZX":1,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321010,"Result":5,"Nums":[5,3,19,11,1,0,2,12,7,15],"ZX":0,"FX":1,"CH":3,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321009,"Result":4,"Nums":[4,2,18,10,0,8,1,11,6,14],"ZX":1,"FX":0,"CH":2,"Big":1,"Small":0,"Odd":2,"Even":0},{"Period":170321008,"Result":6,"Nums":[3,1,17,9,8,7,0,10,5,13],"ZX":0,"FX":3,"CH":1,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321007,"Result":1,"Nums":[2,0,16,8,7,6,3,9,4,12],"ZX":1,"FX":2,"CH":0,"Big":3,"Small":0,"Odd":0,"Even":2},{"Period":170321006,"Result":1,"Nums":[1,0,15,7,6,5,2,8,3,11],"ZX":0,"FX":1,"CH":17,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170321005,"Result":0,"Nums":[0,8,14,6,5,4,1,7,2,10],"ZX":2,"FX":0,"CH":16,"Big":1,"Small":0,"Odd":4,"Even":0},{"Period":170321004,"Result":6,"Nums":[2,7,13,5,4,3,0,6,1,9],"ZX":1,"FX":0,"CH":15,"Big":0,"Small":2,"Odd":3,"Even":0},{"Period":170321003,"Result":8,"Nums":[1,6,12,4,3,2,13,5,0,8],"ZX":0,"FX":1,"CH":14,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321002,"Result":0,"Nums":[0,5,11,3,2,1,12,4,9,7],"ZX":1,"FX":0,"CH":13,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321001,"Result":5,"Nums":[17,4,10,2,1,0,11,3,8,6],"ZX":0,"FX":2,"CH":12,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170320023,"Result":4,"Nums":[16,3,9,1,0,6,10,2,7,5],"ZX":0,"FX":1,"CH":11,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170320022,"Result":3,"Nums":[15,2,8,0,10,5,9,1,6,4],"ZX":1,"FX":0,"CH":10,"Big":1,"Small":0,"Odd":0,"Even":6},{"Period":170320021,"Result":7,"Nums":[14,1,7,13,9,4,8,0,5,3],"ZX":0,"FX":1,"CH":9,"Big":0,"Small":1,"Odd":0,"Even":5},{"Period":170320020,"Result":1,"Nums":[13,0,6,12,8,3,7,1,4,2],"ZX":2,"FX":0,"CH":8,"Big":1,"Small":0,"Odd":0,"Even":4},{"Period":170320019,"Result":7,"Nums":[12,16,5,11,7,2,6,0,3,1],"ZX":1,"FX":0,"CH":7,"Big":0,"Small":5,"Odd":0,"Even":3},{"Period":170320018,"Result":9,"Nums":[11,15,4,10,6,1,5,3,2,0],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":4,"Odd":0,"Even":2},{"Period":170320017,"Result":5,"Nums":[10,14,3,9,5,0,4,2,1,28],"ZX":1,"FX":0,"CH":5,"Big":0,"Small":3,"Odd":0,"Even":1},{"Period":170320016,"Result":8,"Nums":[9,13,2,8,4,6,3,1,0,27],"ZX":0,"FX":2,"CH":4,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170320015,"Result":7,"Nums":[8,12,1,7,3,5,2,0,9,26],"ZX":0,"FX":1,"CH":3,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170320014,"Result":2,"Nums":[7,11,0,6,2,4,1,9,8,25],"ZX":1,"FX":0,"CH":2,"Big":1,"Small":0,"Odd":4,"Even":0},{"Period":170320013,"Result":6,"Nums":[6,10,16,5,1,3,0,8,7,24],"ZX":0,"FX":2,"CH":1,"Big":0,"Small":1,"Odd":3,"Even":0},{"Period":170320012,"Result":4,"Nums":[5,9,15,4,0,2,17,7,6,23],"ZX":3,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":2,"Even":0},{"Period":170320011,"Result":4,"Nums":[4,8,14,3,0,1,16,6,5,22],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170320010,"Result":5,"Nums":[3,7,13,2,9,0,15,5,4,21],"ZX":1,"FX":3,"CH":0,"Big":0,"Small":2,"Odd":0,"Even":3},{"Period":170320009,"Result":5,"Nums":[2,6,12,1,8,0,14,4,3,20],"ZX":0,"FX":2,"CH":10,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170320008,"Result":3,"Nums":[1,5,11,0,7,4,13,3,2,19],"ZX":0,"FX":1,"CH":9,"Big":2,"Small":0,"Odd":0,"Even":1},{"Period":170320007,"Result":0,"Nums":[0,4,10,16,6,3,12,2,1,18],"ZX":1,"FX":0,"CH":8,"Big":1,"Small":0,"Odd":2,"Even":0}]';
                var stats = '[{"Period":0,"Result":0,"Nums":[4,4,2,3,6,6,4,4,5,2],"ZX":19,"FX":16,"CH":5,"Big":21,"Small":19,"Odd":19,"Even":21},{"Period":0,"Result":0,"Nums":[17,16,22,22,10,11,17,20,11,28],"ZX":3,"FX":3,"CH":17,"Big":3,"Small":5,"Odd":6,"Even":6}]';
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
                    vm.chkFgx = function () {
                        vm.fgxIscheck = !vm.fgxIscheck;
                        chartLine.splitDisplay();
                    }
                    vm.changeball = function (t, b) {
                        vm.ballName = t;
                        vm.ball = b;
                        chartLine.clearLines();
                        $(".data-stat").hide();
                        $(".trendChartloading").show();
                        $.get("/shssl/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
                        if (period > 23) {
                            period = 1;
                            var y = Math.floor(dt / 10000);
                            var m = Math.floor(dt / 100) % 100;
                            var d = dt % 100;
                            var newDt = new Date(2000 + y, m - 1, d);
                            newDt.setDate(newDt.getDate() + 1);
                            p = ~~newDt.pattern("yyMMdd") * 1000 + period;
                        }
                        viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"], isVirtual: true, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null });
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
                        $.get("/shssl/ajax", { ajaxHandler: 'GetshsslAwardData', t: Math.random() }, function (data) {
                            var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
                            var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
                            viewmodel.removeData(p);
                            var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
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