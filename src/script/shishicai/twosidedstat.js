// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
function changeBall(ball) {
    var _container = $("#callFun").attr("container");
    _container = _container ? _container : "lot-wrap";
    //$('#'+_container).css("position", "relative").append("<div style='margin:0 auto; width:100%; color:#FFF; position:absolute; top:220px; z-index:11;left:0px;'>数据正在加载中...</div><div class='loaddingBg'></div>");
    $.get(pathname, { t: Math.random(), id: ball }, function (text) {
        $('#' + _container).html(text);
    });
}
function twosidedstat()
{
    changeBall($("#choose_ball li a.currball").attr("ball"));
}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            $("#choose_ball ul li a").bind("click", function () {
                $("#choose_ball li a.currball").removeClass("currball");
                $(this).addClass("currball");
                changeBall($(this).attr("ball"));
            });
        });
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/cqssc/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});