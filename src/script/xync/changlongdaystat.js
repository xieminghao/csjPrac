// 每个页面值调用一次的请求根据页面的location来判断请求的接口
//var pathname = location.pathname.replace('index.html','');
var pathname = '/xync/changlongdaystat';
var lotMenu = 'xync_memu';
var lotteryLuzhu = "";
function changeSelect() {
    var type = $("#choose_type .cur").attr("data-type");
    var pos = $("#choose_pos .cur").attr("data-pos");
    $("#type").html($("#choose_type .cur").attr("data-text"));
    var _container = $("#callFun").attr("container");
    _container = _container ? _container : "lot-wrap";
    $.get(pathname, { t: Math.random(), type: type, pos: pos }, function (text) {
        $('#' + _container).html(text);
    });
}


function chooseItems() {
    var type = ~~$("#choose_type .cur").attr("data-type");
    $("#choose_pos li").show();
    var pos = ~~$("#choose_pos .cur").attr("data-pos");
    if (type == 7 || type == 8) {
        $("#choose_pos li[filter*=nolonghu]").hide();
        if (pos == -1 || pos > 4) {
            $("#choose_pos a").removeClass("cur");
            $("#choose_pos a:first").addClass("cur");
        }
    } else if (type == 12 || type == 13) {
        $("#choose_pos li[filter*=noheshu]").hide();
        if (pos == -1) {
            $("#choose_pos a").removeClass("cur");
            $("#choose_pos a:first").addClass("cur");
        }
    }
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
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            var fixedMenu = $(".web_listOP");
            var x = fixedMenu.offset().left;
            var y = fixedMenu.offset().top;

            $(window).resize(function () {
                fixedMenu.removeAttr("style");
                x = fixedMenu.offset().left;
                y = fixedMenu.offset().top;
            });


            var scrollFunc = function (e) {
                if (location.pathname.indexOf("nineplan") > 0) return;
                e = e || window.event;
                var t1 = document.getElementById("wheelDelta");
                var t2 = document.getElementById("detail");
                var isup = false;
                if (e.wheelDelta) {//IE/Opera/Chrome
                    isup = e.wheelDelta >= 120;
                } else if (e.detail) {//Firefox
                    isup = e.detail <= -3;
                }
                var winHeight = $(document).height();
                var st = $(document).scrollTop();
                if (isup && winHeight > 3500 && st > 1500) {
                    var pos = { "background": "#f1f1f1", "border": "1px solid #999", "z-index": "9999" };
                    //if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
                    //    pos = $.extend({}, pos, { "position": "absolute", "top": $(window).scrollTop()-50 + "px" });
                    //} else {
                    pos = $.extend({}, pos, { "position": "fixed", "top": "0px", "left": (x - 2) + "px" });
                    // }
                    fixedMenu.css(pos);
                    fixedMenu.find("ul").css({ "padding": "3px 0 3px 0" });
                } else {
                    fixedMenu.removeAttr("style");
                    fixedMenu.find("ul").css({ "padding": "0 0 10px 0" });
                }
            }
            /*注册事件*/
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }//W3C
            window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
        });

        $("#type").html($("#choose_type .cur").attr("data-text"));

        $(function () {
            $("#choose_type a").removeClass("cur");
            $("#choose_pos a").removeClass("cur");
            $("#choose_type a[data-type=1]").addClass("cur");
            $("#choose_pos a[data-pos=1]").addClass("cur");
            $("#type").html($("#choose_type .cur").attr("data-text"));
            setTimeout(function () {
                chooseItems();
            }, 100);
            $("#refresh").live("click", function () {
                changeSelect();
            });
            $("#choose_pos a ").on("click", function () {
                $("#choose_pos a").removeClass("cur");
                $(this).addClass("cur");
                changeSelect();
            });
        });
        $(function () {

            $("#choose_type a ").on("click", function () {
                $("#choose_type a").removeClass("cur");
                $(this).addClass("cur");
                chooseItems();
                changeSelect();
            });

        });
    }
});