// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = false;

function drawTrend() {
    $.get("/pl3/numbertrendData", { ball: 1, count: 15, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("第一球走势图", data, function () { return this.x + '期:' + this.y }, 0, 10, true, 0, "sContainer");
    }, "json");
}


var successFn = function(res){
    $('#lot-content').html(res);

    $(function () {
        drawTrend();
        $(".iconHelp").on("mouseenter", function () {
            $(".helpWindow").fadeIn(400);
        });

        $(".iconHelp").on("mouseleave", function () {
            $(".helpWindow").fadeOut(400);
        });
    });

}

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: successFn
});