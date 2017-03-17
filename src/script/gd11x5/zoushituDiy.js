// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'gd11x5_memu';

var lotteryLuzhu = "";
// console.log(host+pathname);

function drawTrend() {
    var ball = $(".ball ul li .cur").attr("ball");
    if (!ball) ball = 1;

    $.get("/gd11x5/numbertrendData", { ball: ball, count: 40, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("号码走势图", data, function () { return this.x + '期:' + this.y }, 1, 11, true);
    }, "json");
}



$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.lot-wrap').replaceWith(res);

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


