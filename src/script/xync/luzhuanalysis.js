// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'xync_memu';
var lotteryLuzhu = "";
var lzCookieName = "";
function formatRoadmap(idx, roadmap, options) {
    var html = '<table class="roadmap-table mb-15"><tr valign="top">';
    var roads = roadmap.split("|");
    for (var i = 0; i < roads.length; i++) {
        if (roads[i].length > 0) {
            var td = '<td class="' + (i % 2 == 0 ? 'even' : 'odd') + '">';
            for (var j = 0; j < roads[i].length; j++) {
                var r = roads[i].charAt(j);
                if (r == '单' || r == '大' || r == '龍' || r == '质')
                    td += '<span>' + r + '</span>';
                else if (r == "和")
                    td += '<p>' + r + '</p>';
                else
                    td += '<label>' + r + '</label>';
            }
            html += td;
        }
    }
    if (roads.length < 45) {
        for (var j = roads.length; j <= 45; j++) {
            html += '<td><span></span></td>';
        }
    }
    html += '</tr></table>';
    $("#tblist" + idx).html(html);

    var search = ' <span>搜索：连续出现</span><span><input type="text" maxlength="3" id="txtCount' + idx;
    search += '" onkeyup="this.value=this.value.replace(/\D/g,\'\')"';
    search += ' onafterpaste="this.value=this.value.replace(/\D/g,\'\')"';
    search += ' onpaste="return false" ondragenter="return false"';
    search += ' oncontextmenu="return false;" style="ime-mode: disabled"/></span><span>次</span>';
    search += '  <span><select id="sel' + idx + '"><option>' + options.charAt(0) + '</option><option>' + options.charAt(1) + '</option>';
    if (options.length > 2) {
        search += '<option>' + options.charAt(2) + '</option>';
    }
    search += '</select></span>';
    search += '<span><input id="btn' + idx + '" name="luzhusearch" type="button" value="确定" data-index="' + idx + '" class="luzhusearch" /></span>';
    search += '<span><label>出现的次数为：<b>0</b></label> </span>';
    $("#searchtd" + idx).html(search);


    var statformDiv = '<span class="cp_floatFont">设置形态</span><input type="hidden" class="h_luzhu_type" value="' + options + '"/>';
    statformDiv += '<span class="cp_numBlock cp_numIcon1 lzitem" opt-class="red">' + options.charAt(0) + '</span>';
    statformDiv += '<span class="cp_numBlock cp_numIcon2 lzitem" opt-class="blue">' + options.charAt(1) + '</span>';
    statformDiv += '<span class="cp_numBlock cp_numIcon3 lzrepeal"></span><span class="cp_numBlock cp_numIcon4 lzremove"></span>';
    statformDiv += '<span class="cp_borderWhite" ><b>最少需设置6个路珠</b></span>';
    statformDiv += '<span class="cp_selectBlock">';
    statformDiv += '<select><option value="1">今天</option><option value="2">最近2天</option><option value="3">最近3天</option></select></span>';
    statformDiv += '<span class="cp_tongjiBtn cp_tongjiBtn_disable" >统计</span>';
    statformDiv += '<span class="cp_floatFont2">出现过<b>--</b>次</span>';
    statformDiv += '<span class="cp_closeBtn"></span>';
    $("#luzhuform_" + idx).html(statformDiv);


}
function updatePickdate(dp) {
    var selDate = $("#dateData").val();
    if (dp.cal.date.d == (new Date()).getDate()) {
        reloadLuzhu(selDate, 0);
    } else {
        reloadLuzhu(selDate, 1);
    }
}
function clearedDate() {
    reloadLuzhu('', 0);
}

function reloadLuzhu(date, unload) {
    var url = location.pathname;
    var _container = $("#pageName").attr("container");
    $.get(url, { t: Math.random(), date: date }, function (text) {
        $('#' + _container).html(text);
        $("#pageName").attr("unload", unload);
    });
}

function gotoModeItem(mode, pos, type) {
    $(".mode-type a").removeClass("cur");
    $(".mode-type a[data-mode=" + mode + "]").addClass("cur");

    if (mode == 1) {
        $(".tiptool_info i.nda_checkbox[data-type=" + type + "]").addClass("nda_selected");
        $(".tiptool_info i.nda_checkbox[data-pos=" + pos + "]").addClass("nda_selected");
    }
    else if (mode == 2) {
        $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=2] a").removeClass("cur");
        $(".dcls_tool1[filter-mode*=2] a[data-type=" + type + "]").addClass("cur");
        $(".tiptool_info[filter-mode*=2] i[data-pos=" + pos + "]").addClass("nda_selected");
    } else if (mode == 3) {
        $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=3] a").removeClass("cur");
        $(".dcls_tool1[filter-mode*=3] a[data-pos=" + pos + "]").addClass("cur");
        $(".tiptool_info[filter-mode*=3] i[data-type=" + type + "]").addClass("nda_selected");
    }
    $(".dcls_tool1,.tiptool_info").hide();
    $(".dcls_tool1[filter-mode*=" + mode + "]").show();
    $(".tiptool_info[filter-mode*=" + mode + "]").show();

    setTimeout(function () {
        $("body,html").animate({ scrollTop: $(".luzhu[fg=" + pos + "][fi=" + type + "]").offset().top }, 100);
    }, 500);

}

function loadModeCookie(cookieName, mode) {
    $(".lot-number-omit2 .tiptool_info i[special!=1]").removeClass("nda_selected");
    $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=2] a").removeClass("cur");
    $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=3] a").removeClass("cur");

    var modeData = $.cookie(cookieName, "mode" + mode);
    var flag = false;
    if (modeData) {
        var datas = modeData.split(",");
        if (datas.length == 2) {
            var pos = datas[0].replace("p:", "").split("|");
            var type = datas[1].replace("t:", "").split("|");
            flag = true;
            if (mode == 2 && type.length == 1) {
                $(".dcls_tool1[filter-mode*=2] a[data-type=" + type[0] + "]").addClass("cur");
                for (var p = pos.length - 1; p > -1; p--) {
                    $(".tiptool_info[filter-mode*=2] i[data-pos=" + pos[p] + "]").addClass("nda_selected");
                }
            } else if (mode == 3 && pos.length == 1) {
                $(".dcls_tool1[filter-mode*=3] a[data-pos=" + pos[0] + "]").addClass("cur");
                for (var t = type.length - 1; t > -1; t--) {
                    $(".tiptool_info[filter-mode*=3] i[data-type=" + type[t] + "]").addClass("nda_selected");
                }
            } else if (mode == 1) {
                for (var t = type.length - 1; t > -1; t--) {
                    $(".tiptool_info i.nda_checkbox[data-type=" + type[t] + "]").addClass("nda_selected");
                }
                for (var p = pos.length - 1; p > -1; p--) {
                    $(".tiptool_info i.nda_checkbox[data-pos=" + pos[p] + "]").addClass("nda_selected");
                }
            }
            else {
                flag = false;
            }
        }
    }

    if (!flag) {
        defaultSetting();
    } else if (typeof specialSetting != 'undefined' && specialSetting instanceof Function) {
        specialSetting(mode);
    }

    $(".dcls_tool1,.tiptool_info").hide();
    $(".dcls_tool1[filter-mode*=" + mode + "]").show();
    $(".tiptool_info[filter-mode*=" + mode + "]").show();
}

function loadLZCookie(cookieName) {
    var mode = $.cookie(cookieName, "mode");
    if (!mode) {
        mode = 1;
    }
    $(".mode-type a[data-mode=" + mode + "]").addClass("cur");
    loadModeCookie(cookieName, mode);
}

function userSelectLZ() {
    $(".jsloading").hide();

    var mode = $(".mode-type a.cur").attr("data-mode");
    var userfilters = $(".tiptool_info[filter-mode*=" + mode + "] i[class*=nda_selected]");
    var filterPos = [];
    var filterTypes = [];
    if (mode == 2) {
        var ct = $(".dcls_tool1[filter-mode*=2] a[class=cur]");
        filterTypes.push(ct.attr("data-type"));
        checkChooseItem(ct);
        for (var i = userfilters.length - 1; i > -1; i--) {
            filterPos.push($(userfilters[i]).attr("data-pos"));
        }
    } else if (mode == 1) {
        for (var i = userfilters.length - 1; i > -1; i--) {
            var t = $(userfilters[i]).attr("data-type");
            if (t) {
                filterTypes.push(t);
            } else {
                filterPos.push($(userfilters[i]).attr("data-pos"));
            }
        }
        $(".lot-number-omit2 .tiptool_info i[special!=1]").show();
    } else if (mode == 3) {
        var cp = $(".dcls_tool1[filter-mode*=3] a[class=cur]");
        filterPos.push(cp.attr("data-pos"));
        checkChooseItem(cp);
        for (var i = userfilters.length - 1; i > -1; i--) {
            filterTypes.push($(userfilters[i]).attr("data-type"));
        }
    }

    $(".luzhu").hide();
    if (filterPos.length > 0 && filterTypes.length > 0) {
        for (var t = filterTypes.length - 1; t > -1; t--) {
            for (var p = filterPos.length - 1; p > -1; p--) {
                var lz = $(".luzhu[fg=" + filterPos[p] + "][fi=" + filterTypes[t] + "]");
                lz.show();
                lz.find(".luzhu_scroll").scrollLeft(lz.find(".roadmap-table").width());
            }
        }
    }
    var data = 'p:' + filterPos.join('|') + ',t:' + filterTypes.join('|');
    var cookiedata = { mode: mode };
    for (var c = 1; c <= 3; c++) {
        if (c == mode) {
            cookiedata['mode' + mode] = data;
        } else {
            var tmp = $.cookie(lzCookieName, "mode" + c);
            if (tmp) {
                cookiedata["mode" + c] = tmp;
            }
        }
    }
    $.cookie(lzCookieName, "", cookiedata, { expires: 3600 * 24 * 30, path: "/", secure: false });
}

function calc(all, luzhu) {
    var idx = all.indexOf(luzhu);
    if (idx < 0) return 0;
    var count = 0;
    while (idx > -1) {
        count += 1;
        all = all.substr(idx + luzhu.length - 2);
        idx = all.indexOf(luzhu);
    }
    return count;
}
function defaultSetting() {
    $(".lot-number-omit2 .tiptool_info i.nda_checkbox").addClass("nda_selected");
    $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=2] a:first").addClass("cur");
    $(".dailyChangLongStatistics .dcls_tool1[filter-mode*=3] a:first").addClass("cur");
}

function checkChooseItem(obj) {
    var type = obj.attr("data-type");
    if (type) {
        $(".lot-number-omit2 .tiptool_info i.nda_checkbox").show();
        if (type == "lh") {
            $(".lot-number-omit2 .tiptool_info i[filter-type*=lh]").hide();
        }
        if(type=="hsds"){
            $(".lot-number-omit2 .tiptool_info i[filter-type*=hsds]").hide();
        }
    } else {
        var pos = obj.attr("data-pos");
        $(".lot-number-omit2 .tiptool_info i.nda_checkbox").show();
        if ( pos == "d5" ||pos == "d6" || pos == "d7" || pos == "d8" || pos == "d11") {
            $(".lot-number-omit2 .tiptool_info i[data-type=lh]").hide();
            if(pos=="d11"){
                $(".lot-number-omit2 .tiptool_info i[data-type=hsds]").hide();
            }
        }
    }
}

function statLuzhuForm(luzhu,ball,type,day,container){

    $.get("/xync/Luzhuform",{"ball":ball,"type":type,"days":day},function(d){
        if(d&&d.luzhu){
            var result=d.luzhu;
            var len= calc(result,luzhu);
            container.text(len);
        }
    },'json');
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

        $(function () {
            $("#lot_content input[name='luzhusearch']").live("click", function () {
                var index = $(this).attr("data-index");
                var count = $("#txtCount" + index).val();
                var sel = $("#sel" + index + " option:selected").text();
                if (count.length <= 0) {
                    return;
                }
                $("#tblist" + index + " td").removeClass("searchbg");

                var _this = $(this);
                var child = null;
                var outcount = 0;
                $("#tblist" + index + " td").each(function () {
                    child = $(this).children();
                    if (child.length >= count && $(child.eq(0)).text() == sel) {
                        $(this).addClass("searchbg");
                        outcount++;
                    }
                });
                _this.parent().parent().find("b").text(outcount);
            });

            $(".lot-number-omit2 .tiptool_info i").click(function () {
                if ($(this).attr("class").indexOf("nda_selected") > -1) {
                    $(this).removeClass("nda_selected");
                } else {
                    $(this).addClass("nda_selected");
                }
                if ($(this).attr("special")) {
                    chooseSpecial($(this));
                } else
                    userSelectLZ();
            });


            $(".dailyChangLongStatistics .dcls_tool1 a").click(function () {
                $(this).parent().find("a").removeClass("cur");
                $(this).addClass("cur");
                checkChooseItem($(this));
                userSelectLZ();
            });


            $(".clearAll").click(function () {
                $(this).parent().find("i[special!=1]").removeClass("nda_selected");
                userSelectLZ();
            });
            $(".selectAll").click(function () {
                $(this).parent().find("i[special!=1]").addClass("nda_selected");
                userSelectLZ();
            });

            $(".mode-type a").click(function () {
                $(".mode-type a").removeClass("cur");
                $(this).addClass("cur");
                var mode = $(this).attr("data-mode");

                loadModeCookie(lzCookieName, mode);
                userSelectLZ();
            });

            $(".iconHelp").live("mouseenter", function () {
                $(".helpWindow").fadeIn(400);
            });

            $(".iconHelp").live("mouseleave", function () {
                $(".helpWindow").fadeOut(400);
            });

            $(".formstatbtn").live("click", function () {
                var idx = $(this).attr("data-index");
                var lzform = $("#luzhuform_" + idx);
                if (lzform.is(":hidden"))
                    lzform.show();
                else
                    lzform.hide();
            });

            $(".cp_closeBtn").live("click", function () {
                $(this).parent().hide();
            });

            $(".lzitem").live("click", function () {
                var container = $(this).parent().find(".cp_borderWhite");
                container.find('b').remove();
                var len = $(container).find("i").length;
                if (len >= 27) return;
                var txt = $(this).text();
                var types = $(this).parent().find(".h_luzhu_type").val();
                var type = types.charAt(0);
                if (types.charAt(0) == txt) {
                    type = types.charAt(1);
                }
                if (len == 0) {
                    container.append("<i>" + type + "</i>");
                } else {
                    container.find("i:last").remove();
                }
                container.append("<i class=" + $(this).attr("opt-class") + ">" + txt + "</i><i>" + type + "</i>");
                setBtnState($(container).find("i").length, $(this).parent());
            });

            $(".lzrepeal").live("click", function () {
                var container = $(this).parent().find(".cp_borderWhite");
                var len = $(container).find("i").length;
                if (len <= 0) return;
                if (len <=3) {
                    container.find("i").remove();
                    container.html("<b>最少需设置6个路珠</b>");
                }
                else {
                    container.find("i:last").remove();
                    container.find("i:last").remove();
                    var txt = container.find("i:last").text();
                    var types = $(this).parent().find(".h_luzhu_type").val();
                    var type = types.charAt(0);
                    if (types.charAt(0) == txt) {
                        type = types.charAt(1);
                    }
                    container.append("<i>" + type + "</i>");
                }
                setBtnState($(container).find("i").length, $(this).parent());
            });


            $(".lzremove").live("click", function () {
                var container = $(this).parent().find(".cp_borderWhite");
                container.find("i").remove();
                container.html("<b>最少需设置6个路珠</b>");
                setBtnState(0, $(this).parent());
            });

            $(".cp_tongjiBtn").live("click", function () {
                if ($(this).attr("class").indexOf("cp_tongjiBtn_disable") > 0) return;

                var ilist = $(this).parent().find(".cp_borderWhite").find("i");
                var txts = "";
                for (var i = 0; i < ilist.length; i++) {
                    txts += $(ilist[i]).text();
                }

                var parentDiv= $(this).parent().parent();
                var ball =parentDiv.attr("fg").replace("d","");
                var type = parentDiv.attr("fi");
                var day = $(this).parent().find("select").val();

                statLuzhuForm(txts, ball, type, day, $(this).next().find("b"));
                // $(this).next().find("b").text(" 统计中 ");
            });


            function setBtnState(count,obj) {
                if (count >= 8) {
                    obj.find(".cp_tongjiBtn").removeClass("cp_tongjiBtn_disable");
                } else {
                    obj.find(".cp_tongjiBtn").addClass("cp_tongjiBtn_disable");
                }
            }

            var helpWin = '<span class="helpWindow" style="display:none">';
            helpWin += '<span class="triangleBorder"  style="left:8px;"></span>';
            helpWin += '<span class="triangleBg" style="left:8px;"></span>';
            helpWin += '<span class="cons">统计您设置的<lable style="color:red;">路珠形态</lable>在选定的<lable style="color:red;">时间</lable>内出现的<lable style="color:red;">次数</lable></span></span>';
            $(helpWin).appendTo('body');
            $(document).on("mouseover", '.cp_helpIconButton', function () {
                var thisX = $(this).offset().left;
                var thisY = $(this).offset().top;
                $(".helpWindow").css({ "left": (thisX - 10) + "px", "top": (thisY - 50) + "px", "height": "40px" }).fadeIn(300);
            })

            $(document).on("mouseout", '.cp_helpIconButton', function () {
                $(".helpWindow").fadeOut(300, function () {
                    $(this).removeAttr('style');
                })
            })


        });
        formatRoadmap('1', '|大大|小小小小小|大|小|大大|小|大|小|大大|小|大|小小小小|大|小|大大|小小小|大大大大大大大大大大|小小|大|小小小|大|小|大|小小|大|小小小|大|小小小|大|小小小小|大|小|大大大大|小小小|大|小小|大大|小小|大|小小|大大大大大大大大|小小|大大|小小|大|小小小小小|大大大大大大大大大大|小|大大|小小|大大大大大大大大大|小|大大|小|大大|小小|大大大|小|大大大|小|大|小|大大|小|大|小小小|大大|小小小小小小小小小|大大大大|小|大|小小小小|大大大大|小|大|小|大大|小小小小|大大|小小|大|小|大大|小|大|小小小小|大大|小|大大|小小小小|大|小小|大大|小小小小小|大|小|大大|小|大|小|大大|小小|大|小小小|大|小|大大|小|大|小|大大大大|小小小小|大大大大大大大大大|小|大|小|大大大大大大|小小小小小|大|小|大|小|大大|小|大大|小小|大|小|大大|小小|大|小|大|小|大', '大小')
        formatRoadmap('2', '|单单单单|双双|单|双|单|双双|单|双双|单|双|单|双双双双双|单|双|单单单|双|单单|双双双|单单单|双双双双双|单单单|双双双|单单单|双双|单单单单|双|单|双|单|双|单|双|单|双|单|双双|单|双|单|双|单单单单单单单|双双|单|双|单|双|单|双双|单|双|单单|双双双双|单|双双双双|单|双|单单单|双|单|双双双|单|双双|单单单|双|单单|双|单单单|双双|单|双|单|双双双|单|双|单|双|单|双双|单单单单|双|单单单|双双双双双|单单单|双双双双|单单|双双|单单|双|单|双|单单|双双|单|双双双双|单单单单单|双|单|双双|单单|双|单|双|单单|双双双双双双双|单|双双|单单|双双|单单单|双双双双|单单单单单|双双|单单单|双双双|单|双|单|双双|单单单|双|单|双|单|双双双双双双双双双|单|双双|单单|双|单|双双双双|单单单单|双|单|双|单单单单', '单双')
        formatRoadmap('3', '|龍|虎虎虎虎|龍龍龍龍龍|虎|龍|虎虎虎虎虎虎虎|龍|虎|龍|虎|龍龍|虎虎|龍龍|虎虎|龍龍|虎|龍龍龍龍|虎虎虎虎虎|龍龍|虎|龍|虎|龍龍|虎虎|龍龍|虎|龍|虎虎虎|龍|虎虎|龍龍龍龍|虎|龍龍龍龍龍|虎虎虎|龍|虎虎|龍|虎虎虎|龍龍龍|虎|龍龍龍龍|虎|龍龍|虎|龍龍|虎虎虎虎虎|龍龍|虎|龍龍龍龍龍|虎|龍龍龍龍|虎虎|龍龍龍龍龍|虎|龍龍|虎虎|龍龍|虎|龍|虎虎虎|龍龍|虎|龍龍|虎|龍龍龍|虎|龍龍|虎|龍龍|虎|龍|虎虎虎虎虎虎|龍|虎|龍|虎虎|龍龍龍龍|虎虎虎虎|龍龍|虎|龍龍龍|虎|龍|虎|龍龍|虎虎虎虎|龍龍龍龍龍龍龍龍|虎|龍|虎|龍龍|虎|龍龍|虎|龍龍|虎虎虎|龍龍|虎虎|龍龍龍|虎虎虎虎|龍龍|虎|龍|虎|龍龍龍龍|虎虎|龍|虎虎|龍龍|虎|龍龍|虎虎虎|龍龍龍龍|虎虎虎|龍龍龍龍龍龍龍龍龍龍龍龍|虎|龍龍龍龍|虎|龍|虎|龍|虎虎虎|龍龍|虎虎|龍龍|虎|龍|虎虎|龍|虎虎虎|龍|虎虎虎虎|龍|虎|龍', '龍虎')
        formatRoadmap('4', '|大|小|大大大大|小小|大大大|小|大|小小|大大|小|大大|小小小|大大|小|大大|小|大|小小小小小小小|大大|小|大大|小|大|小小|大|小小小|大|小小|大大|小|大|小|大|小|大大|小|大大|小|大大|小小小小|大大|小小|大大|小|大|小|大|小|大|小小|大|小小小|大大|小小|大大大大大大|小小|大大|小小|大|小小|大大|小小|大大大|小|大|小|大|小小|大|小小|大大|小小|大|小|大|小|大|小|大大大大大大|小小小小|大|小小小小|大|小|大大|小小小小|大|小小小|大|小小|大大|小小小小|大大大大大大|小|大|小|大|小小|大大大|小|大|小小小小|大大大|小|大大|小|大|小小|大|小|大大|小小|大大|小|大|小小|大|小|大|小小小小小小|大大大|小|大|小|大大大|小|大|小|大大|小|大|小小小小|大|小|大', '大小')
        formatRoadmap('5', '|双双|单|双双双|单单单单单单单|双|单单|双双|单单|双|单单|双双|单|双双|单单|双双双双双|单单单单单|双双双|单|双|单|双|单|双|单|双双双|单|双|单单单单单|双|单|双|单|双|单|双|单单|双|单|双双双双|单单|双|单单单单|双|单单|双双双双|单|双双双|单单单|双双|单单|双双双双|单|双双|单|双双|单|双双|单|双|单|双|单|双双双双双双双双|单单单|双|单单单|双|单|双双|单单|双|单单|双|单|双|单单|双|单|双双双|单单|双双双|单|双|单|双双|单|双|单单|双|单单单|双双|单单|双双|单|双|单单|双双双|单|双|单|双双|单单单单|双双双|单|双|单|双双双|单单单单|双双|单|双|单|双|单单|双双|单单单|双双双|单单单|双|单|双|单|双双双|单单|双|单单单单|双|单|双|单|双双|单单单单|双|单|双', '单双')
        formatRoadmap('6', '|大|小|大大大大|小小小小|大|小|大大|小小小小小|大|小小|大大大大大大|小小|大|小小|大|小|大大大大大|小小|大|小小小|大|小小小|大|小小小|大|小|大大大大|小小|大|小小|大大|小|大|小|大|小小小小|大大大大大|小小|大大|小小|大|小小小|大|小|大大大|小|大|小|大大大大|小小小小小|大大|小|大|小小小小小小小小小|大大|小|大|小小|大大大|小小|大大大大大大|小|大大大大|小小|大|小小小|大|小小小小|大|小|大大大|小小小小小|大大|小小小小小|大|小小小|大大大|小小|大|小|大大大|小|大大大大大|小小小|大|小小|大大|小小|大|小|大大|小小小|大|小小小小|大|小小小小|大|小|大大|小小小小|大|小小小|大|小小小|大大大|小|大|小小小小|大大|小|大大|小小|大大|小|大|小|大|小小小|大大|小|大大|小小|大|小|大|小小小小小小|大|小|大大|小|大大大大大|小小小小小小小|大大|小小小小|大', '大小')
        formatRoadmap('7', '|双双|单|双双|单|双双|单单单单|双|单单|双|单单|双双双|单单单单单单|双双|单单|双|单单单单单单单|双双|单|双双|单单单|双|单|双|单单|双|单|双双双双|单单单单|双双双|单|双双双双|单|双双|单|双|单单单单|双|单单|双|单单单|双双|单单|双|单单单|双双双|单单单单|双双双|单单|双双|单单|双双|单|双|单单|双双双|单|双双|单|双|单单单|双双|单|双|单单单单|双双|单单|双双双双|单|双|单单|双双|单单单|双|单|双双|单单|双双|单单单|双双|单|双|单单|双|单|双|单单|双双|单|双双双|单|双双双双|单|双|单单|双双|单单单单|双|单单|双|单单单|双双|单|双|单单|双|单单|双双|单单单|双双双|单|双|单|双|单|双双|单单|双|单|双双双双双|单|双|单单单单|双双|单单单单单单单单单单单单单单单|双双双双|单单|双|单单单单单单单|双双|单单|双|单单|双|单单|双', '单双')
        formatRoadmap('8', '|虎|龍|虎虎|龍|虎虎|龍龍|虎虎虎|龍|虎虎虎虎虎虎|龍龍|虎虎虎|龍|虎|龍龍龍|虎|龍|虎虎虎虎虎虎虎虎|龍龍龍|虎|龍龍|虎虎虎|龍|虎|龍龍龍|虎|龍龍龍|虎虎虎虎|龍|虎|龍|虎|龍|虎|龍|虎|龍龍|虎|龍|虎|龍|虎虎虎虎虎虎|龍|虎|龍|虎|龍龍|虎|龍|虎虎虎虎|龍|虎|龍龍龍龍龍龍龍龍|虎|龍|虎|龍|虎|龍|虎|龍|虎虎|龍|虎|龍|虎|龍龍龍|虎|龍龍|虎虎|龍|虎虎虎虎|龍|虎|龍|虎虎虎|龍|虎|龍|虎虎|龍|虎虎|龍龍|虎虎|龍龍|虎虎虎|龍|虎虎虎|龍|虎虎虎|龍龍|虎|龍|虎|龍|虎虎|龍|虎|龍|虎|龍龍|虎虎虎虎|龍|虎|龍龍|虎虎虎虎虎虎虎虎|龍龍|虎虎虎|龍龍|虎虎|龍|虎虎虎虎|龍|虎|龍龍|虎虎|龍龍|虎虎虎|龍|虎虎虎|龍龍龍龍|虎虎虎|龍龍龍龍|虎虎虎虎虎|龍|虎|龍龍龍|虎|龍龍龍龍龍|虎|龍|虎虎虎虎|龍龍|虎虎虎|龍|虎', '龍虎')
        formatRoadmap('9', '|大|小小小小|大大|小小|大大大大大大大大大大大|小小小|大大|小|大|小|大|小|大|小|大|小小小小|大|小小小小|大|小|大|小小小小|大|小|大大|小|大大|小|大|小|大|小小小|大大大|小|大大大大大大大大|小|大大|小|大|小小|大大|小|大大大大|小|大|小|大|小|大|小小小小小|大|小小|大大大大大大|小|大|小小|大|小|大大大|小小小|大|小|大大大|小小|大|小|大大大大大|小小|大大大大|小小小小小|大大|小小|大|小|大|小|大大|小小|大大|小|大|小|大|小|大大|小|大|小|大大|小|大|小|大大大|小|大大|小小|大|小小|大大|小小|大大大大大大|小小|大大大|小|大|小|大大|小小|大大|小小小|大大|小|大|小|大大|小小|大大大大|小小小|大大|小|大|小|大|小小小|大|小小小|大|小|大大大|小|大大大|小小|大大大大|小小|大大大', '大小')
        formatRoadmap('10', '|单单|双|单|双双双双|单单单|双|单单单|双双双双双双|单单单|双|单单单单单单|双|单单单单|双双双双双|单单单单|双双双双双|单单|双双|单单|双双|单单单单|双双|单单单单|双|单|双双|单|双双双|单|双双双双双|单|双|单单|双|单|双双双|单|双|单单单单|双双双|单|双|单|双双|单单单|双|单单单|双|单|双双|单单单单|双双双双双双双|单单|双|单|双双|单|双双|单单单单|双|单单|双双双|单单|双|单|双|单单单|双|单|双双|单|双|单单单|双双双双|单|双双|单|双|单|双|单|双|单单单单|双双双双双双双|单|双|单单单单|双双|单单单单|双双|单单单|双|单|双双双|单|双|单|双|单单|双|单单单单|双双|单|双|单单单|双|单|双|单|双双双|单|双|单|双双双双|单|双双|单单|双|单|双|单单单单单|双|单|双|单|双|单单|双双双双|单单单|双双|单单单|双|单|双|单单单', '单双')
        formatRoadmap('11', '|小|大|小|大大|小小|大大|小|大大|小小|大大|小|大大|小小|大大|小小小小小|大大|小小小|大|小|大大|小|大|小|大|小|大大大|小小|大|小小小|大大大|小小|大大|小小小|大|小小|大大大大大|小小|大大大大|小|大大大|小小小|大|小小|大|小|大大|小|大|小小小|大|小|大|小小|大大|小小|大大|小|大|小小小小小|大大大大|小小小小小|大大大|小|大大大|小小|大|小小小小|大大|小|大|小|大大|小小小|大|小|大|小|大大大大大大大|小|大大|小|大|小|大大大大|小小|大|小|大大大大大大|小|大|小|大大大|小|大大|小小小|大大|小|大大大|小|大大大|小|大|小|大|小小小|大大大|小小|大|小小小|大|小小小小|大大|小|大大大大|小|大|小|大大大|小|大大|小|大大大|小|大|小|大大大|小小小|大|小|大|小|大大|小小小小|大|小', '大小')
        formatRoadmap('12', '|双双|单|双|单|双|单单单|双双双双|单|双|单|双双|单单单|双|单|双双双|单单|双|单单单|双双|单|双|单|双双双双双|单|双|单单|双|单|双|单|双|单单|双双|单单|双|单单|双双|单|双|单单|双|单|双双|单单|双|单|双|单|双|单|双双双双双双双双|单|双|单单单|双双|单|双双双|单单|双双双双|单单|双|单单单|双|单|双双双|单|双|单单|双|单|双|单|双双|单|双|单单|双|单|双|单单|双|单单|双|单单单单|双|单单单|双|单单|双双双双|单|双双|单|双|单单单单单|双双双|单|双|单单|双|单单单|双|单单单|双双|单单单|双双|单|双|单单|双|单单|双|单|双|单单|双|单|双双双双|单单|双|单|双|单|双|单|双双双双双|单|双|单单|双|单单单|双|单|双|单|双', '单双')
        formatRoadmap('13', '|虎|龍|虎虎|龍龍龍龍龍龍龍龍龍|虎|龍龍|虎虎|龍龍|虎|龍龍|虎虎|龍龍|虎|龍龍|虎|龍|虎|龍|虎虎虎虎虎虎|龍|虎虎|龍龍龍|虎|龍|虎|龍|虎|龍龍龍龍龍龍|虎虎虎虎虎虎|龍龍|虎虎|龍龍|虎虎虎虎虎虎|龍龍龍|虎|龍|虎|龍龍龍龍|虎虎虎虎|龍|虎虎|龍龍|虎虎|龍|虎|龍龍|虎|龍|虎虎虎|龍|虎|龍|虎虎|龍龍|虎虎|龍龍龍龍|虎虎虎虎虎虎|龍龍龍|虎虎虎虎虎|龍龍龍龍龍龍龍|虎虎|龍|虎虎虎虎虎虎|龍龍龍|虎|龍|虎虎虎|龍|虎|龍|虎|龍龍龍龍龍龍龍|虎|龍龍|虎|龍|虎|龍龍龍龍|虎|龍龍|虎|龍龍|虎|龍龍龍|虎|龍龍|虎|龍|虎虎|龍龍龍龍|虎|龍龍|虎|龍|虎|龍龍龍龍龍|虎|龍龍龍|虎|龍|虎|龍龍龍|虎虎|龍龍|虎虎|龍|虎虎虎虎|龍龍|虎|龍龍龍|虎|龍龍|虎虎虎|龍|虎虎|龍|虎|龍|虎|龍|虎|龍|虎|龍|虎|龍|虎虎虎|龍龍龍|虎|龍龍|虎|龍|虎虎|龍|虎', '龍虎')
        formatRoadmap('14', '|小小|大大|小小|大大|小|大大|小|大|小小|大|小|大大|小小小|大大大|小小小小小|大大大大|小|大大大|小|大大大大大大大大|小小小|大大大|小|大大|小|大|小|大大|小小小小小小|大大大大大|小|大大大大大大大|小|大大大|小小小小小|大|小小小|大|小小|大大大大大|小|大大|小|大|小小小小|大大大大|小小|大|小|大|小小小小|大大|小|大大大大大大|小小|大|小|大|小|大大大|小|大大|小|大|小小小小小小小小|大|小小小小|大大大大大大|小|大大大大|小小小|大大|小|大|小|大大大|小小|大大大|小小|大|小|大大大|小小小小小|大|小|大大大|小|大大大|小|大|小|大大|小小小|大|小小小|大|小|大|小小小小小小|大|小|大大大大|小|大|小|大大|小|大|小小|大|小小小小|大|小小小|大|小小小小|大大大|小小小|大大|小|大|小小|大|小|大大大|小|大大大|小|大大大大|小小|大大大|小小|大大大|小|大|小小', '大小')
        formatRoadmap('15', '|双|单单单|双双|单单单|双|单单|双|单|双双双双双|单|双|单|双双双双双双双|单|双双双|单单|双|单单|双|单单单|双双|单单|双双双双双|单单|双|单单单|双双双|单|双双|单|双|单单|双双双|单单|双双|单单|双|单单单单|双双|单单单单|双|单|双|单单|双|单单|双双双双|单单|双|单单单单|双双双双双双|单|双双双|单|双|单|双双双双|单|双|单单单单|双|单|双双|单单单单单|双|单|双|单|双双|单|双双|单单|双|单|双双双|单|双双双双双|单|双|单单|双双双|单单单|双|单|双双双|单单单|双双|单单单|双双双|单单单单单|双双双|单|双双|单单单|双双|单|双|单|双|单单单|双双|单|双双双双|单单|双双双|单单单单单|双双双|单|双双|单单单单|双|单|双|单|双|单单|双|单|双|单单|双双双|单|双双|单|双|单单|双|单单单单单单单|双双|单单单|双双双双|单|双|单|双双双', '单双')
        formatRoadmap('16', '|小|大大|小|大|小小小|大|小小|大|小小小小小|大大大|小|大大|小|大大大大大大大|小|大大|小|大大|小|大|小小|大|小|大|小小|大大大大|小小|大|小|大|小|大|小小|大|小小小|大|小小|大大大|小小小|大|小|大大|小小小|大|小|大|小|大大|小|大|小小|大|小小|大大大大大大大|小小小小小|大|小小|大大|小|大|小小|大|小|大大大大|小小小|大大大大|小小|大大大大|小|大大|小|大|小|大大大大大大大|小|大|小|大|小|大大|小小小小|大|小小|大大|小|大大大大|小小|大|小小|大大|小小小小小|大大大|小|大|小|大大|小小小|大|小小小小|大|小小|大大|小小|大大|小|大大|小|大|小小小|大大大大大大|小小小|大大|小小|大大大|小|大大大|小|大大|小|大|小|大|小小|大|小|大大大|小|大|小小|大大大大大|小小|大|小小|大大|小', '大小')
        formatRoadmap('17', '|单单|双|单单单|双双|单|双|单单单单单单单|双|单|双双|单单单单|双双双|单|双双双|单|双双双双|单单单单|双|单单单|双|单|双|单|双双双|单|双双|单单单单|双|单单|双|单单单单|双双双双|单|双双双|单|双|单|双|单单单|双|单单|双双|单|双|单单|双|单单单单单单|双双|单单单单单|双|单单单单单|双|单|双|单单|双双双|单单单单|双|单单|双双|单|双双双|单|双双|单|双双|单单|双|单单单|双|单|双|单单单|双双双双双|单|双双|单|双|单|双|单单|双双双|单|双双|单单|双双|单单|双|单|双双双|单|双|单单|双双|单|双|单单|双双|单单单单|双双|单|双双双|单|双双双|单单|双|单单|双双|单|双双|单单|双|单单|双双|单|双双|单|双|单|双|单|双双|单单|双双|单单|双双|单|双|单单|双双双双双|单|双|单|双双双|单', '单双')
        formatRoadmap('18', '|虎虎虎|龍|虎|龍|虎虎虎虎虎|龍龍龍龍龍龍|虎|龍龍龍|虎|龍龍|虎|龍|虎|龍|虎虎虎|龍|虎|龍|虎|龍龍龍龍|虎|龍|虎|龍龍|虎虎虎|龍|虎|龍|虎|龍龍|虎虎|龍龍|虎|龍|虎虎|龍|虎|龍|虎虎虎|龍|虎|龍龍|虎虎虎|龍龍龍龍龍龍|虎|龍龍|虎|龍|虎虎虎|龍龍龍|虎|龍龍|虎虎|龍|虎虎|龍|虎虎虎虎|龍龍龍|虎|龍|虎|龍|虎|龍|虎虎虎虎|龍龍龍龍龍|虎虎|龍龍龍|虎|龍|虎虎|龍龍龍|虎|龍龍龍龍龍|虎|龍|虎|龍|虎虎虎|龍龍|虎虎|龍|虎虎|龍龍|虎|龍龍龍|虎虎虎虎|龍|虎|龍|虎虎虎虎|龍|虎虎虎虎虎|龍|虎|龍|虎虎|龍|虎|龍|虎虎虎虎|龍|虎虎|龍龍龍|虎|龍|虎虎虎|龍|虎|龍|虎虎虎|龍龍龍龍龍龍|虎|龍龍|虎|龍龍|虎虎|龍龍龍龍龍龍|虎|龍龍|虎虎虎|龍龍|虎虎虎|龍|虎|龍|虎虎虎虎|龍龍龍龍龍|虎|龍|虎|龍|虎|龍|虎虎', '龍虎')
        formatRoadmap('19', '|小小小|大大|小小|大大|小|大大|小|大|小小|大|小小|大|小|大大大大|小小小|大|小|大大大|小小|大大大|小小小|大|小|大大大大|小|大|小|大大|小小小|大|小|大|小小小小小|大大大|小|大|小小小|大|小小|大|小小小|大|小小小小小小|大|小|大|小小|大大|小|大|小小小|大大|小|大大|小小|大|小小|大|小|大|小小|大大大大|小小|大|小|大大|小小小小|大大|小|大|小|大大|小小小|大|小小|大|小小小小小|大|小小小|大大大大|小|大大大大|小|大|小小|大|小小小|大大大|小小小小|大大|小小|大|小|大|小小|大大|小|大|小|大大|小|大|小小小|大|小|大大|小|大大大|小小小|大大大|小小小|大|小小|大大|小小|大|小小|大大|小|大大大|小小小小小小小小小|大大|小小小|大大大大|小|大|小小小小|大大|小|大|小|大大大|小|大大大|小小', '大小')
        formatRoadmap('20', '|单单|双|单|双双双|单单|双双|单单|双|单|双双双|单单单|双|单|双|单单|双|单单单|双双双|单单|双|单单|双双双双|单|双|单|双|单|双|单|双|单单|双双双|单|双|单|双双双双|单单|双双双|单|双双|单|双双|单单单单单单单|双双|单单|双|单|双双双|单单|双双|单|双双双双|单单单单|双双|单单|双双|单|双双双|单单单|双双双|单单|双双双双|单单|双|单单|双|单|双|单|双双|单|双双双|单|双双双双|单单单单|双双|单|双双|单单|双双双|单|双|单单单单|双|单单|双双|单|双|单|双|单|双双|单|双|单单单单单|双双|单|双|单单|双双双双|单单单|双|单|双双|单单单|双|单单单|双双双双双|单单|双|单单单单|双双双双双双双|单|双双双双|单|双|单|双|单|双双双|单单|双|单单单|双双双双双|单单单单|双双双双双双|单单|双|单单|双|单|双|单单单|双|单单单', '单双')
        formatRoadmap('21', '|大大大大|小小|大|小小|大大|小|大|小小小|大大大大大|小小小|大大大大|小小|大|小|大大大|小小小小小小|大|小小|大大|小小|大|小|大大大|小|大|小|大大|小小小小小小小|大大大大|小小|大|小小小小小小|大|小小|大|小|大大|小|大大|小|大大|小小|大大大大大|小小小小小小|大大|小|大大大大大|小小小|大|小|大|小小小|大|小|大|小小|大大|小小小小小|大大大|小|大大|小小小小|大|小小|大大大|小|大|小小|大|小小小小|大|小|大|小小|大|小小|大大大大大|小小小小小|大大大|小|大|小小小|大|小|大大|小|大|小|大|小|大大|小小|大大大|小|大|小小|大大|小|大|小|大大大大大|小|大大大|小小小|大大大|小|大|小|大|小小小|大|小小|大大|小小小|大|小小|大大大|小小小|大|小|大|小小小|大|小小小|大大大|小|大大大大大大|小小|大|小|大|小小|大|小小|大大大', '大小')
        formatRoadmap('22', '|单|双|单单|双双|单|双|单|双双双双双|单|双|单单|双|单单|双|单|双双|单|双|单单单单单|双双双双双双|单单单单单单单单单单|双|单|双双双|单单单|双双双双双双双|单|双|单|双双双|单|双双双|单|双|单|双双|单单|双|单单|双|单|双|单|双双|单|双双双双|单单单|双|单单单单|双|单单|双|单|双双|单|双双双双双|单单|双|单|双|单单单|双双双|单单|双双|单|双|单单单单|双|单单单|双双|单单单单|双双|单|双双双|单单单|双双|单单|双双双|单|双|单单|双双|单单单|双双双|单|双|单|双双|单单|双双双|单单|双|单单单|双|单|双|单|双双双|单|双双|单单单|双双双|单|双|单单单|双双双双|单单单|双|单|双双双双|单|双双|单|双|单|双|单单单单|双双|单|双|单单单|双双双|单|双|单|双|单单单单|双|单|双双双双|单|双双|单|双双双双双双双双|单单单', '单双')
        formatRoadmap('23', '|小|大|小小小小|大|小|大大大大大|小|大|小|大大大大大|小小|大|小|大大大大|小|大大大|小|大|小|大|小小|大大大大|小|大|小|大大大|小|大|小|大|小|大|小小小|大|小小小小|大大|小|大|小小|大|小|大|小小|大|小小小小小小小小小|大大|小小小|大|小小小小小小小小小|大大|小|大大|小|大大|小|大|小|大|小小|大大大大大大大大|小小小|大大|小|大|小|大|小|大|小|大|小|大大大|小|大|小小小小|大|小小|大大大|小小小|大|小|大大|小|大大|小小小|大大大|小小|大大大大|小小|大|小|大|小|大大大|小|大大|小|大大大|小小|大|小小|大大大|小小|大大大大大大大|小小小|大|小小|大大|小|大大|小小|大大|小|大|小|大大大|小|大|小小|大|小|大|小|大大大大大|小|大大|小小|大|小小小小小|大大|小|大大|小小|大|小', '大小')
        formatRoadmap('24', '|双|单单|双|单|双双|单单|双双双|单单|双|单单单单单单单单单|双|单|双双双|单单|双双|单|双|单单单单|双双|单|双双|单|双|单单|双|单|双双双|单|双双双|单|双双|单单单|双双|单单单单|双|单单单单|双双|单|双双双|单|双|单|双|单单|双|单单|双|单单单|双|单单|双|单|双双双|单单单单|双|单|双双双双双|单单|双|单单单单单|双|单单|双双|单|双双|单单|双|单|双双双|单|双双|单单单单单单单单|双|单单单|双|单单单|双|单|双双|单单|双|单单单单单单单单|双|单单单单单单|双双|单|双|单单单单|双双双双双双双双|单单|双|单单单|双双|单单|双|单|双|单|双双|单|双双双|单|双|单|双双双双双双|单|双双|单单单|双|单|双双双双双双|单单|双|单|双|单单单单|双双|单单|双双|单|双|单单|双双|单单|双双|单单单单单单|双双双|单单|双|单|双双|单|双|单|双双双', '单双')
        formatRoadmap('25', '|小小|大|小小小|大|小|大|小小小|大大|小小小小小小小小小|大大|小小|大大大大大大大|小小|大大大大|小小|大|小|大|小小|大大大|小小|大|小小小|大|小|大|小|大|小小小|大大|小|大大大大|小|大|小小|大|小小小|大大大大大大大|小小|大|小|大|小小小小|大大大大大|小小小小小|大大|小小小小小|大大大|小|大|小|大大|小|大大大|小小小小小|大|小|大|小|大|小小小|大|小|大大大|小小小小小小小|大|小|大大大大大大大|小小小|大|小|大|小|大|小|大大大|小|大|小|大大|小小小|大|小小小小小|大|小|大大|小小|大|小|大大|小小小|大|小小|大|小|大大|小|大|小小小|大|小|大|小|大|小小小小小|大|小小|大大|小小小|大|小小|大|小小小|大|小|大大大|小小小|大大|小小|大|小小|大大大|小|大大大大大大大大|小小小|大大大|小|大大|小|大大|小小|大|小|大大|小小', '大小')
        formatRoadmap('26', '|单|双双双双|单单|双双双|单|双|单单|双双双双双双双|单|双双双|单单|双|单单|双|单|双双|单单单单|双|单|双|单单|双|单单单单|双|单|双|单单|双双|单|双双双|单单|双|单单|双双|单|双|单|双|单单|双|单单单单|双|单|双双双双|单单|双双|单单单单单单单单单|双|单单单|双|单|双|单单单单单单单单单单|双|单单单|双|单单|双双|单|双|单单|双双双|单|双双|单|双双|单单|双双双双双|单|双|单|双|单|双双双双|单|双双|单单|双双双双|单单|双双|单|双双|单单|双双双双双双双双双|单单单|双双双双|单|双双双|单单|双|单单单|双双双|单单|双|单单|双|单|双双|单单单单|双双|单单单|双|单单单单|双双|单|双|单单|双双|单|双|单|双双双双双双|单单单|双|单单单|双|单单|双|单|双|单单|双双|单单单|双双|单单|双|单单|双|单单|双|单|双|单单单|双双|单单单', '单双')
        formatRoadmap('27', '|大大|小|大|小|大|小小小|大大大大大|小|大|小|大大|小小小|大大大|小小|大|小小|大大大|小小小小|大|小小小|大大大|小|大大|小|大|小小小|大大大|小|大大|小小小小小|大|小|大大|小小|大|小小|大大大大|小小|大|小小小小小小小|大大|小小小小|大|小|大|小小|大大大大大|小小|大大大大大大大|小|大|小小|大|小|大大大|小小小|大|小|大|小小|大大大大大|小小|大|小小|大|小小小小|大|小|大|小小|大|小|大|小|大大大|小|大|小小小小小小小小小小|大|小|大|小小|大大|小小|大大|小|大大|小小小|大大|小|大|小小小|大大|小小小小|大|小小|大大|小|大大|小小小小|大大大|小|大大|小|大|小小小|大|小|大|小小小小|大大|小|大大大|小小|大|小小小小小|大|小|大大大|小|大大|小|大大|小|大大大|小|大大大大|小小|大大大|小|大|小小小|大|小小小|大大大', '大小')
        formatRoadmap('28', '|单单|双双|单单单|双|单|双双双双双双|单|双双双双|单|双双|单|双双双双双双双双|单|双|单|双双|单|双双双双|单单单单|双|单单|双双|单单单单|双双双双双|单|双|单|双|单|双双|单单单|双双|单|双|单|双双|单|双双|单|双|单单单单|双双双双双|单单|双|单|双双双|单单单单单|双双双双双|单|双双|单|双|单|双|单|双|单单|双|单|双双双|单单|双双双|单单|双|单单单单|双|单|双|单单单单单|双|单单|双双双双双|单单|双|单单单|双|单|双|单单|双|单单|双双双|单|双|单单单|双|单|双|单|双双双|单单|双|单单单单单|双双双|单单|双|单单单|双双双|单|双|单单|双|单单单单|双|单单|双|单|双|单|双双|单单单单|双|单单|双|单单单|双|单单|双|单单单|双双|单|双|单|双|单|双双|单单|双双双|单|双|单单|双双双双双双双双双|单单|双双双双|单单', '单双')
        formatRoadmap('29', '|大|小小|大大大|小|大大大大大大|小小|大|小|大|小|大|小小小|大|小|大大|小|大大大大大|小|大|小小小小|大大|小小|大|小小|大大|小|大大|小|大大大|小|大大大|小小小|大|小小小|大大|小|大大|小|大|小|大|小|大大|小小小|大|小|大大大大|小|大|小小小|大|小小|大|小|大|小|大|小|大|小|大|小|大|小小|大大大|小小小小小小|大大大大|小小|大|小小小|大大大|小|大大大|小小小|大大|小|大大|小小|大大大|小|大大大|小|大大大|小|大大大大|小|大大|小|大|小|大|小小|大大大大大|小小小|大|小|大大大|小小|大|小小|大大大|小|大|小|大|小小|大大大|小|大大大大大|小小|大大|小|大大大大|小小小小|大大大大|小小小|大大|小|大|小小小小小小|大|小|大|小|大|小|大|小小|大|小|大|小小小小|大|小|大', '大小')
        formatRoadmap('30', '|单单|双|单单|双双|单|双双|单单|双|单|双|单|双双|单单|双|单单|双双|单|双双双双双双双双|单单|双双|单单|双|单单单单|双|单单单单|双双|单|双双双双双双双双双双|单单单单单|双|单单单单单单单单单|双|单单单|双|单单|双|单单单|双|单单|双双双|单|双|单单单单单单单单|双|单|双双|单单|双|单单|双双双|单|双|单|双双|单单|双|单|双双双|单单|双|单单|双|单|双|单单|双|单|双|单|双|单|双|单|双双双|单|双双双|单单|双双双|单单单|双|单|双双双双双双|单|双双双双双双|单|双双双双双|单|双|单|双双双|单单单单|双|单单|双|单单单单单单|双双双双双|单单单|双双双|单单|双|单|双双双|单|双双双|单单|双双双双|单单单|双双双|单单单单|双|单|双|单|双|单|双|单单|双|单|双双|单单|双双|单单单|双双双|单单单|双|单单单单|双|单|双|单|双双双|单|双双|单', '单双')
        formatRoadmap('31', '|大大大大|小|大|小|大|小|大|小小小小|大大|小小小|大|小小小小|大|小|大大大大|小|大|小小|大|小|大|小|大大大|小|大|小|大|小|大大大|小|大|小|大大大大大|小|大大|小|大|小小小|大|小小小小小|大大|小|大|小|大|小|大大大|小小|大|小|大大大|小|大|小小|大|小|大大大|小小|大|小|大|小小小|大|小|大|小小|大大|小|大|小小小小|大大|小小|大|小|大大|小小|大大大|小小|大大|小小|大|小|大|小小|大|小小小小小|大|小|大大大|小小小|大大|小小小小小|大大|小小|大|小|大|小小|大|小小|大|小|大|小|大大大大|小|大大|小小|大|小|大大|小小|大大大|小小|大大|小|大|小|大大|小|大大|小|大|小|大|小小|大|小小小|大大|小小小小小小小小|大大大大大|小|大大|小|大大大大', '大小')
        formatRoadmap('32', '|双双|单单单单单单|双|单单|双|单|双双|单单单单|双|单单单|双双|单单|双|单单单|双双|单|双|单单|双|单|双|单|双|单|双双双双|单单|双双|单单单|双双双|单单单单单|双|单单|双|单单|双双|单单|双|单|双|单|双|单单|双双|单|双|单|双双双双双|单单|双双|单|双|单|双|单|双双|单|双|单|双双双双双|单|双双双|单|双|单单单单单单|双|单单|双双双|单单单|双双双|单单单单|双|单|双双|单单|双|单|双|单|双|单单单单|双|单|双双|单单|双双|单单|双|单|双双双双|单单|双双|单|双双双双双双双|单单单单|双双|单单单|双双|单|双双双双双|单|双双双|单|双双双|单单单单单单|双|单单单单单|双|单|双双双双|单单|双双双|单|双|单|双|单|双双|单|双双|单|双|单单|双双|单单|双双双双双|单单单单|双双双双|单|双双双|单|双|单|双双双双双双双|单单|双双', '单双')
        formatRoadmap('33', '|小|大大大大大大大|小小小|大|小|大|小小|大|小小小|大大|小小|大|小|大|小小|大大大|小|大|小小|大大大|小小|大大|小小小小|大大大|小|大大|小小小小|大|小小小小|大大大大|小小|大|小小|大大大|小小|大|小小|大|小|大|小小小小小|大大|小|大大|小小|大|小小|大|小小|大大|小|大|小|大|小小|大|小小小|大|小小|大大|小小|大|小|大大|小小小|大|小小|大|小小|大大|小小|大|小小小小|大大|小|大大大|小|大|小小|大|小小小小|大大|小|大|小小|大|小小小|大|小小小小|大大|小|大大大|小小小小小|大大|小小小小小小小小小小|大大|小小|大大大|小小小小|大大大大|小|大大大大|小小小|大大大大大|小小|大|小小|大大大大|小小|大大大大|小|大|小|大|小小小小小|大|小|大|小小|大|小小|大|小小小|大大|小|大|小|大|小小小|大|小|大大|小|大大大大大大大大大大|小', '大小')
        formatRoadmap('34', '|双|单单|双|单|双|单单单单单|双|单单单|双|单|双|单单单|双双|单|双|单单|双|单|双|单|双双双|单|双双双双|单|双双双双|单|双|单单|双|单|双双|单单单|双|单单单单|双双双双双|单|双双|单|双双|单单|双|单|双|单单单|双双双|单单|双双|单|双双双|单单单单单|双双|单单|双双|单单单|双|单|双双|单|双双双双|单|双双|单|双双双双双|单|双双双双双双|单单|双|单|双|单单单|双双|单单|双双双双|单|双|单|双双双|单单单单|双|单|双双|单单单单单|双双|单|双双双|单单|双双|单单单单单单单|双|单单|双双|单单|双双双|单|双|单|双|单|双|单单|双|单|双|单|双|单单|双双|单|双双双|单|双双双|单单单|双双|单单单|双双双双|单单单|双双|单|双双双|单|双双|单|双|单单|双双|单单单单单单单单单单|双双|单单单|双双|单单|双双双双双|单单|双|单|双', '单双')
        formatRoadmap('35', '|大|小小小|大大|小|大|小|大|小小小小小小|大大大大大大大大大|小小|大|小小小小小|大|小小|大大大|小小小小小小|大|小小|大大大|小|大|小小|大大大大|小小小小小|大|小|大大|小小小小|大|小|大|小|大大大|小小|大|小小|大|小|大大|小小|大大|小小|大大|小小小|大大大|小|大大|小|大|小小小小小|大大大|小|大|小小|大大大大大|小|大|小小小|大大|小|大|小小|大|小小小|大大|小|大大大大|小小小小小|大|小小小|大大|小|大|小小小|大|小|大|小|大大大|小小小小小小小小小小|大大|小小|大大大|小小|大|小|大|小小|大|小|大大|小小|大大|小小小小小|大大|小小|大|小|大大|小|大|小|大|小小|大大|小小|大大|小小|大|小小|大|小小小小小小|大|小小|大|小小小小|大|小小小|大大大|小|大|小|大大|小|大大|小小|大大大大大|小|大大|小|大|小小小小小|大大|小小|大', '大小')
        formatRoadmap('36', '|双双双|单单|双双|单单单单|双双|单单|双双|单单单单|双双双双双双|单单单单单单单|双|单单|双双双|单|双双双双|单单单单|双双双|单|双双|单|双双|单单|双双双双双双|单单|双|单|双|单单单|双双双双|单单|双|单|双双|单单单|双双|单单|双双双双双双双|单单单|双|单单单单单|双双双双双双双|单单单单|双双|单单|双双|单|双|单单单单单单|双双双双双|单|双双|单|双|单|双双双双|单单|双|单单|双双|单单单|双|单|双双|单|双|单|双|单|双双|单单|双|单|双|单单|双双双|单单|双双|单单单单单单单|双|单单|双|单单|双|单单|双|单|双双|单单单单单单单单|双双双双双双|单|双|单单|双|单单|双双|单|双双双|单|双双双双|单单单单|双|单|双双双|单单单单|双双|单|双|单|双|单|双|单|双双|单单单|双|单单单|双双双|单|双双|单|双|单单单|双双|单|双|单|双双双|单|双|单单单单|双|单单单单单|双双|单|双双', '单双')
        formatRoadmap('37', '|小|大|小小|大|小小|大大大大大|小小|大|小小小小小|大大大大|和|小|大大大|小小小|大|小小小小|大大大|小小|和|大|小|大|小小|和|大|小小小|大|小|大大大|小小小|大大|小小|大大大|小|大大大|小小小|大|小小|大|小|大大大大大大大大|和|大|小|大|小小|和|大大|小|大大|小小小小小小小|大|小|大|小小|大|小小|大大|小|大大|小小小小小|大|小|大|小|大大|小|大|和|小|和|小|大|小|大大|和|大大大大|小小小小|大大大|小小小|大|小小|大|小小|大|小小|大|小小小小|大|小|大|小小|大大大|小小|大大|小|大|小|大|小小|大大|和|小小小|大大|小小|大大|和|小|大大|小小|大大|小小小小小小小|大大|小|大|小|大|小|大大大|小小小小|大|小|大|小小小|大大大大|小|大|小|大大大|小|大|和|小小|大|小小', '大小和')
        formatRoadmap('38', '|单单单单|双|单|双双|单单|双双双双|单|双|单单|双双|单单|双|单单|双|单单单单|双|单单|双|单|双双|单单|双双|单|双|单单单单|双|单单单|双双双|单|双双|单单单单|双双|单单|双|单|双双|单|双|单|双|单单单单单单|双|单|双双|单|双双|单|双双|单|双|单|双双双双|单|双|单|双|单|双|单|双双|单单|双|单|双|单|双双|单|双双|单|双|单|双|单|双|单单|双|单|双双|单|双|单单|双双双双|单|双双双|单单|双双双双双|单单|双双双双双双双|单单单|双|单单|双双|单|双双双双|单单|双双双|单|双双|单单单单|双|单|双双|单单单|双双|单|双|单单|双双双双双|单单单|双双双|单|双双双|单|双双|单|双|单单单|双|单|双|单单|双|单|双双|单|双|单|双|单单单单单单单|双双|单单|双|单|双双双|单', '单双')
        formatRoadmap('39', '|小小|大|小小|大|小|大|小|大|小|大大|小|大|小|大|小|大大大大大|小小|大|小|大大|小|大大|小|大大|小|大|小|大|小小小小|大大|小|大大大|小|大大大大大大大大|小|大大大大|小|大大|小小小小|大大大|小小|大大大大大大大大大大|小|大|小小小小小小小小小|大|小小|大大大大|小小小小小|大|小|大|小|大大|小小|大|小小小|大|小|大大|小|大|小小|大大大大大大大大大大|小|大大大大|小小|大|小|大大|小|大|小|大大|小|大|小|大大|小|大大|小|大|小|大|小小小小|大|小小|大大|小小|大大|小|大大大大|小|大大大|小小|大大|小|大|小小|大|小|大|小小小小小小小小小小小|大|小|大大大|小小|大大大大|小|大|小小小小小|大|小小|大大|小小小|大|小小|大大大|小|大|小|大大|小|大|小小小|大大|小小小|大|小小小|大大大|小小|大大|小|大大大大|小', '大小')
        $(function () {
            loadLZCookie(lzCookieName);
        });
        $(function () { userSelectLZ(); });
        lzCookieName = "luzhuXync";
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/xync/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});