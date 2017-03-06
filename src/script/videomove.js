function DY_scroll(wraper, prev, next, img, speed, or) {
    var wraper = $(wraper);
    var prev = $(prev);
    var next = $(next);
    var img = $(img).find('ul');
    var w = img.find('li').outerWidth(true);
    var s = speed;
    next.click(function () {
        img.animate({ 'margin-left': -w }, function () {
            img.find('li').eq(0).appendTo(img);
            img.css({ 'margin-left': 0 });
        });
    });
    prev.click(function () {
        img.find('li:last').prependTo(img);
        img.css({ 'margin-left': -w });
        img.animate({ 'margin-left': 0 });
    });
    //if (or == true) {
    //    ad = setInterval(function () { next.click(); }, s * 3000);
    //    wraper.hover(function () { clearInterval(ad); }, function () { ad = setInterval(function () { next.click(); }, s * 1000); });

    //}
}


var cqssc_number = -1;
var cqssc_downTimer = null;

var pk10_number = -1;
var pk10_downTimer = null;

var gdkl10_number = -1;
var gdkl10_downTimer = null;

var jsk3_number = -1;
var jsk3_downTimer = null;

var xync_number = -1;
var xync_downTimer = null;

var xyft_number = -1;
var xyft_downTimer = null;

var kl8_number = -1;
var kl8_downTimer = null;

var jxssc_number = -1;
var jxssc_downTimer = null;

var shssl_number = -1;
var shssl_downTimer = null;

var gd11x5_number = -1;
var gd11x5_downTimer = null;

var syydj_number = -1;
var syydj_downTimer = null;

var jx11x5_number = -1;
var jx11x5_downTimer = null;

var tjssc_number = -1;
var tjssc_downTimer = null;

var xjssc_number = -1;
var xjssc_downTimer = null;

var fc3d_number = -1;
var fc3d_downTimer = null;

var pl3_number = -1;
var pl3_downTimer = null;

function showTime(page, timeSpan, time) {

    if (time < 1) {
        if (page == "pk10") {
            CheckAward("pk10", "GetPk10AwardTimes", this.pk10_downTimer, pk10_number, "pk10-time");
        }
        else if (page == "shishicai") {
            CheckAward("shishicai", "GetCqsscAwardTimes", this.cqssc_downTimer, cqssc_number, "cqssc-time");
        }
        else if (page == "gdkl10") {
            CheckAward("gdkl10", "GetGDKL10AwardTimes", this.gdkl10_downTimer, gdkl10_number, "gdkl10-time");
        }
        else if (page == "jsk3") {
            CheckAward("jsk3", "GetJsk3AwardTimes", this.jsk3_downTimer, jsk3_number, "jsk3-time");
        }
        else if (page == "xync") {
            CheckAward("xync", "GetXyncAwardTimes", this.xync_downTimer, xync_number, "xync-time");
        }
        else if (page == "xyft") {
            CheckAward("xyft", "GetXyftAwardTimes", this.xyft_downTimer, xyft_number, "xyft-time");
        }
        else if (page == "kl8") {
            CheckAward("kl8", "GetKl8AwardTimes", this.kl8_downTimer, kl8_number, "kl8-time");
        } else if (page == "jxssc") {
            CheckAward("jxssc", "GetJxsscAwardTimes", this.jxssc_downTimer, jxssc_number, "jxssc-time");
        } else if (page == "shssl") {
            CheckAward("shssl", "GetShsslAwardTimes", this.shssl_downTimer, shssl_number, "shssl-time");
        } else if (page == "gd11x5") {
            CheckAward("gd11x5", "GetAwardTimes", this.gd11x5_downTimer, gd11x5_number, "gd11x5-time");
        } else if (page == "syydj") {
            CheckAward("syydj", "GetAwardTimes", this.syydj_downTimer, syydj_number, "syydj-time");
        } else if (page == "jx11x5") {
            CheckAward("jx11x5", "GetAwardTimes", this.jx11x5_downTimer, jx11x5_number, "jx11x5-time");
        } else if (page == "tjssc") {
            CheckAward("tjssc", "GetAwardTimes", this.tjssc_downTimer, tjssc_number, "tjssc-time");
        } else if (page == "xjssc") {
            CheckAward("xjssc", "GetAwardTimes", this.xjssc_downTimer, xjssc_number, "xjssc-time");
        } else if (page == "fc3d") {
            CheckAward("fc3d", "GetAwardTimes", this.fc3d_downTimer, fc3d_number, "fc3d-time");
        } else if (page == "pl3") {
            CheckAward("pl3", "GetAwardTimes", this.pl3_downTimer, pl3_number, "pl3-time");
        }
    }
    else {

        $("#" + timeSpan).text(time);
    }
}
function CheckAward(page, method, downTimer, number, timeSpan) {
    window.clearInterval(downTimer);
    $.post("/" + page + "/ajax", { ajaxhandler: method }, function (data) {
        if (data.current.periodNumber != number) {
            var time = parseInt(data.next.awardTimeInterval / 1000) + 3;
            downTimer = window.setInterval(function () {

                if (time < 1) {
                    window.clearInterval(downTimer);
                }
                showTime(page, timeSpan, time--);
            }, 1000);
        }
        number = data.current.periodNumber;
    }, 'json');
}