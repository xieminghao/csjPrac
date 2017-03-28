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
		$('.web_dateLineBody').replaceWith(res);
		$("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/sea.js',type:'text/javascript'}).appendTo($('body'));

	    // console.log(seajs);
	    var obj = null;
        seajs.use("/script/fc3d/seajslib/chart.js", function (fc3d) {
            obj = fc3d;
            var param = {
                Position: -1,
                LotteryCode: "fc3d",
                LotteryName: "福彩3D"
            };
            fc3d.arguments = param;
            fc3d.Init(2, "fc3d", "chart");
        });

		
	}
});


