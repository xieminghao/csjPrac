// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";

var lotteryLuzhu = false;

function Search() {
    $.get("/pl3/kaijiang?year=" + $("#yearControl").val(), null, function (text) {
        $('#history_list').html(text);
    });
}



$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
    	$("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
    	$("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/fc3d/award.js',type:'text/javascript'}).appendTo($('body'));

    	
	    $(function () {
            $(".iconHelp").on("mouseenter", function () {
                $(".helpWindow").fadeIn(400);
            });

            $(".iconHelp").on("mouseleave", function () {
                $(".helpWindow").fadeOut(400);
            });
        });
	    
    }
});