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
		$("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/sea.js',type:'text/javascript'}).appendTo($('body'));


		var obj = null;
	    seajs.use("/script/fc3d/seajslib/chart.js", function (pl3) {
	    	obj = pl3;
            var param = {
                Position: -1,
                LotteryCode: "pl3",
                LotteryName: "排列3"
            };
            pl3.arguments = param;
            pl3.Init(2, "pl3", "chart");
	    });
	    // console.log(seajs);
		
	}
});


