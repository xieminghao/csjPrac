// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var searchList = decodeURIComponent(decodeURIComponent(location.search)).split('?r=')[1].split('&');
var pathname = searchList[0];
var stit = searchList[1];
document.title = document.title.replace('快8技巧之反败为胜的妙招',stit).replace('皇家彩世界', '新世界')
var keywords = $("meta[name=keywords]").attr("content");
var description = $("meta[name=description]").attr("content");
$("meta[name=keywords]").attr('content', keywords.replace('快8技巧之反败为胜的妙招', stit).replace('皇家彩世界', '新世界'));
$("meta[name=description]").attr('content', description.replace('快8技巧之反败为胜的妙招', stit).replace('皇家彩世界', '新世界'));

var lotMenu = 'kl8_memu';
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
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            for (var i = 0; i < $(".bw_content").length; i++) {

                var fontLength = $(".bw_content").eq(i).find(".bw_rightFont b").html().length;
                if (fontLength <= 7) {
                    $(".bw_content").eq(i).find(".bw_rightFont a").css({ "height": "auto" });
                    $(".bw_content").eq(i).find(".bw_rightFont i").css({ "top": "0px", "bottom": "''" });
                } else if (fontLength > 7) {
                    $(".bw_content").eq(i).find(".bw_rightFont a").css({ "height": "43px" });
                    $(".bw_content").eq(i).find(".bw_rightFont i").css({ "top": "''", "bottom": "0px" });
                }
            }

            $(".bw_conList .li").mouseenter(function (event) {
                $(".bw_conList .bw_content").css("display", "none");
                $(".bw_conList .li").css("display", "block");
                $(this).prev().css("display", "block");
                $(this).css("display", "none");
            });
        });

        /*处理图片宽度*/
        $(document).ready(function () {
            $(".method-wrap .text img").each(function (i) {
                var maxwidth = 630;
                var maxheight = $(this).height();
                var orgwidth = $(this).width();
                $(this).css("cursor", "pointer");
                if (this.width > maxwidth) {
                    this.width = maxwidth;
                    $(this).css("width", maxwidth);
                    this.height = maxheight * maxwidth / orgwidth;
                    maxheight = maxheight * maxwidth / orgwidth;
                    $(this).css("height", maxheight);
                }
                if (this.width == 0) {
                    $(this).css("max-width", maxwidth);
                }
                $(this).click(function () {
                    window.open($(this).attr("src"));
                });
            });
        });

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/kl8/award.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao_common.js',type:'text/javascript'}).appendTo($('body'));
    }
});