// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
console.log(pathname);

if(pathname == '/pk10/'){
	$.ajax({
		url: host+pathname,
		data:{},
		datatype:'html',
		type:'get',
		success:function(res){
			console.log(res);
			$('#lot-content').html(res);
			// drawTrend();
		}
	});
} else {
	$.ajax({
		url: host+pathname,
		data:{},
		datatype:'html',
		type:'get',
		success:function(res){
			console.log(res);
			$('.lot-wrap').replaceWith(res);
			console.log('replace completed');
		}
	});
}
