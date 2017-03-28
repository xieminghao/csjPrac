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
        var datas = '[{"Period":606762,"Result":5,"Nums":[5,14,22,4,0,25,2,1,9,7],"ZX":1,"FX":0,"CH":9,"Front":0,"Back":1},{"Period":606761,"Result":8,"Nums":[4,13,21,3,14,24,1,0,8,6],"ZX":0,"FX":1,"CH":8,"Front":3,"Back":0},{"Period":606760,"Result":7,"Nums":[3,12,20,2,13,23,0,1,7,5],"ZX":1,"FX":0,"CH":7,"Front":2,"Back":0},{"Period":606759,"Result":8,"Nums":[2,11,19,1,12,22,31,0,6,4],"ZX":0,"FX":2,"CH":6,"Front":1,"Back":0},{"Period":606758,"Result":4,"Nums":[1,10,18,0,11,21,30,25,5,3],"ZX":0,"FX":1,"CH":5,"Front":0,"Back":3},{"Period":606757,"Result":1,"Nums":[0,9,17,1,10,20,29,24,4,2],"ZX":2,"FX":0,"CH":4,"Front":0,"Back":2},{"Period":606756,"Result":4,"Nums":[2,8,16,0,9,19,28,23,3,1],"ZX":1,"FX":0,"CH":3,"Front":0,"Back":1},{"Period":606755,"Result":10,"Nums":[1,7,15,4,8,18,27,22,2,0],"ZX":0,"FX":1,"CH":2,"Front":1,"Back":0},{"Period":606754,"Result":1,"Nums":[0,6,14,3,7,17,26,21,1,4],"ZX":2,"FX":0,"CH":1,"Front":0,"Back":1},{"Period":606753,"Result":9,"Nums":[9,5,13,2,6,16,25,20,0,3],"ZX":1,"FX":2,"CH":0,"Front":2,"Back":0},{"Period":606752,"Result":9,"Nums":[8,4,12,1,5,15,24,19,0,2],"ZX":0,"FX":1,"CH":5,"Front":1,"Back":0},{"Period":606751,"Result":4,"Nums":[7,3,11,0,4,14,23,18,2,1],"ZX":1,"FX":0,"CH":4,"Front":0,"Back":1},{"Period":606750,"Result":10,"Nums":[6,2,10,5,3,13,22,17,1,0],"ZX":0,"FX":2,"CH":3,"Front":2,"Back":0},{"Period":606749,"Result":9,"Nums":[5,1,9,4,2,12,21,16,0,8],"ZX":0,"FX":1,"CH":2,"Front":1,"Back":0},{"Period":606748,"Result":2,"Nums":[4,0,8,3,1,11,20,15,6,7],"ZX":2,"FX":0,"CH":1,"Front":0,"Back":6},{"Period":606747,"Result":5,"Nums":[3,9,7,2,0,10,19,14,5,6],"ZX":1,"FX":3,"CH":0,"Front":0,"Back":5},{"Period":606746,"Result":5,"Nums":[2,8,6,1,0,9,18,13,4,5],"ZX":0,"FX":2,"CH":6,"Front":0,"Back":4},{"Period":606745,"Result":4,"Nums":[1,7,5,0,2,8,17,12,3,4],"ZX":0,"FX":1,"CH":5,"Front":0,"Back":3},{"Period":606744,"Result":1,"Nums":[0,6,4,8,1,7,16,11,2,3],"ZX":3,"FX":0,"CH":4,"Front":0,"Back":2},{"Period":606743,"Result":5,"Nums":[11,5,3,7,0,6,15,10,1,2],"ZX":2,"FX":0,"CH":3,"Front":0,"Back":1},{"Period":606742,"Result":9,"Nums":[10,4,2,6,11,5,14,9,0,1],"ZX":1,"FX":0,"CH":2,"Front":2,"Back":0},{"Period":606741,"Result":10,"Nums":[9,3,1,5,10,4,13,8,6,0],"ZX":0,"FX":3,"CH":1,"Front":1,"Back":0},{"Period":606740,"Result":3,"Nums":[8,2,0,4,9,3,12,7,5,10],"ZX":1,"FX":2,"CH":0,"Front":0,"Back":3},{"Period":606739,"Result":3,"Nums":[7,1,0,3,8,2,11,6,4,9],"ZX":0,"FX":1,"CH":9,"Front":0,"Back":2},{"Period":606738,"Result":2,"Nums":[6,0,35,2,7,1,10,5,3,8],"ZX":1,"FX":0,"CH":8,"Front":0,"Back":1},{"Period":606737,"Result":6,"Nums":[5,16,34,1,6,0,9,4,2,7],"ZX":0,"FX":1,"CH":7,"Front":1,"Back":0},{"Period":606736,"Result":4,"Nums":[4,15,33,0,5,2,8,3,1,6],"ZX":1,"FX":0,"CH":6,"Front":0,"Back":1},{"Period":606735,"Result":9,"Nums":[3,14,32,11,4,1,7,2,0,5],"ZX":0,"FX":1,"CH":5,"Front":3,"Back":0},{"Period":606734,"Result":6,"Nums":[2,13,31,10,3,0,6,1,12,4],"ZX":1,"FX":0,"CH":4,"Front":2,"Back":0},{"Period":606733,"Result":8,"Nums":[1,12,30,9,2,7,5,0,11,3],"ZX":0,"FX":1,"CH":3,"Front":1,"Back":0},{"Period":606732,"Result":1,"Nums":[0,11,29,8,1,6,4,13,10,2],"ZX":3,"FX":0,"CH":2,"Front":0,"Back":2},{"Period":606731,"Result":5,"Nums":[4,10,28,7,0,5,3,12,9,1],"ZX":2,"FX":0,"CH":1,"Front":0,"Back":1},{"Period":606730,"Result":10,"Nums":[3,9,27,6,12,4,2,11,8,0],"ZX":1,"FX":3,"CH":0,"Front":3,"Back":0},{"Period":606729,"Result":10,"Nums":[2,8,26,5,11,3,1,10,7,0],"ZX":0,"FX":2,"CH":16,"Front":2,"Back":0},{"Period":606728,"Result":7,"Nums":[1,7,25,4,10,2,0,9,6,22],"ZX":0,"FX":1,"CH":15,"Front":1,"Back":0},{"Period":606727,"Result":1,"Nums":[0,6,24,3,9,1,2,8,5,21],"ZX":2,"FX":0,"CH":14,"Front":0,"Back":1},{"Period":606726,"Result":6,"Nums":[3,5,23,2,8,0,1,7,4,20],"ZX":1,"FX":0,"CH":13,"Front":2,"Back":0},{"Period":606725,"Result":7,"Nums":[2,4,22,1,7,20,0,6,3,19],"ZX":0,"FX":2,"CH":12,"Front":1,"Back":0},{"Period":606724,"Result":4,"Nums":[1,3,21,0,6,19,22,5,2,18],"ZX":0,"FX":1,"CH":11,"Front":0,"Back":2},{"Period":606723,"Result":1,"Nums":[0,2,20,3,5,18,21,4,1,17],"ZX":1,"FX":0,"CH":10,"Front":0,"Back":1}]';
        var stats = '[{"Period":0,"Result":0,"Nums":[6,2,2,6,5,3,3,3,5,5],"ZX":18,"FX":18,"CH":4,"Front":21,"Back":19},{"Period":0,"Result":0,"Nums":[11,16,35,11,14,25,31,25,12,22],"ZX":3,"FX":3,"CH":16,"Front":3,"Back":6}]';
        var viewmodel = avalon.define('chart', function (vm) {
            vm.ball = 1;
            vm.periodCount = 40;
            vm.trendDatas = [];
            vm.totalDatas = [];
            vm.flagPeriod = -1;
            vm.$updown = 1;
            vm.fgxIscheck =true;
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
                $.get("/pk10/numbertrend", { num: vm.ball, count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
                    var json = eval(data);
                    var tdatas = json.list;
                    var sdatas = json.stat;
                    vm.trendDatas = tdatas;
                    vm.totalDatas = sdatas;
                    if (vm.trendDatas.length > 0) {
                        viewmodel.addVirtualBalls();
                    }
                    viewmodel.drawLine();
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
            vm.drawLine = function () {
                chartLine.clearLines();
                chartLine.reDraw();
            };
            vm.pushVirtual = function (p) {
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
                        r.Front = 0;
                        r.Back = prev.Back + 1;
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
                vm.changenum(vm.ball);
            });
            vm.$watch("flagPeriod", function (value, oldvalue) {
                if (value == -1) return;
                $.get("/pk10/ajax", { ajaxHandler: 'GetPk10AwardData', t: Math.random() }, function (data) {
                    var p = data.current.periodNumber;
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


