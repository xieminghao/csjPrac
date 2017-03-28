// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";


$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').replaceWith(res);

		window.reloadData = function() {
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


