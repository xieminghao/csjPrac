// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
console.log(pathname);

var successFn = function(res){
	console.log(res);
	if(pathname == '/pk10/'){
		$('#lot-content').html(res);
	} else {
		$('.lot-wrap').replaceWith(res);
	}

	$('.feedbackDiv').remove();
	$('li[data-tag="zh"]').remove();
	$('li[data-tag="tbm"]').remove();


}

$.ajax({
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: successFn
});

