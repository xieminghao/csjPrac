// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
function Search() {
    $.get("/pk10/kaijiang?date=" + $("#dateData").val(), null, function (text) {
        $('#history-table').html(text);
        clearBsoeChk(1);
        clearChk();
        clearDuiziChk();
    });
}
function clearDuiziChk() {
    $("#duizi").removeClass("true");
    $(".nums i").removeClass("noshade");
    $(".nums").removeClass("shade");
}
function checkDuizi() {
    $(".nums").removeClass("num-bs num-oe shade-num shade-oe shade-bs");
    $(".nums i").removeClass("noshade-num noshade-oe noshade-bs");
    $(".nums").addClass("shade-num");
    var nums = $(".nums");
    var length = nums.length;
    if (length <= 1) {
        return;
    }
    var tmp = [];
    var num_i = $(nums[length - 1]).find('i');
    for (var j = 0; j < 10; j++) {
        tmp.push($(num_i[j]).attr("class"));
    }

    for (var i = nums.length - 2; i >= 0; i--) {
        var num_i = $(nums[i]).find('i');
        for (var j = 0; j < 10; j++) {
            var t = $(num_i[j]).attr("class");
            if (t == tmp[j]) {
                $(num_i[j]).addClass("noshade-num");
                $($(nums[i + 1]).find('i')[j]).addClass("noshade-num");
            }
            tmp[j] = t;
        }
    }
}
$("#ball-choose b[class!=inputBtn],#bsoe-choose b[class!=inputBtn][id!=duizi]").click(function () {
    clearDuiziChk();
});

function showNum() {
    if ($("#duizi").attr("class").indexOf("true") < 0) {
        var datas = [];
        var ckbeds = $("#ball-choose b.true");
        var ckbedBsoe = $("#bsoe-choose b.true");

        for (var i = 0; i < ckbeds.length; i++) {
            datas.push($(ckbeds[i]).attr("data-c"));
        }
        var chkD = [];
        for (var i = 0; i < ckbedBsoe.length; i++) {
            var t = $(ckbedBsoe[i]).attr("data-c");
            chkD.push(t);
        }

        if (chkD.length == 1) {
            if ($.inArray("s", chkD) > -1) {
                datas.push(1, 2, 3, 4, 5);
            } else if ($.inArray("o", chkD) > -1) {
                datas.push(1, 3, 5, 7, 9);
            } else if ($.inArray("e", chkD) > -1) {
                datas.push(2, 4, 6, 8, 10);
            } else if ($.inArray("b", chkD) > -1) {
                datas.push(6, 7, 8, 9, 10);
            }
        } else {
            if ($.inArray("s", chkD) > -1 && $.inArray("e", chkD) > -1) {
                datas.push(2, 4);
            } else if ($.inArray("s", chkD) > -1 && $.inArray("o", chkD) > -1) {
                datas.push(1, 3, 5);
            } else if ($.inArray("b", chkD) > -1 && $.inArray("e", chkD) > -1) {
                datas.push(6, 8, 10);
            } else if ($.inArray("b", chkD) > -1 && $.inArray("o", chkD) > -1) {
                datas.push(7, 9);
            }
        }

        var showtype = $("#show-type .cur").attr("data-type");

        $(".nums").removeClass("num-bs num-oe shade-num shade-oe shade-bs");
        $(".nums i").removeClass("noshade-num noshade-oe noshade-bs");

        if (datas.length > 0) {
            $(".nums").addClass("shade-" + showtype);
        }
        for (var i = 0; i < datas.length; i++) {
            var c = ".pk-no" + datas[i];
            $(c).addClass("noshade-" + showtype);
        }
        if (datas.length == 0&&showtype != "num") {
            $(".nums").addClass("num-" + showtype);
        }
    } else {
        checkDuizi();
    }
}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'GET',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/pk10/award.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            LoadPk10TipSet();

            $("#duizi").bind("click", function () {
                var flag = $(this).attr("enable") == "0";
                if (flag) return;

                clearChk(1);
                clearBsoeChk(1);

                if ($(this).attr("class") == "newCheckBox") {
                    $(this).addClass("true");
                    checkDuizi();
                } else {
                    $(this).removeClass("true");
                    $(".nums i").removeClass("noshade");
                    $(".nums").removeClass("shade");
                    showNum();
                }
            });

            $("#show-type a").live("click", function () {
                if ($("#duizi").attr("class").indexOf("true") > 0)
                    return;

                $("#show-type a").removeClass("cur");
                $(this).addClass("cur");
                showNum();
                if ($(this).attr("data-type") != "num") {
                    $("#duizi").css({ cursor: "default" }).attr("enable","0");
                } else {
                    $("#duizi").css({ cursor: "pointer" }).attr("enable", "1");
                }
            });
        })
    }
});