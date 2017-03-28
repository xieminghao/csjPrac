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
		$('.lot-wrap').replaceWith(res);


		var ballName = ["冠军", "亚军", "第三球", "第四球", "第五球", "第六球", "第七球", "第八球", "第九球", "第十球"];
        function drawTrend() {
            var ball = $(".ball ul li .cur").attr("ball");
            var num = $(".ball ul li .cur").attr("num");
            var tag = $(".zst-type .cur").attr("tag");
            if (tag == "guanya") {
                $.get("/pk10/guangyatrenddata", { count: 40, t: Math.random() }, function (result) {
                    var data = eval(result);
                    showChartline(" ", data, function () { return this.x + '期:' + this.y }, 0, 20, true);
                }, "json");
            } else {
                if (!num && ball) {
                    $.get("/pk10/numbertrendData", { ball: ball, count: 40, t: Math.random() }, function (result) {
                        var data = eval(result);
                        showChartline(" ", data, function () { return this.x + '期:' + this.y }, 0, 10, true);
                    }, "json");
                }
                else {
                    $.get("/pk10/positiontrenddata", { num: num, count: 40, t: Math.random() }, function (result) {
                        var data = eval(result);;
                        showPk10line(" ", data, function () { return this.x + '期:' + ballName[this.y - 1] }, true);
                    }, "json");
                }
            }
        }
        function showPk10line(title, data, fun, showLogo) {
            var xData = [];
            var chartData = [];
            for (var i = 0; i < data.length; i++) {
                xData.push(data[i].Key);
                var obj = { name: data[i].Key, y: data[i].Value };
                chartData.push(obj);
            }
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'container',
                    defaultSeriesType: 'spline'
                },
                title: {
                    text: title,
                    style: { 'font-weight': 'bold' }
                },
                xAxis: {
                    categories: xData,
                    labels: {
                        style: { fontWeight: 'bold' }
                    }
                },
                yAxis: {
                    min: 1,
                    max: 10,
                    tickPixelInterval: 50,
                    title: { text: '' },
                    labels: {
                        formatter: function () {
                            return ballName[this.value - 1];
                        }
                    }
                },
                legend: { enabled: false },
                tooltip: {
                    enable: true,
                    formatter: fun
                },
                plotOptions: {
                    spline: {
                        pointPadding: 0,
                        borderWidth: 0,
                        dataLabels: { enabled: true }
                    }
                },
                credits: {
                    enabled: showLogo,
                    href: '',
                    text: '',
                    position: {
                        align: 'right',
                        y: 15,
                        verticalAlign: 'top'
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                series: [{ name: 'data', data: chartData }]
            });
        }
        $(function () {
            $(".ball ul li a").each(function () {
                $(this).bind("click", function () {
                    $(".ball ul li a").removeClass("cur");
                    $(this).addClass("cur");
                    drawTrend();
                });
            });
            $(".zst-type a").each(function () {
                $(this).bind("click", function () {
                    $(".zst-type a").removeClass("cur");
                    $(".ball ul li a").removeClass("cur");
                    var tag=$(this).attr("tag") ;
                    $(this).addClass("cur");
                    if (tag== "weizhi") {
                        $("#zst-weizhi").show();
                        $("#zst-haoma").hide();
                        $("#zst-weizhi a").first().addClass("cur");
                    } else if (tag == "haoma") {
                        $("#zst-haoma").show();
                        $("#zst-weizhi").hide();
                        $("#zst-haoma a").first().addClass("cur");
                    } else {
                        $("#zst-weizhi").hide();
                        $("#zst-haoma").hide();
                    }
                    drawTrend();
                });
            });
            drawTrend();
        });
		
	}
});


