// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'shssl_memu';
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
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/shssl/award.js',type:'text/javascript'}).appendTo($('body'));

        document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?t=" + new Date().getHours();
        $(function () {
            $('.btn_share_html').click(function () {
                $('#copyInput').val('<iframe src="http://www.1395p.com/shssl/shipin/?mode=iframe" width="980" height="630" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });

            $('.btn_share_url').click(function () {
                $('#copyInput').val('http://www.1395p.com/shssl/shipin/');
                $('#copyInput').select();
                try {
                    window.clipboardData.setData('Text', $('#copyInput').val());
                    alert("复制成功");
                } catch (e) {
                    $(".copyError").show();
                }
            });

            var vLottery = "shssl";
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
    }
});