$(document).ready(function () {

    //彩票大厅一级导航
    $("#cpdt").mouseenter(function () {
        var temp = $(this)

        $("#cpdtshow i").removeAttr("class").addClass("web_colorSpeedUpJt");
        $("#cpdt_showdiv .web_colorSpeedSelectBlock_light").fadeIn(300);

        $("#cpdt_showdiv").mouseleave(function () {
            $("#cpdtshow i").removeAttr("class").addClass("web_colorSpeedDownJt");
            $("#cpdt_showdiv .web_colorSpeedSelectBlock_light").fadeOut(300);
        })

    });

    //彩票大厅二级导航
    $(".lot-menu li").mouseenter(function () {

        if ($(this).find("i").hasClass("web_colorSpeedDownJtIcon2")) {
            $(this).find("i").removeAttr("class")
            $(this).find("i").addClass("web_colorSpeedDownJtIcon");
        }
        $(this).find(".web_colorSpeedDownJtIcon").removeAttr("class").addClass("web_colorSpeedUpJtIcon");
        $(this).find("a").addClass("hover");
        $(this).find(".lot-menu-list").fadeIn(300);

        $(this).mouseleave(function () {

            if ($(this).find("a").hasClass("cur")) {
                if ($(this).hasClass("web_colorSpeedUpJtIcon")) {

                    $(this).find("i").removeAttr("class").addClass("web_colorSpeedDownJtIcon");
                } else {

                    $(this).find("i").removeAttr("class").addClass("web_colorSpeedUpJtIcon web_colorSpeedDownJtIcon2");
                }

            } else {
                $(this).find("i").removeAttr("class").addClass("web_colorSpeedDownJtIcon");
            }

            $(this).find("a").removeClass("hover");
            $(this).find(".lot-menu-list").fadeOut(300);
        })
    })


    //推荐计划
    $("#plan").mouseenter(function () {
        var temp = $(this)

        $("#planshow i").removeAttr("class").addClass("web_colorSpeedUpJt");
        $("#plan_show .web_colorSpeedSelectBlock_light").fadeIn(300);

        $("#plan_show").mouseleave(function () {
            $("#planshow i").removeAttr("class").addClass("web_colorSpeedDownJt");
            $("#plan_show .web_colorSpeedSelectBlock_light").fadeOut(300);
        })
    });

    checkPlanState();

    $("#navklc,#navmore").mouseenter(function () {
        $(this).find(".twoMenu").show();
        $(this).find("i").attr("class", "web_colorSpeedUpJt");
        $($(this).find(".soft")).addClass("cur");
        $(this).mouseleave(function () {
            $(this).find(".twoMenu").hide();
            $($(this).find(".soft")).removeClass("cur");
            $(this).find("i").attr("class", "web_colorSpeedDownJt");
        });
    });

    $("#floatShow").bind("click", function () {
        $('#onlineService').animate({ width: 'show', opacity: 'show' }, 'normal', function () { $('#onlineService').show(); }); $('#floatShow').attr('style', 'display:none'); $('#floatHide').attr('style', 'display:block');
        return false;
    });
    $("#floatHide").bind("click", function () {
        $('#onlineService').animate({ width: 'hide', opacity: 'hide' }, 'normal', function () { $('#onlineService').hide(); }); $('#floatShow').attr('style', 'display:block'); $('#floatHide').attr('style', 'display:none');
    });
    $(document).bind("click", function (event) {
        if ($(event.target).isChildOf("#online_qq_layer") == false) {
            $('#onlineService').animate({ width: 'hide', opacity: 'hide' }, 'normal', function () { $('#onlineService').hide(); }); $('#floatShow').attr('style', 'display:block'); $('#floatHide').attr('style', 'display:none');
        }
    });
    jQuery.fn.isChildAndSelfOf = function (b) {
        return (this.closest(b).length > 0);
    };
    jQuery.fn.isChildOf = function (b) {
        return (this.parents(b).length > 0);
    };
    $(".lot-items").hover(function () {
        $(this).find(".vertical-line").css("display", "none");
        $(".items-cont").css("display", "block");
    }, function () {
        $(this).find(".vertical-line").css("display", "block");
        $(".items-cont").css("display", "none");
    });
    $(".items-cont").hover(function () {
        $(".lot-item").addClass("lot-item-hover");
        $(".lot-item b").addClass("b-hover");
    }, function () {
        $(".lot-item").removeClass("lot-item-hover");
        $(".lot-item b").removeClass("b-hover");
    });
    $("#bookmarkli").hover(function () {
        if ($("#inbox li").length > 0)
            $("#inbox").stop(true, true).slideDown(0);
    }, function () {
        $("#inbox").stop(true, true).slideUp(150);
    });
    $("#inbox").hover(function () {
        $("#bookmarkli b").addClass("b-hover");
        $("#bookmarkli a").addClass("bookmarkli-hover");
    }, function () {
        $("#bookmarkli b").removeClass("b-hover");
        $("#bookmarkli a").removeClass("bookmarkli-hover");
    });
    $('#logout').click(function () {
        if (confirm('是否确认要退出？')) {
            self.location.href = "/home/logout";
        }
        return true;
    });

    var utm = getQueryString("utm");
    utm = utm ? "utm=" + utm : "";
    if (utm.length > 0) {
        var allink = $("a[href]");
        for (var i = allink.length - 1; i > -1; i--) {
            var href = $(allink[i]).attr("href");
            if (href.indexOf("javascript") == -1 && href.indexOf("utm=") == -1) {
                if (href.indexOf("?") == -1) {
                    $(allink[i]).attr("href", href + "?" + utm);
                } else {
                    $(allink[i]).attr("href", href + "&" + utm);
                }
            }
        }
    }

    var clickTimes = $.cookie("click_times");
    clickTimes = clickTimes ? parseInt(clickTimes) + 1 : 1;
    document.cookie = "click_times=" + clickTimes + ";path=/";

});
function changePlanState(code,state)
{
    if (1 == state) {
        $("#" + code + "_NewIcon").removeClass("web370_colorSpeedUnderway");
    } else {
        $("#" + code + "_NewIcon").addClass("web370_colorSpeedUnderway");
    }
}
function checkPlanState() {
    $.get('/home/planstate', { r: Math.random() }, function (data) {
        if (data != null && data.length == 4) {
            var cqssc = data[0];
            var pk10 = data[1];
            var xyft = data[2];
            var xjssc = data[3];
            //web370_colorSpeedUnderway
            changePlanState("cqssc", cqssc);
            changePlanState("pk10", pk10);
            changePlanState("xyft", xyft);
            changePlanState("xjssc", xjssc);
        }
    }, "json");
}

function addFavorite(sUrl, sTitle) {
    try {
        window.external.addFavorite(sUrl, sTitle);
    } catch (e) {
        try {
            window.external.addToFavoritesBar(sUrl, sTitle);
        } catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sUrl, "");
            }
            catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
}
var member = {};
member.userLogined = false;
member.id = 0;
if (document.cookie.match(new RegExp("(^| )HJMK=([^;]*)(;|$)")) != null) {
    $.post('/sso/ticket', null, function (data) {
        if (data) {
            $('#mname').text(data.name);
            $('#signin').show();
            $('#unsignin').hide();
            GetBookMarkUrl();
            member.userLogined = true;
            member.id = data.id;
            if (typeof lotMenu != 'undefined') {
                var menu_set = $.cookie(member.id + lotMenu);
                if (menu_set) {
                    resetMenuPosition(menu_set.split("|"));
                }
            }
            $("#online_feedback_unlogin").hide();
            $("#online_feedback_login").show();
        } else {
            $('#unsignin').show();
            $('#signin').hide();

            $("#online_feedback_unlogin").show();
            $("#online_feedback_login").hide();

            if (IsMobile()) {
                $("#login_a_btn").attr("href", "/sso/login");
            } else {
                $("#login_a_btn").attr("href", "#");
                $("#login_a_btn").attr("target", "_self");
                loadJs("http://rescsj.56hx.com/mc/js/loginframe.js?id=login_a_btn");
            }
        }
    }, 'json');
}
function GetBookMarkUrl() {
    $.post('/home/getbookmarkurl', null, function (data) {
        if (data) {
            if (data.success == true) {
                var htmlUrl = "";
                for (var i = 0; i < data.bookMarkUrl.length; i++) {
                    htmlUrl = htmlUrl + "<li><a href='" + data.bookMarkUrl[i].url + "' target='_blank'>" + data.bookMarkUrl[i].name + "</a></li>";
                }
                $("#inbox").html(htmlUrl);
            }
        }
    });
}
String.prototype.replaceWith = function (d) {
    return this.replace(/\{\$(\w+)\}/g, function (a, c) {
        if (c in d) {
            return d[c];
        }
        else {
            return a;
        }
    });
};

function loadJs(src, callback) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    if (typeof callback == "function") {
        s.onreadystatechange = function () {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                callback();
                s.onreadystatechange = null
            }
        };
        s.onload = K
    }
    document.body.appendChild(s)
}

function IsMobile() {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        try {
            if (/Android|Windows Phone|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
            }
        } catch (e) {
        }
        return true;
    } else {
        return false;
    }
}



/**
* 使用举例：
//注： 写入时，subName参数请传递空值或null
//写入Cookies-值为字符串，即不包含子键
$.cookie("singleKey", "", "singleKey-value", { expires: 1, path: "/", secure: false })
//读取Cookies-根据主键
alert("singleKey:" + $.cookie("singleKey"));

//写入Cookies-值为对象，则每个属性名为子键的名称，属性值为子键值
var subNameObj = { subName1: "aaa", subName2: "bbb", subName3: "ccc" };
$.cookie("multiKey", "", subNameObj, { expires: 1, path: "/", secure: false });
//读取Cookies-根据主键
alert("multiKey:" + $.cookie("multiKey"));
//读取Cookies-根据主键和子键
alert("multiKey,subName1:" + $.cookie("multiKey", "subName1"));
*/
jQuery.cookie = function (a, b, c, d) { var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s; if ("undefined" == typeof c) { if (m = null, document.cookie && "" != document.cookie) for (n = document.cookie.split(";"), o = 0; o < n.length; o++) if (p = jQuery.trim(n[o]), p.substring(0, a.length + 1) == a + "=") { if (m = decodeURIComponent(p.substring(a.length + 1)), "undefined" != typeof b && null != b && "" != b) for (q = m.toString().split("&"), r = 0; r < q.length; r++) { if (s = jQuery.trim(q[r]), s.substring(0, b.length + 1) == b + "=") { m = decodeURIComponent(s.substring(b.length + 1)); break } m = void 0 } break } return m } if (d = d || {}, null === c && (c = "", d.expires = -1), e = "", d.expires && ("number" == typeof d.expires || d.expires.toUTCString) && ("number" == typeof d.expires ? (f = new Date, f.setTime(f.getTime() + 1e3 * d.expires)) : f = d.expires, e = "; expires=" + f.toUTCString()), g = d.path ? "; path=" + d.path : ";path=/", h = d.domain ? "; domain=" + d.domain : "", i = d.secure ? "; secure" : "", "object" == typeof c) { j = 0, k = ""; for (l in c) j > 0 && (k += "&"), k += l + "=" + encodeURIComponent(c[l]), j++; c = k } else c = encodeURIComponent(c); document.cookie = [a, "=", c, e, g, h, i].join("") };

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/****************批量请求广告**********************/
Array.prototype.contains = function (item) {
    return RegExp(item).test(this);
};
function AddList(data) {
    if (data != null && data.length > 0) {
        var json = [];
        var adpos = [];
        var utm = getQueryString("utm");
        utm = utm ? "&utm=" + utm : "";
        for (var j = 0; j < data.length; j++) {
            json = data[j];
            if (json.data != null && json.data.length > 0) {
                //是否存在 广告横幅 分左右两块
                if ((adsplit.length > 0 && adsplit.split(",").contains(json.code) == true && adsplit.indexOf(json.code + "_") == -1) ||
                    json.code.indexOf("_lr") == json.code.length - 3 || json.code.indexOf("_leftright") == json.code.length - 10) {
                    for (var i = 0; i < json.data.length; i++) {
                        $("#" + json.code).append("<span style='float:" + (i % 2 == 1 ? "right" : "left") + "'>" + json.data[i] + "</span>");
                    }
                } else {
                    var adhtml = "";
                    for (var i = 0; i < json.data.length; i++) {
                        adhtml += json.data[i];
                    }
                    $("#" + json.code).html(adhtml);
                    if (json.code == "caishijie_index_banner") {
                        $('#caishijie_index_banner').slidesjs({
                            width: 470,
                            height: 190,
                            play: {
                                active: true,
                                auto: true,
                                interval: 6000
                            }
                        });
                    }
                }
                //左右漂浮广告

                if (leftright.length > 0) {
                    var arrAd = leftright.split(',');
                    var left = arrAd[0];
                    var right = arrAd[1];
                    var vhtml = "";
                    if (json.code == left) {
                        vhtml = "<div class=\"left-layer\">";
                    } else if (json.code == right) {
                        vhtml = "<div class=\"right-layer\">";
                    }
                    if (vhtml.length > 0) {
                        vhtml += "<div class=\"close\" title=\"关闭广告\">关闭</div>";
                        for (var i = 0; i < json.data.length; i++) {
                            vhtml += json.data[i];
                        }
                        $("#" + json.code).html(vhtml);
                    }
                }

                if (utm.length > 0) {
                    var adlink = $("#" + json.code + " a");
                    for (var i = adlink.length - 1; i > -1; i--) {
                        $(adlink[i]).attr("href", $(adlink[i]).attr("href") + utm)
                    }
                }
            }
        }


    }
}

(function ($) {
    $.auto_alert = function (options) {
        var dft = {
            paddingL: "50px",
            paddingR: "50px",
            paddingT: "30px",
            paddingB: "30px",
            fontSize: "14px",
            bgColor: "#67636e",
            fontColor: "#fff",
            cont: "成功"
        };
        var ops = $.extend(dft, options);
        var box = $("<div>").css({ "padding-left": ops.paddingL, "padding-right": ops.paddingR, "padding-top": ops.paddingT, "padding-bottom": ops.paddingB, "position": "fixed", "left": "50%", "top": "50%", "background-color": ops.bgColor, "color": ops.fontColor, "font-size": ops.fontSize, "z-index": 101 }).html(ops.cont).appendTo($("body"));
        box.css({ "margin-left": -(box.outerWidth(true) / 2), "margin-top": -box.outerHeight(true) / 2 });
        setTimeout(function () {
            box.remove();
        }, 1000);
    }
})(jQuery);