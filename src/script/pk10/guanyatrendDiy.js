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
	        var datas = '[{"Front":3,"Middle":0,"Back":11,"Period":606760,"Result":11,"Nums":[3,45,20,22,5,6,12,21,0,4,29,1,18,26,11,165,90],"ZX":1,"FX":0,"CH":6,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":2,"Middle":0,"Back":10,"Period":606759,"Result":14,"Nums":[2,44,19,21,4,5,11,20,1,3,28,0,17,25,10,164,89],"ZX":0,"FX":2,"CH":5,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":9,"Period":606758,"Result":11,"Nums":[1,43,18,20,3,4,10,19,0,2,27,7,16,24,9,163,88],"ZX":0,"FX":1,"CH":4,"Big":2,"Small":0,"Odd":0,"Even":2},{"Front":0,"Middle":1,"Back":8,"Period":606757,"Result":3,"Nums":[0,42,17,19,2,3,9,18,16,1,26,6,15,23,8,162,87],"ZX":1,"FX":0,"CH":3,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":7,"Period":606756,"Result":12,"Nums":[35,41,16,18,1,2,8,17,15,0,25,5,14,22,7,161,86],"ZX":0,"FX":1,"CH":2,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":3,"Back":6,"Period":606755,"Result":7,"Nums":[34,40,15,17,0,1,7,16,14,3,24,4,13,21,6,160,85],"ZX":6,"FX":0,"CH":1,"Big":3,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":2,"Back":5,"Period":606754,"Result":8,"Nums":[33,39,14,16,10,0,6,15,13,2,23,3,12,20,5,159,84],"ZX":5,"FX":1,"CH":0,"Big":2,"Small":0,"Odd":5,"Even":0},{"Front":0,"Middle":1,"Back":4,"Period":606753,"Result":8,"Nums":[32,38,13,15,9,0,5,14,12,1,22,2,11,19,4,158,83],"ZX":4,"FX":0,"CH":2,"Big":1,"Small":0,"Odd":4,"Even":0},{"Front":6,"Middle":0,"Back":3,"Period":606752,"Result":12,"Nums":[31,37,12,14,8,6,4,13,11,0,21,1,10,18,3,157,82],"ZX":3,"FX":0,"CH":1,"Big":0,"Small":4,"Odd":3,"Even":0},{"Front":5,"Middle":0,"Back":2,"Period":606751,"Result":14,"Nums":[30,36,11,13,7,5,3,12,10,21,20,0,9,17,2,156,81],"ZX":2,"FX":1,"CH":0,"Big":0,"Small":3,"Odd":2,"Even":0},{"Front":4,"Middle":0,"Back":1,"Period":606750,"Result":14,"Nums":[29,35,10,12,6,4,2,11,9,20,19,0,8,16,1,155,80],"ZX":1,"FX":0,"CH":2,"Big":0,"Small":2,"Odd":1,"Even":0},{"Front":3,"Middle":1,"Back":0,"Period":606749,"Result":17,"Nums":[28,34,9,11,5,3,1,10,8,19,18,23,7,15,0,154,79],"ZX":0,"FX":3,"CH":1,"Big":0,"Small":1,"Odd":0,"Even":3},{"Front":2,"Middle":0,"Back":6,"Period":606748,"Result":9,"Nums":[27,33,8,10,4,2,0,9,7,18,17,22,6,14,31,153,78],"ZX":1,"FX":2,"CH":0,"Big":6,"Small":0,"Odd":0,"Even":2},{"Front":1,"Middle":0,"Back":5,"Period":606747,"Result":9,"Nums":[26,32,7,9,3,1,0,8,6,17,16,21,5,13,30,152,77],"ZX":0,"FX":1,"CH":27,"Big":5,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":4,"Period":606746,"Result":8,"Nums":[25,31,6,8,2,0,1,7,5,16,15,20,4,12,29,151,76],"ZX":1,"FX":0,"CH":26,"Big":4,"Small":0,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":3,"Period":606745,"Result":9,"Nums":[24,30,5,7,1,2,0,6,4,15,14,19,3,11,28,150,75],"ZX":0,"FX":1,"CH":25,"Big":3,"Small":0,"Odd":0,"Even":2},{"Front":0,"Middle":3,"Back":2,"Period":606744,"Result":7,"Nums":[23,29,4,6,0,1,31,5,3,14,13,18,2,10,27,149,74],"ZX":2,"FX":0,"CH":24,"Big":2,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":2,"Back":1,"Period":606743,"Result":8,"Nums":[22,28,3,5,7,0,30,4,2,13,12,17,1,9,26,148,73],"ZX":1,"FX":0,"CH":23,"Big":1,"Small":0,"Odd":1,"Even":0},{"Front":2,"Middle":1,"Back":0,"Period":606742,"Result":15,"Nums":[21,27,2,4,6,20,29,3,1,12,11,16,0,8,25,147,72],"ZX":0,"FX":2,"CH":22,"Big":0,"Small":1,"Odd":0,"Even":3},{"Front":1,"Middle":0,"Back":6,"Period":606741,"Result":11,"Nums":[20,26,1,3,5,19,28,2,0,11,10,15,6,7,24,146,71],"ZX":0,"FX":1,"CH":21,"Big":6,"Small":0,"Odd":0,"Even":2},{"Front":0,"Middle":1,"Back":5,"Period":606740,"Result":5,"Nums":[19,25,0,2,4,18,27,1,7,10,9,14,5,6,23,145,70],"ZX":1,"FX":0,"CH":20,"Big":5,"Small":0,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":4,"Period":606739,"Result":10,"Nums":[18,24,2,1,3,17,26,0,6,9,8,13,4,5,22,144,69],"ZX":0,"FX":2,"CH":19,"Big":4,"Small":0,"Odd":2,"Even":0},{"Front":0,"Middle":5,"Back":3,"Period":606738,"Result":6,"Nums":[17,23,1,0,2,16,25,11,5,8,7,12,3,4,21,143,68],"ZX":0,"FX":1,"CH":18,"Big":3,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":4,"Back":2,"Period":606737,"Result":5,"Nums":[16,22,0,5,1,15,24,10,4,7,6,11,2,3,20,142,67],"ZX":3,"FX":0,"CH":17,"Big":2,"Small":0,"Odd":0,"Even":3},{"Front":0,"Middle":3,"Back":1,"Period":606736,"Result":7,"Nums":[15,21,49,4,0,14,23,9,3,6,5,10,1,2,19,141,66],"ZX":2,"FX":0,"CH":16,"Big":1,"Small":0,"Odd":0,"Even":2},{"Front":3,"Middle":2,"Back":0,"Period":606735,"Result":15,"Nums":[14,20,48,3,6,13,22,8,2,5,4,9,0,1,18,140,65],"ZX":1,"FX":0,"CH":15,"Big":0,"Small":2,"Odd":0,"Even":1},{"Front":2,"Middle":1,"Back":0,"Period":606734,"Result":16,"Nums":[13,19,47,2,5,12,21,7,1,4,3,8,42,0,17,139,64],"ZX":0,"FX":2,"CH":14,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":1,"Middle":0,"Back":16,"Period":606733,"Result":11,"Nums":[12,18,46,1,4,11,20,6,0,3,2,7,41,59,16,138,63],"ZX":0,"FX":1,"CH":13,"Big":2,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":1,"Back":15,"Period":606732,"Result":6,"Nums":[11,17,45,0,3,10,19,5,7,2,1,6,40,58,15,137,62],"ZX":1,"FX":0,"CH":12,"Big":1,"Small":0,"Odd":1,"Even":0},{"Front":2,"Middle":0,"Back":14,"Period":606731,"Result":13,"Nums":[10,16,44,28,2,9,18,4,6,1,0,5,39,57,14,136,61],"ZX":0,"FX":2,"CH":11,"Big":0,"Small":2,"Odd":0,"Even":1},{"Front":1,"Middle":0,"Back":13,"Period":606730,"Result":12,"Nums":[9,15,43,27,1,8,17,3,5,0,6,4,38,56,13,135,60],"ZX":0,"FX":1,"CH":10,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":12,"Period":606729,"Result":7,"Nums":[8,14,42,26,0,7,16,2,4,1,5,3,37,55,12,134,59],"ZX":1,"FX":0,"CH":9,"Big":1,"Small":0,"Odd":0,"Even":1},{"Front":5,"Middle":0,"Back":11,"Period":606728,"Result":12,"Nums":[7,13,41,25,5,6,15,1,3,0,4,2,36,54,11,133,58],"ZX":0,"FX":1,"CH":8,"Big":0,"Small":1,"Odd":3,"Even":0},{"Front":4,"Middle":0,"Back":10,"Period":606727,"Result":10,"Nums":[6,12,40,24,4,5,14,0,2,7,3,1,35,53,10,132,57],"ZX":1,"FX":0,"CH":7,"Big":1,"Small":0,"Odd":2,"Even":0},{"Front":3,"Middle":0,"Back":9,"Period":606726,"Result":14,"Nums":[5,11,39,23,3,4,13,24,1,6,2,0,34,52,9,131,56],"ZX":0,"FX":1,"CH":6,"Big":0,"Small":1,"Odd":1,"Even":0},{"Front":2,"Middle":0,"Back":8,"Period":606725,"Result":11,"Nums":[4,10,38,22,2,3,12,23,0,5,1,7,33,51,8,130,55],"ZX":1,"FX":0,"CH":5,"Big":1,"Small":0,"Odd":0,"Even":3},{"Front":1,"Middle":0,"Back":7,"Period":606724,"Result":13,"Nums":[3,9,37,21,1,2,11,22,8,4,0,6,32,50,7,129,54],"ZX":0,"FX":1,"CH":4,"Big":0,"Small":1,"Odd":0,"Even":2},{"Front":0,"Middle":3,"Back":6,"Period":606723,"Result":7,"Nums":[2,8,36,20,0,1,10,21,7,3,18,5,31,49,6,128,53],"ZX":1,"FX":0,"CH":3,"Big":3,"Small":0,"Odd":0,"Even":1},{"Front":0,"Middle":2,"Back":5,"Period":606722,"Result":8,"Nums":[1,7,35,19,11,0,9,20,6,2,17,4,30,48,5,127,52],"ZX":0,"FX":1,"CH":2,"Big":2,"Small":0,"Odd":1,"Even":0},{"Front":0,"Middle":1,"Back":4,"Period":606721,"Result":3,"Nums":[0,6,34,18,10,9,8,19,5,1,16,3,29,47,4,126,51],"ZX":4,"FX":0,"CH":1,"Big":1,"Small":0,"Odd":0,"Even":1}]';
	        var stats = '[{"Front":16,"Middle":20,"Back":4,"Period":0,"Result":0,"Nums":[2,0,2,2,5,5,3,2,5,4,2,4,2,1,1,0,0],"ZX":18,"FX":19,"CH":3,"Big":14,"Small":26,"Odd":22,"Even":18},{"Front":6,"Middle":5,"Back":16,"Period":0,"Result":0,"Nums":[35,45,49,28,11,20,31,24,16,21,29,23,42,59,31,165,90],"ZX":6,"FX":3,"CH":27,"Big":6,"Small":4,"Odd":5,"Even":3}]';
	        var viewmodel = avalon.define('chart', function (vm) {
	            vm.periodCount = 40;
	            vm.trendDatas = [];
	            vm.totalDatas = [];
	            vm.flagPeriod = -1;
	            vm.$updown = 1;
	            vm.fgxIscheck = true;
	            vm.changePeriod = function () {
	                chartLine.clearLines();
	                $(".data-stat").hide();
	                $(".trendChartloading").show();
	                $.get("/pk10/guanyatrend", {  count: vm.periodCount, istoday: vm.periodCount == 0,t:Math.random()}, function (data) {
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
	            vm.chkFgx = function () {
	                vm.fgxIscheck = !vm.fgxIscheck;
	                chartLine.splitDisplay();
	            }
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
	                var prev = vm.getData(r.Period - 1);
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
	                    if (r.Result >=3&&r.Result<= 8) {
	                        r.Front = 0;
	                        r.Middle = prev.Middle + 1;
	                        r.Back = prev.Back + 1;
	                    } else if (r.Result >= 9 && r.Result <= 14) {
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
	                vm.changePeriod();
	            });
	            vm.$watch("flagPeriod", function (value, oldvalue) {
	                if (value == -1) return;
	                $.get("/pk10/ajax", { ajaxHandler: 'GetPk10AwardData', t: Math.random() }, function (data) {
	                    var p = data.current.periodNumber;
	                    viewmodel.removeData(p);
	                    var newNums= data.current.awardNumbers.split(',');
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


