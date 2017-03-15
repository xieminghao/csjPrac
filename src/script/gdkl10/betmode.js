// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);

// 	$('.feedbackDiv').remove();
// 	$('li[data-tag="zh"]').remove();
// 	$('li[data-tag="tbm"]').remove();
// 	$('li[data-tag="sjyy"]').remove();


// }

$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').replaceWith(res);

        // 阻止点击a标签跳转
        $('#lot_content a').on('click',function(e){
            e.preventDefault();
        });

	}
});


