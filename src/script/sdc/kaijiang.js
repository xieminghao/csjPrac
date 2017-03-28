// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'sdc_memu';
var lotteryLuzhu = "";
function Search() {
    $.get("/sdc/kaijiang?date=" + $("#dateData").val(), null, function (text) {
        $('#history-table').html(text);
        clearBsoeChk();
        clearChk();
    });
};
function showNum() {
    var datas = [];
    var ckbedBsoe = $("#bsoe-choose b.true");
    var ckbedBall = $("#ball-choose b.true");

    for (var i = 0; i < ckbedBall.length; i++) {
        datas.push(~~$(ckbedBall[i]).attr("data-c"));
    }
    var chkD = [];
    for (var i = 0; i < ckbedBsoe.length; i++) {
        var t = $(ckbedBsoe[i]).attr("data-c");
        chkD.push(t);
    }
    if (chkD.length == 1) {
        if ($.inArray("s", chkD) > -1) {
            datas.push(0, 1, 2, 3, 4);
        } else if ($.inArray("o", chkD) > -1) {
            datas.push(1, 3, 5, 7, 9);
        } else if ($.inArray("e", chkD) > -1) {
            datas.push(2, 4, 6, 8, 0);
        } else if ($.inArray("b", chkD) > -1) {
            datas.push(5, 6, 7, 8, 9);
        }
    } else {
        if ($.inArray("s", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push(0, 2, 4);
        } else if ($.inArray("s", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push(1, 3);
        } else if ($.inArray("b", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push(6, 8);
        } else if ($.inArray("b", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push(5, 7, 9);
        }
    }


    $(".nums span[class^=no]").removeClass("bgLight");
    var spans = $(".nums span[class^=no]");
    spans.removeClass("bgLight");
    var length = spans.length;
    for (var i = 0; i < length; i++) {
        var d = $(spans[i]).text();
        if ($.inArray(~~d, datas) > -1) {
            $(spans[i]).addClass("bgLight");
        }
    }
};
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
        $(function () {
            LoadSdcTipSet();
            $(".iconHelp").live("mouseenter", function () {
                $(".helpWindow").fadeIn(400);
            });

            $(".iconHelp").live("mouseleave", function () {
                $(".helpWindow").fadeOut(400);
            });
        });
    }
});