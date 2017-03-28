// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = '/xyft/numberplan';
var lotMenu = 'xyft_memu';

var lotteryLuzhu = "";



$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.xyft_bodyBackground').replaceWith(res);

	}
});