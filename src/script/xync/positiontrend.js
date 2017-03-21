// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = '';
var lotteryLuzhu = "";
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
                var datas = '[{"Period":170321090,"Result":1,"Nums":[0,35,1,6,9,28,2,31,16,30,20,8,5,43,88,17,13,34,7,22],"ZX":2,"FX":0,"CH":3,"Big":5,"Small":0,"Odd":0,"Even":6},{"Period":170321089,"Result":3,"Nums":[2,34,0,5,8,27,1,30,15,29,19,7,4,42,87,16,12,33,6,21],"ZX":1,"FX":0,"CH":2,"Big":4,"Small":0,"Odd":0,"Even":5},{"Period":170321088,"Result":7,"Nums":[1,33,8,4,7,26,0,29,14,28,18,6,3,41,86,15,11,32,5,20],"ZX":0,"FX":2,"CH":1,"Big":3,"Small":0,"Odd":0,"Even":4},{"Period":170321087,"Result":1,"Nums":[0,32,7,3,6,25,11,28,13,27,17,5,2,40,85,14,10,31,4,19],"ZX":2,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":0,"Even":3},{"Period":170321086,"Result":1,"Nums":[0,31,6,2,5,24,10,27,12,26,16,4,1,39,84,13,9,30,3,18],"ZX":1,"FX":0,"CH":7,"Big":1,"Small":0,"Odd":0,"Even":2},{"Period":170321085,"Result":13,"Nums":[36,30,5,1,4,23,9,26,11,25,15,3,0,38,83,12,8,29,2,17],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":1,"Odd":0,"Even":1},{"Period":170321084,"Result":4,"Nums":[35,29,4,0,3,22,8,25,10,24,14,2,18,37,82,11,7,28,1,16],"ZX":1,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321083,"Result":19,"Nums":[34,28,3,57,2,21,7,24,9,23,13,1,17,36,81,10,6,27,0,15],"ZX":0,"FX":3,"CH":4,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170321082,"Result":12,"Nums":[33,27,2,56,1,20,6,23,8,22,12,0,16,35,80,9,5,26,91,14],"ZX":0,"FX":2,"CH":3,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321081,"Result":5,"Nums":[32,26,1,55,0,19,5,22,7,21,11,10,15,34,79,8,4,25,90,13],"ZX":0,"FX":1,"CH":2,"Big":4,"Small":0,"Odd":0,"Even":8},{"Period":170321080,"Result":3,"Nums":[31,25,0,54,1,18,4,21,6,20,10,9,14,33,78,7,3,24,89,12],"ZX":3,"FX":0,"CH":1,"Big":3,"Small":0,"Odd":0,"Even":7},{"Period":170321079,"Result":5,"Nums":[30,24,10,53,0,17,3,20,5,19,9,8,13,32,77,6,2,23,88,11],"ZX":2,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":0,"Even":6},{"Period":170321078,"Result":5,"Nums":[29,23,9,52,0,16,2,19,4,18,8,7,12,31,76,5,1,22,87,10],"ZX":1,"FX":0,"CH":16,"Big":1,"Small":0,"Odd":0,"Even":5},{"Period":170321077,"Result":17,"Nums":[28,22,8,51,2,15,1,18,3,17,7,6,11,30,75,4,0,21,86,9],"ZX":0,"FX":2,"CH":15,"Big":0,"Small":1,"Odd":0,"Even":4},{"Period":170321076,"Result":7,"Nums":[27,21,7,50,1,14,0,17,2,16,6,5,10,29,74,3,32,20,85,8],"ZX":0,"FX":1,"CH":14,"Big":3,"Small":0,"Odd":0,"Even":3},{"Period":170321075,"Result":5,"Nums":[26,20,6,49,0,13,35,16,1,15,5,4,9,28,73,2,31,19,84,7],"ZX":2,"FX":0,"CH":13,"Big":2,"Small":0,"Odd":0,"Even":2},{"Period":170321074,"Result":9,"Nums":[25,19,5,48,2,12,34,15,0,14,4,3,8,27,72,1,30,18,83,6],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321073,"Result":16,"Nums":[24,18,4,47,1,11,33,14,16,13,3,2,7,26,71,0,29,17,82,5],"ZX":0,"FX":1,"CH":11,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321072,"Result":5,"Nums":[23,17,3,46,0,10,32,13,15,12,2,1,6,25,70,24,28,16,81,4],"ZX":1,"FX":0,"CH":10,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321071,"Result":12,"Nums":[22,16,2,45,8,9,31,12,14,11,1,0,5,24,69,23,27,15,80,3],"ZX":0,"FX":2,"CH":9,"Big":0,"Small":2,"Odd":1,"Even":0},{"Period":170321070,"Result":11,"Nums":[21,15,1,44,7,8,30,11,13,10,0,3,4,23,68,22,26,14,79,2],"ZX":0,"FX":1,"CH":8,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321069,"Result":3,"Nums":[20,14,0,43,6,7,29,10,12,9,4,2,3,22,67,21,25,13,78,1],"ZX":1,"FX":0,"CH":7,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321068,"Result":20,"Nums":[19,13,39,42,5,6,28,9,11,8,3,1,2,21,66,20,24,12,77,0],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":5,"Odd":2,"Even":0},{"Period":170321067,"Result":12,"Nums":[18,12,38,41,4,5,27,8,10,7,2,0,1,20,65,19,23,11,76,39],"ZX":1,"FX":0,"CH":5,"Big":0,"Small":4,"Odd":1,"Even":0},{"Period":170321066,"Result":13,"Nums":[17,11,37,40,3,4,26,7,9,6,1,2,0,19,64,18,22,10,75,38],"ZX":0,"FX":1,"CH":4,"Big":0,"Small":3,"Odd":0,"Even":2},{"Period":170321065,"Result":11,"Nums":[16,10,36,39,2,3,25,6,8,5,0,1,7,18,63,17,21,9,74,37],"ZX":1,"FX":0,"CH":3,"Big":0,"Small":2,"Odd":0,"Even":1},{"Period":170321064,"Result":12,"Nums":[15,9,35,38,1,2,24,5,7,4,13,0,6,17,62,16,20,8,73,36],"ZX":0,"FX":1,"CH":2,"Big":0,"Small":1,"Odd":1,"Even":0},{"Period":170321063,"Result":5,"Nums":[14,8,34,37,0,1,23,4,6,3,12,20,5,16,61,15,19,7,72,35],"ZX":3,"FX":0,"CH":1,"Big":5,"Small":0,"Odd":0,"Even":1},{"Period":170321062,"Result":6,"Nums":[13,7,33,36,23,0,22,3,5,2,11,19,4,15,60,14,18,6,71,34],"ZX":2,"FX":1,"CH":0,"Big":4,"Small":0,"Odd":4,"Even":0},{"Period":170321061,"Result":6,"Nums":[12,6,32,35,22,0,21,2,4,1,10,18,3,14,59,13,17,5,70,33],"ZX":1,"FX":0,"CH":8,"Big":3,"Small":0,"Odd":3,"Even":0},{"Period":170321060,"Result":10,"Nums":[11,5,31,34,21,15,20,1,3,0,9,17,2,13,58,12,16,4,69,32],"ZX":0,"FX":1,"CH":7,"Big":2,"Small":0,"Odd":2,"Even":0},{"Period":170321059,"Result":8,"Nums":[10,4,30,33,20,14,19,0,2,44,8,16,1,12,57,11,15,3,68,31],"ZX":1,"FX":0,"CH":6,"Big":1,"Small":0,"Odd":1,"Even":0},{"Period":170321058,"Result":13,"Nums":[9,3,29,32,19,13,18,44,1,43,7,15,0,11,56,10,14,2,67,30],"ZX":0,"FX":1,"CH":5,"Big":0,"Small":1,"Odd":0,"Even":2},{"Period":170321057,"Result":9,"Nums":[8,2,28,31,18,12,17,43,0,42,6,14,11,10,55,9,13,1,66,29],"ZX":1,"FX":0,"CH":4,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321056,"Result":18,"Nums":[7,1,27,30,17,11,16,42,2,41,5,13,10,9,54,8,12,0,65,28],"ZX":0,"FX":1,"CH":3,"Big":0,"Small":1,"Odd":2,"Even":0},{"Period":170321055,"Result":2,"Nums":[6,0,26,29,16,10,15,41,1,40,4,12,9,8,53,7,11,2,64,27],"ZX":3,"FX":0,"CH":2,"Big":2,"Small":0,"Odd":1,"Even":0},{"Period":170321054,"Result":9,"Nums":[5,33,25,28,15,9,14,40,0,39,3,11,8,7,52,6,10,1,63,26],"ZX":2,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":1},{"Period":170321053,"Result":18,"Nums":[4,32,24,27,14,8,13,39,31,38,2,10,7,6,51,5,9,0,62,25],"ZX":1,"FX":2,"CH":0,"Big":0,"Small":4,"Odd":2,"Even":0},{"Period":170321052,"Result":18,"Nums":[3,31,23,26,13,7,12,38,30,37,1,9,6,5,50,4,8,0,61,24],"ZX":0,"FX":1,"CH":52,"Big":0,"Small":3,"Odd":1,"Even":0},{"Period":170321051,"Result":11,"Nums":[2,30,22,25,12,6,11,37,29,36,0,8,5,4,49,3,7,1,60,23],"ZX":1,"FX":0,"CH":51,"Big":0,"Small":2,"Odd":0,"Even":1}]';
                var stats = '[{"Period":0,"Result":0,"Nums":[3,1,3,1,6,2,2,1,3,1,3,4,3,0,0,1,1,3,1,1],"ZX":17,"FX":19,"CH":4,"Big":17,"Small":23,"Odd":25,"Even":15},{"Period":0,"Result":0,"Nums":[36,35,39,57,23,28,35,44,31,44,20,20,18,43,88,24,32,34,91,39],"ZX":3,"FX":3,"CH":52,"Big":5,"Small":5,"Odd":4,"Even":8}]';
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
                        $.get("/xync/positiontrend", { ball: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
                    vm.chkFgx = function () {
                        vm.fgxIscheck = !vm.fgxIscheck;
                        chartLine.splitDisplay();
                    }
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
                        $.get("/xync/ajax", { ajaxHandler: 'GetxyncAwardData', t: Math.random() }, function (data) {
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