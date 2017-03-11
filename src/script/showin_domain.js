// 抽獎活動 JavaScript Document
$(function () {
    function init() {
        //點擊關閉到....
        $('#f_huodong .close').on('click', function (e) {
            e.preventDefault();
            
            $('.shade_layer, #f_huodong').css({ display: "none" });
        });

    }

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    function show() {
        $('.shade_layer, #f_huodong').css({ display: "block" });
        $(".shade_layer").css({ "height": $(document).height() + "px" });
    }
    var isNew = GetQueryString("utm");
    if (isNew == "1396_me") {
        show();
        setTimeout(function () {
            init();
        }, 30)
    } else {
        $('.shade_layer, #f_huodong').css({ display: "none" });
    }
});
function addfavorite(url, title) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
        try {
            window.external.addFavorite(url, title);
        } catch (e) {
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    else {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}