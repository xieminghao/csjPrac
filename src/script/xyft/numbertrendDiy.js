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
        var datas = '[{"Period":170321103,"Result":1,"Nums":[0,8,14,6,4,3,9,2,5,1],"ZX":1,"FX":0,"CH":19,"Front":0,"Back":1},{"Period":170321102,"Result":10,"Nums":[17,7,13,5,3,2,8,1,4,0],"ZX":0,"FX":3,"CH":18,"Front":3,"Back":0},{"Period":170321101,"Result":8,"Nums":[16,6,12,4,2,1,7,0,3,9],"ZX":0,"FX":2,"CH":17,"Front":2,"Back":0},{"Period":170321100,"Result":6,"Nums":[15,5,11,3,1,0,6,41,2,8],"ZX":0,"FX":1,"CH":16,"Front":1,"Back":0},{"Period":170321099,"Result":5,"Nums":[14,4,10,2,0,8,5,40,1,7],"ZX":1,"FX":0,"CH":15,"Front":0,"Back":1},{"Period":170321098,"Result":9,"Nums":[13,3,9,1,8,7,4,39,0,6],"ZX":0,"FX":1,"CH":14,"Front":1,"Back":0},{"Period":170321097,"Result":4,"Nums":[12,2,8,0,7,6,3,38,1,5],"ZX":1,"FX":0,"CH":13,"Front":0,"Back":1},{"Period":170321096,"Result":9,"Nums":[11,1,7,3,6,5,2,37,0,4],"ZX":0,"FX":1,"CH":12,"Front":1,"Back":0},{"Period":170321095,"Result":2,"Nums":[10,0,6,2,5,4,1,36,7,3],"ZX":1,"FX":0,"CH":11,"Front":0,"Back":1},{"Period":170321094,"Result":7,"Nums":[9,7,5,1,4,3,0,35,6,2],"ZX":0,"FX":1,"CH":10,"Front":1,"Back":0},{"Period":170321093,"Result":4,"Nums":[8,6,4,0,3,2,9,34,5,1],"ZX":1,"FX":0,"CH":9,"Front":0,"Back":1},{"Period":170321092,"Result":10,"Nums":[7,5,3,13,2,1,8,33,4,0],"ZX":0,"FX":3,"CH":8,"Front":2,"Back":0},{"Period":170321091,"Result":6,"Nums":[6,4,2,12,1,0,7,32,3,5],"ZX":0,"FX":2,"CH":7,"Front":1,"Back":0},{"Period":170321090,"Result":5,"Nums":[5,3,1,11,0,17,6,31,2,4],"ZX":0,"FX":1,"CH":6,"Front":0,"Back":2},{"Period":170321089,"Result":3,"Nums":[4,2,0,10,23,16,5,30,1,3],"ZX":1,"FX":0,"CH":5,"Front":0,"Back":1},{"Period":170321088,"Result":9,"Nums":[3,1,18,9,22,15,4,29,0,2],"ZX":0,"FX":1,"CH":4,"Front":1,"Back":0},{"Period":170321087,"Result":2,"Nums":[2,0,17,8,21,14,3,28,10,1],"ZX":1,"FX":0,"CH":3,"Front":0,"Back":1},{"Period":170321086,"Result":10,"Nums":[1,11,16,7,20,13,2,27,9,0],"ZX":0,"FX":1,"CH":2,"Front":1,"Back":0},{"Period":170321085,"Result":1,"Nums":[0,10,15,6,19,12,1,26,8,4],"ZX":2,"FX":0,"CH":1,"Front":0,"Back":1},{"Period":170321084,"Result":7,"Nums":[2,9,14,5,18,11,0,25,7,3],"ZX":1,"FX":2,"CH":0,"Front":2,"Back":0},{"Period":170321083,"Result":7,"Nums":[1,8,13,4,17,10,0,24,6,2],"ZX":0,"FX":1,"CH":10,"Front":1,"Back":0},{"Period":170321082,"Result":1,"Nums":[0,7,12,3,16,9,43,23,5,1],"ZX":1,"FX":0,"CH":9,"Front":0,"Back":1},{"Period":170321081,"Result":10,"Nums":[1,6,11,2,15,8,42,22,4,0],"ZX":0,"FX":1,"CH":8,"Front":1,"Back":0},{"Period":170321080,"Result":1,"Nums":[0,5,10,1,14,7,41,21,3,2],"ZX":2,"FX":0,"CH":7,"Front":0,"Back":2},{"Period":170321079,"Result":4,"Nums":[3,4,9,0,13,6,40,20,2,1],"ZX":1,"FX":0,"CH":6,"Front":0,"Back":1},{"Period":170321078,"Result":10,"Nums":[2,3,8,4,12,5,39,19,1,0],"ZX":0,"FX":2,"CH":5,"Front":2,"Back":0},{"Period":170321077,"Result":9,"Nums":[1,2,7,3,11,4,38,18,0,6],"ZX":0,"FX":1,"CH":4,"Front":1,"Back":0},{"Period":170321076,"Result":1,"Nums":[0,1,6,2,10,3,37,17,12,5],"ZX":5,"FX":0,"CH":3,"Front":0,"Back":3},{"Period":170321075,"Result":2,"Nums":[14,0,5,1,9,2,36,16,11,4],"ZX":4,"FX":0,"CH":2,"Front":0,"Back":2},{"Period":170321074,"Result":4,"Nums":[13,9,4,0,8,1,35,15,10,3],"ZX":3,"FX":0,"CH":1,"Front":0,"Back":1},{"Period":170321073,"Result":6,"Nums":[12,8,3,17,7,0,34,14,9,2],"ZX":2,"FX":1,"CH":0,"Front":3,"Back":0},{"Period":170321072,"Result":6,"Nums":[11,7,2,16,6,0,33,13,8,1],"ZX":1,"FX":0,"CH":18,"Front":2,"Back":0},{"Period":170321071,"Result":10,"Nums":[10,6,1,15,5,3,32,12,7,0],"ZX":0,"FX":1,"CH":17,"Front":1,"Back":0},{"Period":170321070,"Result":3,"Nums":[9,5,0,14,4,2,31,11,6,1],"ZX":1,"FX":0,"CH":16,"Front":0,"Back":1},{"Period":170321069,"Result":10,"Nums":[8,4,2,13,3,1,30,10,5,0],"ZX":0,"FX":2,"CH":15,"Front":2,"Back":0},{"Period":170321068,"Result":6,"Nums":[7,3,1,12,2,0,29,9,4,21],"ZX":0,"FX":1,"CH":14,"Front":1,"Back":0},{"Period":170321067,"Result":3,"Nums":[6,2,0,11,1,5,28,8,3,20],"ZX":1,"FX":0,"CH":13,"Front":0,"Back":3},{"Period":170321066,"Result":5,"Nums":[5,1,16,10,0,4,27,7,2,19],"ZX":0,"FX":1,"CH":12,"Front":0,"Back":2},{"Period":170321065,"Result":2,"Nums":[4,0,15,9,11,3,26,6,1,18],"ZX":1,"FX":0,"CH":11,"Front":0,"Back":1},{"Period":170321064,"Result":9,"Nums":[3,1,14,8,10,2,25,5,0,17],"ZX":0,"FX":1,"CH":10,"Front":1,"Back":0}]';
        var stats = '[{"Period":0,"Result":0,"Nums":[5,4,3,4,3,5,3,1,5,7],"ZX":20,"FX":18,"CH":2,"Front":19,"Back":21},{"Period":0,"Result":0,"Nums":[17,11,18,17,23,17,43,41,12,21],"ZX":5,"FX":3,"CH":19,"Front":3,"Back":3}]';
        var viewmodel = avalon.define('chart', function (vm) {
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
            vm.getPositionName = function (p) {
                switch (~~p) {
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
            vm.chkFgx = function () {
                vm.fgxIscheck = !vm.fgxIscheck;
                chartLine.splitDisplay();
            }
            vm.changenum = function (b) {
                vm.ball = b;
                chartLine.clearLines();
                $(".data-stat").hide();
                $(".trendChartloading").show();
                $.get("/xyft/numbertrend", { num: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
                    var json = eval(data);
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
                if (period > 180) {
                    period = 1;
                    var y = Math.floor(dt / 10000);
                    var m = Math.floor(dt / 100) % 100;
                    var d = dt % 100;
                    var newDt = new Date(2000 + y, m - 1, d);
                    newDt.setDate(newDt.getDate() + 1);
                    p = ~~newDt.pattern("yyMMdd") * 1000 + period;
                }
                viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], isVirtual: true, FX: null, ZX: null, CH: null, Front: null, Back: null});
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
                    r.Front = null;
                    r.Back = null;
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
                    if (r.Result > 5) {
                        r.Back = 0;
                        r.Front = prev.Front + 1;
                    } else {
                        r.Front = prev.Front + 1;
                        r.Back = 0;
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
                if (d.Front == 0) {
                    newArr[0].Front += 1;
                } else if (d.Front > newArr[1].Front) {
                    newArr[1].Front = d.Front;
                }
                if (d.Back == 0) {
                    newArr[0].Back += 1;
                } else if (d.Back > newArr[1].Back) {
                    newArr[1].Back = d.Back;
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
                vm.changenum(vm.ball);
            });
            vm.$watch("flagPeriod", function (value, oldvalue) {
                if (value == -1) return;
                $.get("/xyft/ajax", { ajaxHandler: 'GetxyftAwardData', t: Math.random() }, function (data) {
                    var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
                    var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
                    viewmodel.removeData(p);
                    var a = { "Period": p, Result: data.current.awardNumbers.split(',').indexOf(viewmodel.ball.toString()) + 1, "Nums": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], isVirtual: false, FX: null, ZX: null, CH: null, Front: null, Back: null };
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
        $(".jsloading").hide();
        viewmodel.drawLine();
   });
    });

	}
});


