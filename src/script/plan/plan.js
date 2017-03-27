$(function () {
    $(".web_helpIcon").hover(
        function () {
            $("#tipHelp").text($(this).attr("data-help"));
            var helpIconX = $(this).offset().left;
            var helpIconY = $(this).offset().top;

            $(".pk10_tipsWindow").css({ "left": (helpIconX - $(".pk10_tipsWindow").width() / 2) + 5 + "px", "top": (helpIconY + $(this).height() + 8) + "px" });
            $(".pk10_tipsWindow").stop().fadeIn(100);
        },
        function () {
            $(".pk10_tipsWindow").stop().fadeOut(100);
        }
    );
    $("#countdown_sound").unbind("click");
    $("#countdown_sound").bind("click", function () {
        if ($(this).hasClass("close")) {
            setCookie("plan_countdown_sound", "1", 24 * 60);
        } else {
            setCookie("plan_countdown_sound", "0", 24 * 60);
        }
        checkSound();
    });
})



//封盘倒计时
var warnTime = "";
var warnCount = 6;
var tempCount = 0;
var cpNumber = -1;
var countDownTimer = null;
function showCountDown(afterTime, period, planState) {
    timeold = afterTime;

    sectimeold = timeold / 1000;
    secondsold = Math.floor(sectimeold);

    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold = Math.floor((e_hrsold - hrsold) * 60);
    seconds = Math.floor((e_minsold - minsold) * 60);
    if (daysold < 0) {
        daysold = 0;
        hrsold = 0;
        minsold = 0;
        seconds = 0;
    }

    if (seconds == 0 && minsold == 0 && hrsold == 0) {
        window.clearInterval(countDownTimer);
    }
    if (planState == "0") {
        if (minsold == 0 && hrsold == 0 && seconds < 31) {
            if (!$(".pk10_greenTime").hasClass("pk10_redTime")) {
                $(".pk10_greenTime").addClass("pk10_redTime");
            }
            if (seconds == 30) { doPlay(); }
        } else {
            if ($(".pk10_greenTime").hasClass("pk10_redTime")) {
                $(".pk10_greenTime").removeClass("pk10_redTime");
            }
        }
    }
    if (planState == "1") {
        if (hrsold < 10) {
            hrsold = "0" + hrsold;
        }
        if (minsold < 10) {
            minsold = "0" + minsold;
        }
        $(".pk10_greenTime").removeClass("pk10_redTime");

        $("#plan_hour").html(hrsold);
        $("#plan_minute").html(minsold);

        if (hrsold <= 0 && minsold <= 0 && seconds > 0) {
            var hh = parseInt(minsold) + parseInt(hrsold * 60);
            if (hh < 10) {
                hh = "0" + hh;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var obj = $("#plan_hour").parent().find("i");
            obj.eq(0).text(hh);
            obj.eq(1).text("分");
            obj.eq(2).text(seconds);
            obj.eq(3).text("秒");
        }

    } else {
        var hh = parseInt(minsold) + parseInt(hrsold * 60);
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("#minute").html(hh);
        $("#second").html(seconds);
    }

    if (cpNumber == -1 && cpNumber != period) {
        cpNumber = period;
    }
}

function doPlay() {
    tempCount++;
    try {
        if (checkSound()) {
            var bg = $('#duSound');
            if (bg[0].load) {
                bg[0].load();
                bg[0].play();
            } else {
                if (bg.length) bg.remove();
                bg = document.createElement('bgsound');
                bg.id = "duSound";
                bg.src = '/images/du.mp3';
                bg.loop = 1;
                $(bg).appendTo(document.body);
            }
        }
    } catch (e) { };
    if (tempCount < warnCount) {
        window.setTimeout("doPlay()", 1000);
    }
    else {
        tempCount = 0;
    }
}

function parseToDate(time) {
    var r = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/g;
    var e = r.exec(time);
    if (e != null) {
        return new Date(e[1], e[2], e[3], e[4], e[5], e[6]);
    } else {
        return null;
    }
}

function checkSound() {
    if ($.cookie("plan_countdown_sound") != "0") {
        openSound();
        return true;
    } else {
        closeSound();
        return false;
    }
}
function setCookie(name, value, minute) {
    var exp = new Date();
    exp.setTime(exp.getTime() + minute * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString(); //domain=localhost;
}

function openSound() {
    $("#countdown_sound").removeClass("close").attr("title", "点击关闭提醒声音");
}
function closeSound() {
    $("#countdown_sound").addClass("close").attr("title", "点击开启提醒声音");
}