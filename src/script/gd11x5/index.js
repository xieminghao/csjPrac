// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');


function drawTrend() {
    $.get("/gd11x5/numbertrendData", { ball: 1, count: 25, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("第一球走势图", data, function () { return this.x + '期:' + this.y }, 1, 11, true, 0, "sContainer");
    }, "json");
}

var successFn = function(res){
    $('#lot-content').html(res);
    // $('.feedbackDiv').remove();
    // $('li[data-tag="zh"]').remove();
    // $('li[data-tag="tbm"]').remove();
    // $('li[data-tag="sjyy"]').remove();
    // $('li[data-tag="jq"]').remove();
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