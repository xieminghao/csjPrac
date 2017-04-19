// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'gd11x5_memu';
var lotteryLuzhu = "";

/*异步load路珠*/
function reloadLuzhu(url, date, unload) {
    var _container = $("#pageName").attr("container");
    _container = _container ? _container : "lot-wrap";
    $('#' + _container).css({ "width": "100%" });
    $('#' + _container).css("position", "relative").append("<div style='margin:0 auto; width:100%;height:100%; color:#FFF; position:absolute; top:240px; z-index:11;left:0px;'>数据正在加载中...</div><div class='loaddingBg'></div>");
    $.get(url, { t: Math.random(), date: date }, function (text) {
        $('#' + _container).html(text);
        $("#pageName").attr("unload", unload);
        $('#' + _container).css("position", "");
    });
}

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao_common.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/gd11x5/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});