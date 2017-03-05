/* 菜单位置调整 */
var fixedMenu = $(".web_listOP");
var lot_menu_x = 0;
var lot_menu_y = 0;

$(function () {
    fixedMenu = $(".web_listOP");
    lot_menu_x = fixedMenu.offset().left;
    lot_menu_y = fixedMenu.offset().top;

    $(window).resize(function () {
        fixedMenu.removeAttr("style");
        lot_menu_x = fixedMenu.offset().left;
        lot_menu_y = fixedMenu.offset().top;
    });

    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
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
        pos = $.extend({}, pos, { "position": "fixed", "top": "0px", "left": (lot_menu_x - 2) + "px" });
        // }
        fixedMenu.css(pos);
        fixedMenu.find("ul").css({ "padding": "3px 0 3px 0" });
    } else {
        fixedMenu.removeAttr("style");
        fixedMenu.find("ul").css({ "padding": "0 0 10px 0" });
    }
}

//原来位置
var menuPosition = [];
//新位置
var newPositionMenu = [];
var curMenu = "";
function enableMenuDrag() {
    // if (!member.userLogined || member.id == 0) {
    //     $("#menu_drag_unlogin_tip").show();
    //     return;
    // }

    $("#menu_drag_span").hide();
    $("#menu_drag_tip_span").show();

    menuPosition = [];
    newPositionMenu = [];

    var ulHeight = $("#menu_ul").css("height");
    $(".web_listOP").addClass("web_listChange");
    $("#menu_ul").css({ "height": ulHeight });
    $("#menu_ul li a").each(function () {
        var _this = $(this);
        menuPosition.push(_this.parent().attr("data-tag"));
        _this.attr("data-url", _this.attr("href"));
        _this.attr("href", "javascript:void(0);");
    });
    curMenu = $("#menu_ul li.hover").attr("data-tag");

    if (document.addEventListener) {
        document.removeEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = "";//IE/Opera/Chrome


    setDragMenu();
    return;
}


function setDragMenu() {
    var oUl = document.getElementById("menu_ul"),
        aLi = oUl.getElementsByTagName('li'),
        aPos = [],
        iMinIndex = 2;

    //布局转换,先记忆所有Li的位置，然后根据这些位置转换为绝对定位
    for (var i = 0, l = aLi.length; i < l; i++) {
        aPos.push({ left: aLi[i].offsetLeft, top: aLi[i].offsetTop });
        newPositionMenu.push(aLi[i].getAttribute("data-tag"));
    }

    for (var i = 0, l = aLi.length; i < l; i++) {
        aLi[i].style.position = 'absolute';
        aLi[i].style.left = aPos[i].left + 'px';
        aLi[i].style.top = aPos[i].top + 'px';
        aLi[i].style.margin = 0;
        aLi[i].index = i;
        aLi[i].style.zIndex = 0;
        //设置每一个Li可拖拽
        setDrag(aLi[i]);
    }

    function setDrag(obj) {
        obj.onmousedown = function (e) {
            obj.style.zIndex = iMinIndex++;

            e = e || event;

            var disX = e.clientX - obj.offsetLeft,
                disY = e.clientY - obj.offsetTop;

            if (obj.setCapture) {
                obj.onmousemove = fnMove;
                obj.onmouseup = fnUp;
                obj.setCapture();
            } else {
                document.onmousemove = fnMove;
                document.onmouseup = fnUp;
            }

            return false;

            function fnMove(e) {
                e = e || event;

                obj.style.left = e.clientX - disX + 'px';
                obj.style.top = e.clientY - disY + 'px';

                //移动物体时检查碰撞并找到碰撞中最近的那个物体
                for (var i = 0, l = aLi.length; i < l; i++) {
                    aLi[i].className = '';
                }

                var oNearest = findNearest(obj);

                if (oNearest) {
                    oNearest.className = 'active';
                }
            }

            function fnUp() {
                this.onmousemove = null;
                this.onmouseup = null;

                if (obj.releaseCapture) {
                    obj.releaseCapture();
                }

                //鼠标抬起，有碰撞的交换位置否则回到原位置
                var oNearest = findNearest(obj);


                //alert(oNearest.getElementsByTagName("IMG")[0].src)
                //这里是限制那些组件是没法交换的
                if (oNearest && oNearest.tagName["LI"] != "LI") {
                    //去除碰撞的物体样式
                    //oNearest.className='';

                    //防止两物体在其它物体下面钻来钻去
                    oNearest.style.zIndex = iMinIndex++;
                    obj.style.zIndex = iMinIndex++;

                    //两物体交换位置
                    $(obj).animate({
                        left: aPos[oNearest.index].left,
                        top: aPos[oNearest.index].top
                    }, 'fast');

                    $(oNearest).animate({
                        left: aPos[obj.index].left,
                        top: aPos[obj.index].top
                    }, 'fast');

                    var temp = newPositionMenu[obj.index];
                    newPositionMenu[obj.index] = newPositionMenu[oNearest.index];
                    newPositionMenu[oNearest.index] = temp;

                    //两物体的位置索引交换
                    temp = obj.index;
                    obj.index = oNearest.index;
                    oNearest.index = temp;

                } else {

                    $(obj).animate({
                        left: aPos[obj.index].left,
                        top: aPos[obj.index].top
                    }, 'fast');
                }
            }
        };
    }

    //碰撞检测
    function cdTest(o1, o2) {
        var l1 = o1.offsetLeft,
            r1 = l1 + o1.offsetWidth,
            t1 = o1.offsetTop,
            b1 = t1 + o1.offsetHeight;

        l2 = o2.offsetLeft,
        r2 = l2 + o2.offsetWidth,
        t2 = o2.offsetTop,
        b2 = t2 + o2.offsetHeight;

        if (r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2) {
            return false;
        } else {
            return true;
        }
    }
    //计算两个物体之间的距离
    function getDis(o1, o2) {
        var a = o1.offsetLeft - o2.offsetLeft,
            b = o1.offsetTop - o2.offsetTop;

        return Math.sqrt(a * a + b * b);
    }
    //找到最近的碰撞物体
    function findNearest(obj) {
        var iMinDistance = 999999999999,
            iIndex = -1;

        for (var i = 0, l = aLi.length; i < l; i++) {
            if (aLi[i] == obj) {
                continue;
            }

            if (cdTest(obj, aLi[i])) {
                var dis = getDis(obj, aLi[i]);

                if (dis < iMinDistance) {
                    iMinDistance = dis;
                    iIndex = i;
                }
            }
        }
        if (iIndex == -1) {
            return null;
        } else {
            return aLi[iIndex];
        }
    }
}


function disableMenuDrag(s) {
    $("#menu_drag_span").show();
    $("#menu_drag_tip_span").hide();


    //确定
    if (s == 1) {
        menuPosition = newPositionMenu;
        $.cookie(member.id + lotMenu, "", newPositionMenu.join('|'), { expires: 3600 * 24 * 30, path: "/", secure: false })
    }
    resetMenuPosition(menuPosition);
    var lis = $("#menu_ul li");
    for (var i = 0, l = lis.length; i < l; i++) {
        lis[i].onmousedown = null;
        lis[i].onmousemove = null;
        lis[i].onmouseup = null;
    }
    $("#menu_ul li[data-tag=" + curMenu + "]").addClass("hover");
    $(".web_listOP").removeClass("web_listChange");
    $("#menu_ul li").attr("style", "");
    $("#menu_ul li a").each(function () {
        var _this = $(this);
        _this.attr("href", _this.attr("data-url"));
    });

    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome

    return;
}

function resetMenuPosition(pos) {
    var lis = $("#menu_ul li");
    $("#menu_ul li").remove();
    var lihtml = [];
    for (var i = 0, l = pos.length; i < l; i++) {
        var cur = pos[i];
        lis.each(function () {
            if ($(this).attr("data-tag") == cur)
                lihtml.push($(this)[0].outerHTML);
        });
    }
    if (lis.length != pos.length) {
        lis.each(function () {
            if (pos.indexOf($(this).attr("data-tag")) < 0)
                lihtml.push($(this)[0].outerHTML);
        });
    }

    $("#menu_ul").append(lihtml.join(""));
}


/* 菜单位置调整  End*/