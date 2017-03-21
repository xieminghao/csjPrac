$(function () {
    require(['trendChart'], function (trendChart) {
        var chartLine = new trendChart({ css: { noyl: "noyl", bline: "bline", lines: [".hover2"] }, lineWidth: 2, lineColor: "#BB8569", ckbSplit: "#chkFGX" });
        // ckbDistribute: "#chkYL", ckbSplit: "#chkBZX", chkZX: "#chkZX"
      
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
                $.get("/gd11x5/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
                if (period > 84) {
                    period = 1;
                    var y = Math.floor(dt / 10000);
                    var m = Math.floor(dt / 100) % 100;
                    var d = dt % 100;
                    var newDt = new Date(2000 + y, m - 1, d);
                    newDt.setDate(newDt.getDate() + 1);
                    p = ~~newDt.pattern("yyMMdd") * 1000 + period;
                }
                viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], isVirtual: true, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null });
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
                if (r) {
                    r.Result = parseInt(r.Result);
                }
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
                        for (var i = 0; i < 11; i++) {
                            if (parseInt(r.Nums[i]) == parseInt(r.Result)) {
                                r.Nums[i] = 0;
                            }
                            else {
                                r.Nums[i] = parseInt(prev.Nums[i])+1;
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

                newArr[0].Nums[d.Result] += 1;
                for (var i = 0; i < 11; i++) {
                    if (d.Nums[i] > newArr[1].Nums[i]) {
                        newArr[1].Nums[i] =d.Nums[i];
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
                $.get("/gd11x5/ajax", { ajaxHandler: 'GetAwardData', t: Math.random() }, function (data) {
                    var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
                    var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
                    viewmodel.removeData(p);
                    var a = { "Period": p, Result: data.current.awardNumbers.split(',')[viewmodel.ball - 1], "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], isVirtual: false, FX: null, ZX: null, CH: null, Big: null, Small: null, Odd: null, Even: null };
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
        avalon.scan();
        viewmodel.drawLine();
        $(".jsloading").hide();
    });
});
function updateRecord() {
    $("#dataopened").val(parseInt($("#dataopened").val()) + 1);
}