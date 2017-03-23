define(function (require, exports, module) {

    createMsgDiv = function (obj, html) {
        if (html==null) {
            html = "暂无说明";
        }
        //位置根据对象的左边距
        var xx = $(obj).offset().left;
        //位置根据对象顶部边距
        var yy = $(obj).offset().top;
        //定义DIV对象
        var div = $("<div id='divHelp'>");
        div.addClass("questionMark_infoDiv");
       
        var cdiv = $("<div>");
        cdiv.addClass("questionMark_info");
        cdiv.appendTo(div);

        var span = $("<span>");
        span.clone().html(html).appendTo(cdiv);
        span.clone().addClass("ecp_QMBoderTriangle").appendTo(cdiv);
        //设置div相关样式
        div.css({ "display": "none" });
     
        div.appendTo("body");
        var height = div.css("height");
        div.css({ "left": xx+6 , "top": yy - parseInt(height.replace("px"))+5 });
        //显示动画（0.5秒完成）
        div.fadeIn();
    },

    exports.Init = function (name) {
        require.async(name, function (explainDataObj) {
            $("#divHelp").remove();
           
            $("[mykey]").unbind("hover");
            $("span[mykey]").hover(function () {
                //弹出说明层
                createMsgDiv($(this), explainDataObj[$(this).attr("myaction")].cssm[$(this).attr("mykey")]);

                $(this).addClass("questionMark_hover");
            }, function () {
                $("#divHelp").remove();
                $(this).removeClass("questionMark_hover");
            });
        });
    };
});