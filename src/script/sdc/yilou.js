// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'sdc_memu';
var lotteryLuzhu = "";
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/sdc/award.js',type:'text/javascript'}).appendTo($('body'));


        $(".web_Sortk .btn span").live("click", function () {
            $.get($(this).attr("data-url"), null, function (text) {
                $('#lot_content').html(text);
            });
        });
        var ball = "1";
        var type = "1";
        if (ball != "" && type != "") {
            $(".lot-number-omit .type a,.lot-number-omit .ball a").removeClass("cur");
            $(".lot-number-omit .ball a[data-ball='" + ball + "']").addClass("cur");
            $(".lot-number-omit .type a[data-type='" + type + "']").addClass("cur");
        }

        $(".lot-number-omit .ball a").live("click", function () {
            $(".lot-number-omit .ball a").removeClass("cur");
            var vtype = parseInt($(".lot-number-omit .type a[class='cur']").attr("data-type"));
            if (vtype < 12 || vtype > 14) {
                $(".lot-number-omit .ball a").css({ "cursor": "pointer" });
                var url = "/sdc/yilou/" + $(this).attr("data-ball") + "-" + $(".lot-number-omit .type a[class='cur']").attr("data-type") + "-1";
                $.get(url, null, function (text) {
                    $('#lot_content').html(text);
                });
                $("#pageName").val(url);
                $(this).addClass("cur");
            } else {
                $(".lot-number-omit .ball a").css({ "cursor": "default" });
            }

        });
        $(".lot-number-omit .type a").live("click", function () {
            var vtype = parseInt($(this).attr("data-type"));
            var ball = $(".lot-number-omit .ball a[class='cur']").length;
            if (vtype >= 12 && vtype <= 14) {
                ball = 1;
                $(".lot-number-omit .ball a,.lot-number-omit .type a").removeClass("cur");
                $(".lot-number-omit .ball a").css({ "cursor": "default" });
            } else {
                if (ball == 0) {
                    ball = 1;
                    $(".lot-number-omit .ball a").eq(0).addClass("cur");
                } else {
                    ball = $(".lot-number-omit .ball a[class='cur']").attr("data-ball");
                }
                $(".lot-number-omit .ball a").css({ "cursor": "pointer" });
                $(".lot-number-omit .type a").removeClass("cur");
            }
            var url = "/sdc/yilou/" + ball + "-" + vtype + "-1";
            $.get(url, null, function (text) {
                $('#lot_content').html(text);
            });
            $("#pageName").val(url);
            $(this).addClass("cur");
        });

    }
});