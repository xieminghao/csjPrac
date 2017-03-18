// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'xync_memu';
var lotteryLuzhu = "";

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').append(res);
        var iframeEle = $('<div style="padding:0px 10px 20px;clear:left;"><iframe width="1000" height="420" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" src="'+host+pathname+'/shipin/"></iframe><div>');
        // iframeEle.attr('src','http://m.1399p.com/video/pk10');
        $('#img-scroll').before(iframeEle);

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/videomove.js',type:'text/javascript'}).appendTo($('body'));
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
        document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?t=" + new Date().getHours();
        $(function () {
            $('.btn_share_html').click(function () {
                $('#copyInput').val('<iframe src="http://www.1395p.com/xync/shipin/?mode=iframe" width="980" height="630" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });

            $('.btn_share_url').click(function () {
                $('#copyInput').val('http://www.1395p.com/xync/shipin/');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });

            var vLottery = "xync";
            $("#" + vLottery).remove();

            if ("pk10" != vLottery) {
                CheckAward("pk10", "GetPk10AwardTimes", this.pk10_downTimer, pk10_number, "pk10-time");
            }
            if ("cqssc" != vLottery) {
                CheckAward("shishicai", "GetCqsscAwardTimes", this.cqssc_downTimer, cqssc_number, "cqssc-time");
            }
            if ("gdkl10" != vLottery) {
                CheckAward("gdkl10", "GetGDKL10AwardTimes", this.gdkl10_downTimer, gdkl10_number, "gdkl10-time");
            }
            if ("jsk3" != vLottery) {
                CheckAward("jsk3", "GetJsk3AwardTimes", this.jsk3_downTimer, jsk3_number, "jsk3-time");
            }
            if ("xync" != vLottery) {
                CheckAward("xync", "GetXyncAwardTimes", this.xync_downTimer, xync_number, "xync-time");
            }
            if ("xyft" != vLottery) {
                CheckAward("xyft", "GetXyftAwardTimes", this.xyft_downTimer, xyft_number, "xyft-time");
            }
            if ("kl8" != vLottery) {
                CheckAward("kl8", "GetKl8AwardTimes", this.kl8_downTimer, kl8_number, "kl8-time");
            }
            if ("jxssc" != vLottery) {
                CheckAward("jxssc", "GetJxsscAwardTimes", this.jxssc_downTimer, jxssc_number, "jxssc-time");
            }
            if ("shssl" != vLottery) {
                CheckAward("shssl", "GetShsslAwardTimes", this.shssl_downTimer, shssl_number, "shssl-time");
            }
            if ("gd11x5" != vLottery) {
                CheckAward("gd11x5", "GetAwardTimes", this.gd11x5_downTimer, gd11x5_number, "gd11x5-time");
            }
            if ("jx11x5" != vLottery) {
                CheckAward("jx11x5", "GetAwardTimes", this.jx11x5_downTimer, jx11x5_number, "jx11x5-time");
            }
            if ("syydj" != vLottery) {
                CheckAward("syydj", "GetAwardTimes", this.syydj_downTimer, syydj_number, "syydj-time");
            }
            if ("tjssc" != vLottery) {
                CheckAward("tjssc", "GetAwardTimes", this.tjssc_downTimer, tjssc_number, "tjssc-time");
            }
            if ("xjssc" != vLottery) {
                CheckAward("xjssc", "GetAwardTimes", this.xjssc_downTimer, xjssc_number, "xjssc-time");
            }
            if ("fc3d" != vLottery) {
                CheckAward("fc3d", "GetAwardTimes", this.fc3d_downTimer, fc3d_number, "fc3d-time");
            }
            if ("pl3" != vLottery) {
                CheckAward("pl3", "GetAwardTimes", this.pl3_downTimer, pl3_number, "pl3-time");
            }
            DY_scroll('#img-scroll', '#prev', '#next', '#img-list', 3, true);// true为自动播放，不加此参数或false就默认不自动

            $(".web_moreVideoContent li").hover(
                function () {
                    $(".web_mengban", $(this)).animate({ opacity: 0.3 }, 500);
                },
                function () {
                    $(".web_mengban", $(this)).animate({ opacity: 0 }, 500);
                }
            )
        });

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});