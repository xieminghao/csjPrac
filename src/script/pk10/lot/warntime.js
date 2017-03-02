//封盘倒计时
var warnTime = "";
var warnCount = 6;
var tempCount = 0;
var cpNumber = -1;
var countDownTimer = null;

function showCountDown(afterTime, period, lotterycode) {
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
        $(".currentAward .period").css("color", "#C3271D");
        $(".lot-nums").html("<p>等待开奖...<p>");
        $(".currentAward .period").html(period + " 期");

        $(".roadmap-table tr").find("td[class]:last").find("p:last,label:last,span:last").css("font-weight", "normal");
        window.clearInterval(countDownTimer);
    }

    if (lotterycode != undefined && ("fc3d" == lotterycode || "pl3" == lotterycode)) {
        if (minsold == 0 && hrsold == 0 && seconds < 31) {
            $(".hourminutesecond").addClass("red-bg_hour");
            $(".warnTime #period").css("color", "#C3271D");
            if (seconds == 30) { doPlay(); }
        }
        else {
            $(".hourminutesecond").removeClass("red-bg_hour");
            $(".warnTime #period").css("color", "green");
        }
        var hour = parseInt(hrsold);
        if (hour < 10) {
            hour = "0" + hour;
        }
        var hh = parseInt(minsold);
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (daysold > 0) {
            hour = parseInt(hour)+ parseInt(daysold) * 24;
            $(".warnTime .hourminutesecond").html(hour + ":" + hh + ":" + seconds);
        } else {
            $(".warnTime .hourminutesecond").html(hour + ":" + hh + ":" + seconds);
        }
    } else {
        if (minsold == 0 && hrsold == 0 && seconds < 31) {
            $(".minute,.second").addClass("red-bg");
            $(".warnTime #period").css("color", "#C3271D");
            if (seconds == 30) { doPlay(); }
        }
        else {
            $(".minute,.second").removeClass("red-bg");
            $(".warnTime #period").css("color", "green");
        }
        var hh = parseInt(minsold) + parseInt(hrsold * 60);
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".warnTime .minute").html(hh);
        $(".warnTime .second").html(seconds);
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
                bg.src = '/res/themes/images/du.mp3';
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
    if ($.cookie("countdown_sound") != "0") {
        openSound();
        return true;
    } else {
        closeSound();
        return false;
    }
}