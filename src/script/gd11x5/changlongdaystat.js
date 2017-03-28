// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = '/gd11x5/changlongdaystat';
var lotMenu = 'gd11x5_memu';
var lotteryLuzhu = "";

function changeSelect() {
    var type = $("#choose_type .cur").attr("data-type");
    var pos = $("#choose_pos .cur").attr("data-pos");
    $("#type").html($("#choose_type .cur").attr("data-text"));
    var _container = $("#callFun").attr("container");
    _container = _container ? _container : "lot-wrap";
    $.get(location.pathname, { t: Math.random(), type: type, pos: pos }, function (text) {
        $('#' + _container).html(text);
    });
}

function chooseItems() {
    var type = $("#choose_type .cur").attr("data-type");
    var pos = ~~$("#choose_pos .cur").attr("data-pos");
    $("#choose_pos li").show();
    $("#choose_pos a[data-pos=-1]").parent().find("span").show();
    if (type == 7 || type == 8) {
        $("#choose_pos li[filter*=nolonghu]").hide();
        $("#choose_pos a").removeClass("cur");
        $("#choose_pos a:last").addClass("cur");
    } else if (type == 10 || type == 11) {
        $("#choose_pos li[filter*=nowei]").hide();
        $("#choose_pos a").removeClass("cur");
        $("#choose_pos a[data-pos=-1]").addClass("cur").parent().find("span").hide();
    }
    if (pos == 0 && type < 7) {
        $("#choose_pos a").removeClass("cur");
        $("#choose_pos a:first").addClass("cur");
    }
}



$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));

        $("#type").html($("#choose_type .cur").attr("data-text"));
        $(function () {
            $("#choose_type a").removeClass("cur");
            $("#choose_pos a").removeClass("cur");
            $("#choose_type a[data-type=1]").addClass("cur");
            $("#choose_pos a[data-pos=1]").addClass("cur");
            $("#type").html($("#choose_type .cur").attr("data-text"));
            setTimeout(function () {
                chooseItems();
            }, 100);
            $("#refresh").live("click", function () {
                changeSelect();
            });
            $("#choose_pos a ").on("click", function () {
                $("#choose_pos a").removeClass("cur");
                $(this).addClass("cur");
                changeSelect();
            });
        });


        $(function () {
            $("#choose_type a ").on("click", function () {
                $("#choose_type a").removeClass("cur");
                $(this).addClass("cur");
                chooseItems();
                changeSelect();
            });
        });


    }
});