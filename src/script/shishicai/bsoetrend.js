// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
var ballName = ["小单", "小双", "大单", "大双"];
function drawTrend() {
    var ball = $(".ball ul li .cur").attr("ball");

    $.get("/shishicai/numbertrendData", { ball: ball, count: 40, t: Math.random() }, function (result) {
        var data = eval(result);
        showBsoeline(" ", data, function () {
            return this.x + '期:' + this.point.text + " " + ballName[this.y];//
        }, true);
    }, "json");

}
function getYpoint(num) {
    if (num % 2 == 0) {
        if (num > 4) {
            return 3;           //大双
        } else {
            return 1;           //小双
        }
    } else {
        if (num > 4) {
            return 2;           //大单
        } else {
            return 0;           //小单
        }
    }
}
function showBsoeline(title, data, fun, showLogo) {
    var xData = [];
    var chartData = [];
    for (var i = 0; i < data.length; i++) {
        xData.push(data[i].Key);
        var obj = { name: data[i].Key, y: getYpoint(data[i].Value), text: data[i].Value };
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
            min: -0.5,
            max: 3.5,
            tickInterval: 0.5,
            title: { text: '' },
            labels: {
                formatter: function () {
                    return ballName[this.value];
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
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.point.text;
                        // return ballName[this.point.y];
                    }
                }
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
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            $(".ball ul li a").each(function () {
                $(this).bind("click", function () {
                    $(".ball ul li a").removeClass("cur");
                    $(this).addClass("cur");
                    drawTrend();
                });
            });
            drawTrend();
        });
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/cqssc/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});