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
            var datas = '[{"Front":5,"Middle":0,"Back":17,"Period":170321108,"Result":11,"Nums":[13,5,21,6,7,24,3,2,0,10,1,16,17,29,36,22,27],"ZX":1,"FX":0,"CH":40,"Big":1,"Small":0,"Odd":0,"Even":2},{"Front":4,"Middle":0,"Back":16,"Period":170321107,"Result":13,"Nums":[12,4,20,5,6,23,2,1,8,9,0,15,16,28,35,21,26],"ZX":0,"FX":2,"CH":39,"Big":0,"Small":1,"Odd":0,"Even":1},{"Front":3,"Middle":0,"Back":15,"Period":170321106,"Result":10,"Nums":[11,3,19,4,5,22,1,0,7,8,2,14,15,27,34,20,25],"ZX":0,"FX":1,"CH":38,"Big":2,"Small":0,"Odd":1,"Even":0},{"Front":2,"Middle":0,"Back":14,"Period":170321105,"Result":9,"Nums":[10,2,18,3,4,21,0,12,6,7,1,13,14,26,33,19,24],"ZX":1,"FX":0,"CH":37,"Big":1,"Small":0,"Odd":0,"Even":2},{"Front":1,"Middle":0,"Back":13,"Period":170321104,"Result":13,"Nums":[9,1,17,2,3,20,8,11,5,6,0,12,13,25,32,18,23],"ZX":0,"FX":1,"CH":36,"Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":3,"Back":12,"Period":170321103,"Result":4,"Nums":[8,0,16,1,2,19,7,10,4,5,3,11,12,24,31,17,22],"ZX":3,"FX":0,"CH":35,"Big":3,"Small":0,"Odd":2,"Even":0},{"Front":0,"Middle":2,"Back":11,"Period":170321102,"Result":6,"Nums":[7,17,15,0,1,18,6,9,3,4,2,10,11,23,30,16,21],"ZX":2,"FX":0,"CH":34,"Big":2,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":10,"Period":170321101,"Result":7,"Nums":[6,16,14,100,0,17,5,8,2,3,1,9,10,22,29,15,20],"ZX":1,"FX":0,"CH":33,"Big":1,"Small":0,"Odd":0,"Even":3},{"Front":5,"Middle":0,"Back":9,"Period":170321100,"Result":13,"Nums":[5,15,13,99,27,16,4,7,1,2,0,8,9,21,28,14,19],"ZX":0,"FX":1,"CH":32,"Big":0,"Small":1,"Odd":0,"Even":2},{"Front":4,"Middle":0,"Back":8,"Period":170321099,"Result":11,"Nums":[4,14,12,98,26,15,3,6,0,1,11,7,8,20,27,13,18],"ZX":1,"FX":0,"CH":31,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":3,"Middle":0,"Back":7,"Period":170321098,"Result":12,"Nums":[3,13,11,97,25,14,2,5,1,0,10,6,7,19,26,12,17],"ZX":0,"FX":3,"CH":30,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":2,"Middle":0,"Back":6,"Period":170321097,"Result":11,"Nums":[2,12,10,96,24,13,1,4,0,3,9,5,6,18,25,11,16],"ZX":0,"FX":2,"CH":29,"Big":3,"Small":0,"Odd":0,"Even":3},{"Front":1,"Middle":0,"Back":5,"Period":170321096,"Result":9,"Nums":[1,11,9,95,23,12,0,3,28,2,8,4,5,17,24,10,15],"ZX":0,"FX":1,"CH":28,"Big":2,"Small":0,"Odd":0,"Even":2},{"Front":0,"Middle":1,"Back":4,"Period":170321095,"Result":3,"Nums":[0,10,8,94,22,11,30,2,27,1,7,3,4,16,23,9,14],"ZX":1,"FX":0,"CH":27,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":7,"Middle":0,"Back":3,"Period":170321094,"Result":12,"Nums":[12,9,7,93,21,10,29,1,26,0,6,2,3,15,22,8,13],"ZX":0,"FX":1,"CH":26,"Big":0,"Small":1,"Odd":3,"Even":0},{"Front":6,"Middle":0,"Back":2,"Period":170321093,"Result":10,"Nums":[11,8,6,92,20,9,28,0,25,3,5,1,2,14,21,7,12],"ZX":2,"FX":0,"CH":25,"Big":1,"Small":0,"Odd":2,"Even":0},{"Front":5,"Middle":0,"Back":1,"Period":170321092,"Result":14,"Nums":[10,7,5,91,19,8,27,17,24,2,4,0,1,13,20,6,11],"ZX":1,"FX":0,"CH":24,"Big":0,"Small":5,"Odd":1,"Even":0},{"Front":4,"Middle":1,"Back":0,"Period":170321091,"Result":15,"Nums":[9,6,4,90,18,7,26,16,23,1,3,8,0,12,19,5,10],"ZX":0,"FX":1,"CH":23,"Big":0,"Small":4,"Odd":0,"Even":1},{"Front":3,"Middle":0,"Back":1,"Period":170321090,"Result":12,"Nums":[8,5,3,89,17,6,25,15,22,0,2,7,1,11,18,4,9],"ZX":1,"FX":0,"CH":22,"Big":0,"Small":3,"Odd":1,"Even":0},{"Front":2,"Middle":1,"Back":0,"Period":170321089,"Result":15,"Nums":[7,4,2,88,16,5,24,14,21,11,1,6,0,10,17,3,8],"ZX":0,"FX":2,"CH":21,"Big":0,"Small":2,"Odd":0,"Even":3},{"Front":1,"Middle":0,"Back":2,"Period":170321088,"Result":13,"Nums":[6,3,1,87,15,4,23,13,20,10,0,5,14,9,16,2,7],"ZX":0,"FX":1,"CH":20,"Big":0,"Small":1,"Odd":0,"Even":2},{"Front":0,"Middle":4,"Back":1,"Period":170321087,"Result":5,"Nums":[5,2,0,86,14,3,22,12,19,9,10,4,13,8,15,1,6],"ZX":1,"FX":0,"CH":19,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":3,"Back":0,"Period":170321086,"Result":18,"Nums":[4,1,23,85,13,2,21,11,18,8,9,3,12,7,14,0,5],"ZX":0,"FX":1,"CH":18,"Big":0,"Small":1,"Odd":4,"Even":0},{"Front":0,"Middle":2,"Back":4,"Period":170321085,"Result":4,"Nums":[3,0,22,84,12,1,20,10,17,7,8,2,11,6,13,43,4],"ZX":2,"FX":0,"CH":17,"Big":2,"Small":0,"Odd":3,"Even":0},{"Front":0,"Middle":1,"Back":3,"Period":170321084,"Result":8,"Nums":[2,26,21,83,11,0,19,9,16,6,7,1,10,5,12,42,3],"ZX":1,"FX":0,"CH":16,"Big":1,"Small":0,"Odd":2,"Even":0},{"Front":1,"Middle":0,"Back":2,"Period":170321083,"Result":14,"Nums":[1,25,20,82,10,3,18,8,15,5,6,0,9,4,11,41,2],"ZX":0,"FX":1,"CH":15,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":4,"Back":1,"Period":170321082,"Result":3,"Nums":[0,24,19,81,9,2,17,7,14,4,5,33,8,3,10,40,1],"ZX":1,"FX":0,"CH":14,"Big":1,"Small":0,"Odd":0,"Even":2},{"Front":1,"Middle":3,"Back":0,"Period":170321081,"Result":19,"Nums":[5,23,18,80,8,1,16,6,13,3,4,32,7,2,9,39,0],"ZX":0,"FX":1,"CH":13,"Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":2,"Back":1,"Period":170321080,"Result":8,"Nums":[4,22,17,79,7,0,15,5,12,2,3,31,6,1,8,38,30],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":3,"Even":0},{"Front":3,"Middle":1,"Back":0,"Period":170321079,"Result":16,"Nums":[3,21,16,78,6,10,14,4,11,1,2,30,5,0,7,37,29],"ZX":0,"FX":1,"CH":11,"Big":0,"Small":3,"Odd":2,"Even":0},{"Front":2,"Middle":0,"Back":4,"Period":170321078,"Result":12,"Nums":[2,20,15,77,5,9,13,3,10,0,1,29,4,38,6,36,28],"ZX":1,"FX":0,"CH":10,"Big":0,"Small":2,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":3,"Period":170321077,"Result":13,"Nums":[1,19,14,76,4,8,12,2,9,34,0,28,3,37,5,35,27],"ZX":0,"FX":1,"CH":9,"Big":0,"Small":1,"Odd":0,"Even":2},{"Front":0,"Middle":1,"Back":2,"Period":170321076,"Result":3,"Nums":[0,18,13,75,3,7,11,1,8,33,10,27,2,36,4,34,26],"ZX":2,"FX":0,"CH":8,"Big":2,"Small":0,"Odd":0,"Even":1},{"Front":2,"Middle":0,"Back":1,"Period":170321075,"Result":10,"Nums":[18,17,12,74,2,6,10,0,7,32,9,26,1,35,3,33,25],"ZX":1,"FX":0,"CH":7,"Big":1,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":6,"Back":0,"Period":170321074,"Result":15,"Nums":[17,16,11,73,1,5,9,12,6,31,8,25,0,34,2,32,24],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":1,"Odd":0,"Even":5},{"Front":0,"Middle":5,"Back":1,"Period":170321073,"Result":7,"Nums":[16,15,10,72,0,4,8,11,5,30,7,24,2,33,1,31,23],"ZX":1,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":0,"Even":4},{"Front":3,"Middle":4,"Back":0,"Period":170321072,"Result":17,"Nums":[15,14,9,71,41,3,7,10,4,29,6,23,1,32,0,30,22],"ZX":0,"FX":1,"CH":4,"Big":0,"Small":3,"Odd":0,"Even":3},{"Front":2,"Middle":3,"Back":0,"Period":170321071,"Result":15,"Nums":[14,13,8,70,40,2,6,9,3,28,5,22,0,31,1,29,21],"ZX":1,"FX":0,"CH":3,"Big":0,"Small":2,"Odd":0,"Even":2},{"Front":1,"Middle":2,"Back":0,"Period":170321070,"Result":17,"Nums":[13,12,7,69,39,1,5,8,2,27,4,21,33,30,0,28,20],"ZX":0,"FX":1,"CH":2,"Big":0,"Small":1,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":19,"Period":170321069,"Result":8,"Nums":[12,11,6,68,38,0,4,7,1,26,3,20,32,29,35,27,19],"ZX":3,"FX":0,"CH":1,"Big":3,"Small":0,"Odd":1,"Even":0}]';
            var stats = '[{"Front":12,"Middle":19,"Back":9,"Period":0,"Result":0,"Nums":[3,2,1,1,2,3,2,3,3,4,5,2,4,1,2,1,1],"ZX":19,"FX":21,"CH":0,"Big":20,"Small":20,"Odd":23,"Even":17},{"Front":7,"Middle":6,"Back":19,"Period":0,"Result":0,"Nums":[18,26,23,100,41,24,30,17,28,34,11,33,33,38,36,43,30],"ZX":3,"FX":3,"CH":40,"Big":3,"Small":5,"Odd":4,"Even":5}]';
            var viewmodel = avalon.define('chart', function (vm) {
                vm.periodCount = 40;
                vm.trendDatas = [];
                vm.totalDatas = [];
                vm.flagPeriod = -1;
                vm.$updown = 1;
                vm.fgxIscheck = true;
                vm.showPeriod = function (period) {
                    var p = period % 1000;
                    return ( Math.floor(period / 1000)) + "-" + p;
                }
                vm.changePeriod = function () {
                    chartLine.clearLines();
                    $(".data-stat").hide();
                    $(".trendChartloading").show();
                    $.get("/xyft/guanyatrend", { count: vm.periodCount, istoday: vm.periodCount == 0, t: Math.random() }, function (data) {
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
                    if (period > 180) {
                        period = 1;
                        var y = Math.floor(dt / 10000);
                        var m = Math.floor(dt / 100) % 100;
                        var d = dt % 100;
                        var newDt = new Date(2000 + y, m - 1, d);
                        newDt.setDate(newDt.getDate() + 1);
                        p = ~~newDt.pattern("yyMMdd") * 1000 + period;
                    }
                    viewmodel.trendDatas.unshift({ "Period": parseInt(p), Result: -1, "Nums": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"], isVirtual: true, FX: null, ZX: null, CH: null, Odd: null, Even: null, Big: null, Small: null, Front: null, Middle: null, Back: null });
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
                    var prev = vm.getPrevData(r.Period);
                    if ((r && r.Result <= 0) || (prev && prev.Result <= 0)) {
                        r.Result = 0;
                        r.FX = r.ZX = r.CH = r.Odd = r.Even = r.Big = r.Small = r.Front = r.Middle = r.Back = null;
                    }
                    else if (r && prev && prev.Result > 0) {
                        if (!r.isVirtual) {
                            for (var i = 0; i < 17; i++) {
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
                        if (r.Result > 11) {
                            r.Big = 0;
                            r.Small = prev.Small + 1;
                        } else {
                            r.Big = prev.Big + 1;
                            r.Small = 0;
                        }
                        if (r.Result >= 3 && r.Result <= 8) {
                            r.Front = 0;
                            r.Middle = prev.Middle + 1;
                            r.Back = prev.Back + 1;
                        } else if (r.Result > 9 && r.Result <= 14) {
                            r.Middle = 0;
                            r.Front = prev.Front + 1;
                            r.Back = prev.Back + 1;
                        } else {
                            r.Back = 0;
                            r.Front = prev.Front + 1;
                            r.Middle = prev.Middle + 1;
                        }
                    }
                };
                vm.statTotal = function (d) {
                    var newArr = viewmodel.totalDatas;

                    newArr[0].Nums[d.Result - 3] += 1;
                    for (var i = 0; i < 17; i++) {
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
                    if (d.Front == 0) {
                        newArr[0].Front += 1;
                    } else if (d.Front > newArr[1].Front) {
                        newArr[1].Front = d.Front;
                    }
                    if (d.Middle == 0) {
                        newArr[0].Middle += 1;
                    } else if (d.Middle > newArr[1].Middle) {
                        newArr[1].Middle = d.Middle;
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
                    vm.changePeriod();
                });
                vm.$watch("flagPeriod", function (value, oldvalue) {
                    if (value == -1) return;
                    $.get("/xyft/ajax", { ajaxHandler: 'GetxyftAwardData', t: Math.random() }, function (data) {
                        var ds = ~~data.current.awardTime.split(" ")[0].split('-').join('');
                        var p = (ds * 1000 + data.current.periodNumber) % 1000000000;
                        viewmodel.removeData(p);
                        var newNums = data.current.awardNumbers.split(',');
                        var gyh = ~~newNums[0] + ~~newNums[1];
                        var a = { "Period": p, Result: gyh, "Nums": ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"], isVirtual: false, FX: null, ZX: null, CH: null, Odd: null, Even: null, Big: null, Small: null, Front: null, Middle: null, Back: null };
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


