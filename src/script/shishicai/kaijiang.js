// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
function reloadNumberStatRemind() {
    $.get("/stat/numberStat?lotteryId=1", { t: Math.random() }, function (data) {
        if (data) {
            var html = '';
            html += '<td>' + data.Num0 + '</td>';
            html += '<td>' + data.Num1 + '</td>';
            html += '<td>' + data.Num2 + '</td>';
            html += '<td>' + data.Num3 + '</td>';
            html += '<td>' + data.Num4 + '</td>';
            html += '<td>' + data.Num5 + '</td>';
            html += '<td>' + data.Num6 + '</td>';
            html += '<td>' + data.Num7 + '</td>';
            html += '<td>' + data.Num8 + '</td>';
            html += '<td>' + data.Num9 + '</td>';
            html += '<td>' + data.Odd + '</td>';
            html += '<td>' + data.Even + '</td>';
            html += '<td>' + data.Big + '</td>';
            html += '<td>' + data.Small + '</td>';
            html += '<td>' + data.Dragon + '</td>';
            html += '<td>' + data.Tiger + '</td>';
            html += '<td>' + data.Equal + '</td>';
            $("#todayNumberStatData").html(html);
        }
    }, 'json');
}
function reloadTwoBallRemind() {
    $.get("/stat/TwoBallRemind?lotteryId=1", { t: Math.random() }, function (data) {
        var json = eval(data);
        $("#twoball_balls").text(json.TwoSided.length > 0 ? json.TwoSided : "无");
        $("#twoball_issuetoday").text(json.IssueToday);
        $("#twoball_issuenext").text(json.IssueNext);
        $("#twoball_omitcur").text(json.OmitCurrent);
        $("#twoball_omitmax").text(json.OmitTodayMax);
    },'json');
}
function reloadChangLong() {
    $.get("/stat/ChangLongWarn?lotteryId=1", { t: Math.random() }, function (text) {
        $("#changlong_info").html(text);
    });
}
function Search() {
    $.get("/shishicai/kaijiang?date=" + $("#dateData").val(), null, function (text) {
        $('#history-table').html(text);
        clearBsoeChk();
        clearChk();
    });
}
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

}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/cqssc/award.js',type:'text/javascript'}).appendTo($('body'));
        $(function () {
            LoadCqssscTipSet();
            $(function () {
                $(".iconHelp").live("mouseenter", function () {
                    $(".helpWindow").fadeIn(400);
                });

                $(".iconHelp").live("mouseleave", function () {
                    $(".helpWindow").fadeOut(400);
                });
            });
        })
    }
});