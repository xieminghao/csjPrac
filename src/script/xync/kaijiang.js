// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'xync_memu';
var lotteryLuzhu = "";
function Search() {
    $.get("/xync/kaijiang?date=" + $("#dateData").val(), null, function (text) {
        $('#history-table').html(text);
        clearBsoeChk();
        clearChk();
    });
}

function showNum() {
    var datas = [];
    var ckbedBsoe = $("#bsoe-choose b.true");
    var ckbedBall = $("#ball-choose b.true");

    for (var i = 0; i < ckbedBall.length; i++) {
        datas.push($(ckbedBall[i]).attr("data-c"));
    }
    var chkD = [];
    for (var i = 0; i < ckbedBsoe.length; i++) {
        var t = $(ckbedBsoe[i]).attr("data-c");
        chkD.push(t);
    }

    if (chkD.length == 1) {
        if ($.inArray("s", chkD) > -1) {
            datas.push("01", "02", "03", "04", "05", "06", "07", "08", "09", "10");
        } else if ($.inArray("o", chkD) > -1) {
            datas.push("01", "03", "05", "07", "09", "11", "13", "15", "17", "19");
        } else if ($.inArray("e", chkD) > -1) {
            datas.push("02", "04", "06", "08", "10", "12", "14", "16", "18", "20");
        } else if ($.inArray("b", chkD) > -1) {
            datas.push("11", "12", "13", "14", "15", "16", "17", "18", "19","20");
        }
    } else {
        if ($.inArray("s", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push("02", "04", "06", "08", "10");
        } else if ($.inArray("s", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push("01", "03", "05", "07", "09");
        } else if ($.inArray("b", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push("12", "14", "16", "18", "20");
        } else if ($.inArray("b", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push("11", "13", "15", "17", "19");
        }
    }

    $(".nums i").removeClass("noshade");
    if (datas.length > 0) {
        $(".nums").addClass("shade");
    }

    for (var i = 0; i < datas.length; i++) {
        var c = ".lot-no" + datas[i];
        $(c).addClass("noshade");
    }
    if (datas.length == 0) {
        $(".nums").removeClass("shade");
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

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});