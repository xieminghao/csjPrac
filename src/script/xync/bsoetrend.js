// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'xync_memu';
var lotteryLuzhu = "";
var ballName = ["小单", "小双", "大单", "大双"];
function drawTrend() {
    var ball = $(".ball ul li .cur").attr("ball");

    $.get("/xync/numbertrendData", { ball: ball, count: 40, t: Math.random() }, function (result) {
        var data = eval(result);
        showBsoeline(" ", data, function () {
            return this.x + '期:' + this.point.text + " " + ballName[this.y];//
        }, true);
    }, "json");

}
function getYpoint(num) {
    if (num % 2 == 0) {
        if (num > 10) {
            return 3;           //大双
        } else {
            return 1;           //小双
        }
    } else {
        if (num > 10) {
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
            var fixedMenu = $(".web_listOP");
            var x = fixedMenu.offset().left;
            var y = fixedMenu.offset().top;

            $(window).resize(function () {
                fixedMenu.removeAttr("style");
                x = fixedMenu.offset().left;
                y = fixedMenu.offset().top;
            });


            var scrollFunc = function (e) {
                if (location.pathname.indexOf("nineplan") > 0) return;
                e = e || window.event;
                var t1 = document.getElementById("wheelDelta");
                var t2 = document.getElementById("detail");
                var isup = false;
                if (e.wheelDelta) {//IE/Opera/Chrome
                    isup = e.wheelDelta >= 120;
                } else if (e.detail) {//Firefox
                    isup = e.detail <= -3;
                }
                var winHeight = $(document).height();
                var st = $(document).scrollTop();
                if (isup && winHeight > 3500 && st > 1500) {
                    var pos = { "background": "#f1f1f1", "border": "1px solid #999", "z-index": "9999" };
                    //if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    //    pos = $.extend({}, pos, { "position": "absolute", "top": $(window).scrollTop()-50 + "px" });
                    //} else {
                    pos = $.extend({}, pos, { "position": "fixed", "top": "0px", "left": (x - 2) + "px" });
                    // }
                    fixedMenu.css(pos);
                    fixedMenu.find("ul").css({ "padding": "3px 0 3px 0" });
                } else {
                    fixedMenu.removeAttr("style");
                    fixedMenu.find("ul").css({ "padding": "0 0 10px 0" });
                }
            }
            /*注册事件*/
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }//W3C
            window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
        });
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
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});