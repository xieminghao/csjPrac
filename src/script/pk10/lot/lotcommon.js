Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) { return false; }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
}

$(function () {
    var vlottery = $("#callFun").attr("lottery");

    $("#car-switch").click(function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            $(".checkBlock").slideDown(300);
            SetCookieTip(vlottery + "_tip_car", 1, 30);
        } else {
            $("b", $(this)).removeClass("checked");
            $(".checkBlock").slideUp(300);
            SetCookieTip(vlottery + "_tip_car", 0, 30);

            if (typeof clearChk != 'undefined' && clearChk instanceof Function) {
                clearChk();
            }

            if (typeof clearBsoeChk != 'undefined' && clearBsoeChk instanceof Function) {
                clearBsoeChk();
            }

            if (typeof clearDuiziChk != 'undefined' && clearDuiziChk instanceof Function) {
                clearDuiziChk();
            }
        }
    });
    $("#num-switch").click(function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            $(".checkBlock").slideDown(300);
            SetCookieTip(vlottery + "_tip_num", 1, 30);
        } else {
            $("b", $(this)).removeClass("checked");
            $(".checkBlock").slideUp(300);
            SetCookieTip(vlottery + "_tip_num", 0, 30);
            if (typeof clearChk != 'undefined' && clearChk instanceof Function) {
                clearChk();
            }

            if (typeof clearBsoeChk != 'undefined' && clearBsoeChk instanceof Function) {
                clearBsoeChk();
            }
        }
    });

    $("#changlong-switch").bind("click", function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            SetCookieTip(vlottery + "_tip_changlong", 1, 30);

            $("#changlong_warn").slideDown(800);
        } else {
            SetCookieTip(vlottery + "_tip_changlong", 0, 301);

            $("b", $(this)).removeClass("checked");
            $("#changlong_warn").slideUp(800);
        }

    });
    $("#twoball-switch").bind("click", function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            SetCookieTip(vlottery + "_tip_twoball", 1, 30);
            $("#twoball_remind").slideDown(800);
            reloadTwoBallRemind();
        } else {
            SetCookieTip(vlottery + "_tip_twoball", 0, 30);
            $("b", $(this)).removeClass("checked");
            $("#twoball_remind").slideUp(800);
        }

    });
    $("#ballstat-switch").bind("click", function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            $("#ballstat_remind").slideDown(800);
            SetCookieTip(vlottery + "_tip_ballstat", 1, 30);

            reloadBallStatRemind();
        } else {

            SetCookieTip(vlottery + "_tip_ballstat", 0, 30);

            $("b", $(this)).removeClass("checked");
            $("#ballstat_remind").slideUp(800);
        }

    });
    $("#numstat-switch").bind("click", function () {
        if ($("b", $(this)).attr("class") == "checkbox") {
            $("b", $(this)).addClass("checked");
            $("#numstat_remind").slideDown(800);
            SetCookieTip(vlottery + "_tip_numstat", 1, 30);
            reloadNumberStatRemind();
        } else {
            SetCookieTip(vlottery + "_tip_numstat", 0, 30);
            $("b", $(this)).removeClass("checked");
            $("#numstat_remind").slideUp(800);
        }

    });

    $(".history_gg .closegg").bind("click", function () {
        $(this).parent().parent().remove();
    });

    $(".left-layer .close").click(function () {
        $(".left-layer").parent().remove();
    });
    $(".right-layer .close").click(function () {
        $(".right-layer").parent().remove();
    });

    var soundswitch = $.cookie("countdown_sound");
    //关闭声音
    if (soundswitch == "0") {
        closeSound();
    }
    $("#countdown_sound").bind("click", function () {
        if ($("#countdown_sound").attr("class") == "sound") {
            closeSound();
            $.cookie("countdown_sound", "", "0", { expires: 3600 * 24 * 30, path: "/", secure: false });
        } else {
            openSound();
            $.cookie("countdown_sound", "", "1", { expires: 3600 * 24 * 30, path: "/", secure: false });
        }
    });


    if (lotteryLuzhu) {
        function loadLuZhuBallCookie() {
            var cookieCur = $.cookie(lotteryLuzhu);
            var bsoeCookie = typeof lotteryLuzhu_bsoe != 'undefined' ? $.cookie(lotteryLuzhu_bsoe) : null;
            //路珠和
            var lzheCookie = typeof lotteryLuzhu_he != 'undefined' ? $.cookie(lotteryLuzhu_he) : null;
            if (cookieCur) {
                var ss = cookieCur.split(',');
                $(".lot-number-omit .ball ul[class!='bsoe_only'] li b.checkbox").removeClass("checked");
                for (var i = 0; i < ss.length; i++) {
                    $(".lot-number-omit .ball ul li b.checkbox[data-c=" + ss[i] + "]").addClass("checked");
                }
            }
            if (bsoeCookie) {
                $(".lot-number-omit .ball .bsoe_only li b.checkbox[data-c=" + bsoeCookie + "]").addClass("checked");
            }
            if (lzheCookie == null || lzheCookie == "" || lzheCookie == "1") {
                $("#chkluz_he").addClass("checked");
            }
            if (cookieCur || bsoeCookie) {
                changeLuZhuBall();
            }

        }
        $(".lot-number-omit .ball .all-ball").click(function () {
            $(".lot-number-omit .ball ul[class!='bsoe_only'] li b.checkbox").addClass("checked");
            $.cookie(lotteryLuzhu, "", "", { expires: -1, path: "/" });
            if (typeof lotteryLuzhu_he != 'undefined') {

                //路珠和
                SetCookieTip(lotteryLuzhu_he, 1, 30);
                LuzhuHeLoad(lotteryId);
            }

            changeLuZhuBall();
        });

        $(".lot-number-omit .ball .clear-ball").click(function () {
            $(".lot-number-omit .ball ul[class!='bsoe_only'] li b.checkbox").removeClass("checked");
            //路珠和
            var lzheCookie = typeof lotteryLuzhu_he != 'undefined' ? $.cookie(lotteryLuzhu_he) : null;

            if (typeof lotteryLuzhu_he != 'undefined' && (lzheCookie == null || lzheCookie == "" || lzheCookie == "1")) {
                SetCookieTip(lotteryLuzhu_he, 0, 30);
                LuzhuHeLoad(lotteryId);
            }
        });

        $(".lot-number-omit .ball .bsoe_only li").click(function () {

            if ($("b", $(this)).attr("class") == "checkbox") {
                $(".lot-number-omit .ball .bsoe_only li b.checkbox").removeClass("checked");
                $("b", $(this)).addClass("checked");
                $.cookie(lotteryLuzhu_bsoe, "", $("b", $(this)).attr("data-c"), { expires: 3600 * 24 * 30, path: "/" });
            } else {
                $("b", $(this)).removeClass("checked");
                $.cookie(lotteryLuzhu_bsoe, "", "", { expires: -1, path: "/" });
            }
            changeLuZhuBall();
        });

        $(".lot-number-omit .ball ul[class!=bsoe_only] li").click(function () {
            var c = $("b", $(this)).attr("data-c");
            if ($("b", $(this)).attr("class") == "checkbox") {
                $("b", $(this)).addClass("checked");
            } else {
                $("b", $(this)).removeClass("checked");
            }
            var datas = [];
            var ckbeds = $(".lot-number-omit .ball ul[class!=bsoe_only] li b.checked");
            for (var i = 0; i < ckbeds.length; i++) {
                datas.push($(ckbeds[i]).attr("data-c"));
            }

            if (datas.length > 0) {
                $.cookie(lotteryLuzhu, "", datas.join(","), { expires: 3600 * 24 * 30, path: "/" });
                changeLuZhuBall();
            }

            setLuzhuScroll();
        })

        loadLuZhuBallCookie();
    }


    if (typeof avalon != 'undefined' && avalon instanceof Function) {
        avalon.config({ debug: false });
    }
    //用户使用说明
    $(".InstructionsForUse_btn").live("click", function (e) {

        $(this).toggleClass("ForUse_hover");

        if ($(this).hasClass("ForUse_hover")) {
            $(".position").fadeIn(100);
        } else {

            $(".position").fadeOut(100);
        }

    });

    $(".kaiJianCopyBtn").on("click", function () {
        $("#smallHistory").show();
    });

    $("#smallHistory .close_hiswin").on("click", function () {
        $("#smallHistory").hide();
    });
});

function setLuzhuScroll() {
    var luzhuscroll = $(".luzhu_scroll:visible");
    for (var i = 0; i < luzhuscroll.length; i++) {
        $(luzhuscroll[i]).scrollLeft($($(".roadmap-table")[i]).width());
    }
}

//设置cookie 封装
function SetCookieTip(key, obj, day) {
    var time = new Date();
    time.setDate(time.getDate() + day);
    $.cookie(key, "", obj, { expires: time, path: "/", secure: false });
}

function openSound() {
    $("#countdown_sound").removeClass("close").attr("title", "点击关闭提醒声音");
}
function closeSound() {
    $("#countdown_sound").addClass("close").attr("title", "点击开启提醒声音");
}

function changeLuZhuBall() {

    var ckbeds = $(".lot-number-omit .ball ul[class!='bsoe_only'] li b.checked");
    var ckbsoe = $(".lot-number-omit .ball .bsoe_only li b.checked");

    if (ckbeds.length <= 0) return;
    $(".luzhu").hide();
    for (var i = 0; i < ckbeds.length; i++) {
        if ($(ckbeds[i]).attr("id") != "chkluz_he") {
            $(".t_" + $(ckbeds[i]).attr("data-c")).show();
        }
    }

    if (ckbsoe.length > 0) {
        $("." + $(ckbsoe[0]).attr("data-c")).hide();
    }

}

function Glitter() {
    var i = 0;
    var result = $(".roadmap-table tr:visible").find("td[class]:last").find("p:last,label:last,span:last");
    result.css("font-weight", "bold");

    var timeOutId = setTimeout(function () {
        result.css("font-weight", i % 2 == 0 ? "normal" : "bolder");
        i++;
        if (i == 1) {
            timeOutId = setInterval(arguments.callee, 300);
        }
        if (i == 40) {
            window.clearInterval(timeOutId);
        }
    }, 500);
};

function luzhuFirstShow(numOfPeriod, timeOfPeriod) {
    if (numOfPeriod != -1 && timeOfPeriod != -1 && numOfPeriod == timeOfPeriod) {
        $(".roadmap-table tr:visible").find("td[class]:last").find("p:last,label:last,span:last").css("font-weight", "bold");
    }
}

//2016 春节假期休市 提示信息
function stopAwardHappyYear(time) {
    var d = new Date(time);
    var day = d.getDate();
    if (d.getFullYear() == 2016 && (d.getMonth() + 1) == 2 && day >= 7 && day <= 13) {

        var warmDiv = $("#warn_tips");
        if (warmDiv.length > 0) {
            warmDiv.hide();
        }
        var stopDiv = $("#stop_warn_tips");
        if (stopDiv.length > 0) {
            stopDiv.show();
        }
        else {
            $(".lot-award").after("<div id=\"stop_warn_tips\">温馨提示：尊敬的用户，根据国家财政部公告，2月7日0：00至2月13日24：00期间所有国家数字彩与高频彩彩票停止销售与开奖，敬请知悉。</div>");
            $("#stop_warn_tips").show();
        }
    }
}

//11选5 路珠和 用
function LuzhuHeLoad(lotteryId) {
    var code = "gd11x5";
    if (13 == lotteryId) {
        code = "syydj";
    } else if (14 == lotteryId) {
        code = "jx11x5";
    }
    $('#lot_content').css({ "width": "100%" });
    var vhtml = "";
    vhtml += "<div style='margin:0 auto; width:100%;height:100%; color:#FFF; position:absolute; top:240px; z-index:11;left:0px;'>数据正在加载中...</div>";
    vhtml += "<div class='loaddingBg'></div>";
    $('#lot_content').css("position", "relative").append(vhtml);
    $.get("/" + code + "/luzhubigorsmall?t=" + Math.random() + "&date=" + $("#dateData").val(), null, function (text) {
        $('#lot_content').html(text);
        $('#lot_content').css("position", "");
    });
}

//路珠和 复选框 调用函数
function loadLuzhuhe(obj, lotteryId) {
    if (!obj.hasClass("checked")) {
        $(".lot-number-omit .ball ul[class!='bsoe_only'] li b.checkbox").eq(0).addClass("checked");
        SetCookieTip(lotteryLuzhu_he, 1, 30);
    } else {
        SetCookieTip(lotteryLuzhu_he, 0, 30);
    }
    LuzhuHeLoad(lotteryId);
}
//彩种数据请求提示
var warnTxt = '<div id="warn_tips" >温馨提示：<span id="warn_period"></span>期开奖结果未获取，继续等待自动更新或<a href="javascript:window.location.reload();">手动刷新</a></div>';
var warnShow = '';
//显示提示
function showLotPeriodNumWarn(period) {
    var warmDiv = $("#warn_tips");
    if (warmDiv.length > 0) warmDiv.show();
    else {
        $(".lot-award").after(warnTxt);
    }
    $("#warn_period").text(period);
    GlitterPanel();
}
//边框变色提醒
function GlitterPanel() {
    if (warnShow == "") {
        warnShow = 'show';
        setTimeout(function () {
            var warnTips = $("#warn_tips");
            if (warnTips.hasClass("warn_red")) {
                warnTips.css("border-color", "red");
                warnTips.removeClass("warn_red");
            }
            else {
                warnTips.css("border-color", "#FED22F");
                warnTips.addClass("warn_red");
            }
            setTimeout(arguments.callee, 600);
        }, 1000);
    }
}
//关闭提示
function hideLotPeriodNumWarn() {
    var warmDiv = $("#warn_tips");
    if (warmDiv) warmDiv.hide();
}
function getCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return "";
}
function setCookie(name, value, minute) {
    var exp = new Date();
    exp.setTime(exp.getTime() + minute * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString(); //domain=localhost;
}



/**       
 * 对Date的扩展，将 Date 转化为指定格式的String       
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符       
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)       
 * eg:       
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423       
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04       
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04       
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04       
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18       
 */
Date.prototype.pattern = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份           
        "d+": this.getDate(), //日           
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时           
        "H+": this.getHours(), //小时           
        "m+": this.getMinutes(), //分           
        "s+": this.getSeconds(), //秒           
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度           
        "S": this.getMilliseconds() //毫秒           
    };
    var week = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}



$("#ball-choose b[class!=inputBtn]").click(function () {

    var c = $(this).attr("data-c");

    if ($(this).attr("class") == "newCheckBox") {
        $(this).addClass("true");
    } else {
        $(this).removeClass("true");
    }
    if (typeof showNum != 'undefined' && showNum instanceof Function) {
        showNum();
    }
});
$("#bsoe-choose b[class!=inputBtn][id!='duizi']").click(function () {
    var c = $(this).attr("data-c");
    var g = $(this).attr("data-g");
    if (c) {
        if ($(this).attr("class").indexOf("true") < 0) {
            $("#bsoe-choose b[data-g=" + g + "]").removeClass("true");
            $(this).addClass("true");
        } else {
            $(this).removeClass("true");
        }

        if (typeof showNum != 'undefined' && showNum instanceof Function) {
            showNum();
        }
    }
});
function clearChk(noaction) {
    $("#ball-choose b").removeClass("true");
    if (typeof noaction == 'undefined')
        showNum();
}
function clearBsoeChk() {
    $("#bsoe-choose b[id!=duizi]").removeClass("true");
    if (typeof noaction == 'undefined')
        showNum();
}

/* 表格排序 */
//比较函数的参数函数
var compare_up = function (a, b) {
    return a - b;
}

var compare_down = function (a, b) {
    return b - a;
}

function guanyaSort(obj, index, up) {
    $(".web_Sortk .btn").removeClass("btnUp").removeClass("btnDown");
    $(obj).parent().addClass(up == 1 ? "btnUp" : "btnDown");
    sortTable(".lot-table", index, up);
}

function sortTable(table, index, up) {
    var arr = [];
    var _trs = $(table + " tbody tr");
    _trs.each(function () {
        var num = ~~$(this).children("td:eq(" + index + ")").text();
        if ($.inArray(num, arr) < 0)
            arr.push(num);
    });
    arr.sort(up == 1 ? compare_up : compare_down);
    $(table + " tbody").html("");
    for (var i = 0; i < arr.length; i++) {
        _trs.each(function () {
            var num = ~~$(this).children("td:eq(" + index + ")").text();
            if (num == arr[i])
                $(table + " tbody").append($(this));
        });
    }
}
/* 表格排序 End */

function getElementsByClassName(className, root, tagName) {    //root：父节点，tagName：该节点的标签名。 这两个参数均可有可无
    if (root) {
        root = typeof root == "string" ? document.getElementById(root) : root;
    } else {
        root = document.body;
    }
    tagName = tagName || "*";
    if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用
        return root.getElementsByClassName(className);
    } else {
        var tag = root.getElementsByTagName(tagName);    //获取指定元素
        var tagAll = [];                                    //用于存储符合条件的元素
        for (var i = 0; i < tag.length; i++) {                //遍历获得的元素
            for (var j = 0, n = tag[i].className.split(' ') ; j < n.length; j++) {    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
                if (n[j] == className) {
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}
