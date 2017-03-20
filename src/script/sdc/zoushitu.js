// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'sdc_memu';
var lotteryLuzhu = "";
function drawTrend() {
    var ball = $(".ball ul li .cur").attr("ball");
    if (!ball) ball = 1;

    $.get("/sdc/numbertrendData", { ball: ball, count: 40, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("号码走势图", data, function () { return this.x + '期:' + this.y }, 0, 10, true);
    }, "json");
};
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/sdc/award.js',type:'text/javascript'}).appendTo($('body'));

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
    }
});