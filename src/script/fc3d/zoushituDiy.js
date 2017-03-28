// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'fc3d_memu';

var lotteryLuzhu = false;
// console.log(host+pathname);

function drawTrend() {
    var ball = $(".ball ul li .cur").attr("ball");
    if (!ball) ball = 1;

    $.get("/fc3d/numbertrendData", { ball: ball, count: 20, t: Math.random() }, function (result) {
        var data = eval(result);
        showChartline("号码走势图", data, function () { return this.x + '期:' + this.y }, 0, 10, true);
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


