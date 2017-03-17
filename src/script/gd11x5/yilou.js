// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'gd11x5_memu';
var lotteryLuzhu = "";
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
       
        $(function () {
            $(".web_Sortk .btn span").live("click", function () {
                $.get($(this).attr("data-url"), null, function (text) {
                    $('#lot_content').html(text);
                });
            });
            $(".ball li a").live("click", function () {
                $(".ball li a").removeClass("cur");
                $(this).addClass("cur");
                $.get($(this).attr("data-url"), null, function (text) {
                    $('#lot_content').html(text);
                });
            });
        })


    }
});