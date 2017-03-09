// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);

// var successFn = function(res){
// 	// console.log(res);
// 	if(pathname == '/pk10/'){
// 		$('#lot-content').html(res);
// 	} else {
// 		// var x = res.match(/<script[\s\S]*?\/script>/g);
// 		// console.log(x);
// 		$('.lot-wrap').replaceWith(res);
// 	}

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

		function reloadData() {
	        $.get('/pk10/ColdHotNumber?' + Math.random(), null, function (text) {
	            $('#lot-wrap' ).html(text);
	        });
        
	    }
	    $("#times-show ").live("click", function () {
	        if ($("b", $(this)).attr("class") == "checkbox") {
	            $("b", $(this)).addClass("checked");
	            $(".redBalls2").show()
	        } else {
	            $("b", $(this)).removeClass("checked");
	            $(".redBalls2").hide()
	        }
	    });
		
	}
});


