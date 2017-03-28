// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'gdkl10_memu';

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

function changeData(ball, dt) {
    $.get("/gdkl10/specialformdata", { ball: ball, dateType: dt, t: Math.random() }, function (text) {
        $('#table-datas').html(text);
    });
}
function updateFormDatas() {
    var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
    changeData(ball, $("#dataType").val());
}

$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.lot-wrap').replaceWith(res);



		$(" .lot-search .car-num .lot-number-omit .ball li a").on("click", function () {
            $(" .lot-search .car-num .lot-number-omit .ball li a").removeClass("cur");
            $(this).addClass("cur");
            var ball = $(this).attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });
        $("#dataType").bind("change", function () {
            var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });
        

		
	}
});


