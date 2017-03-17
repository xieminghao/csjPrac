// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'pk10_memu';
var chartLine = null;
var lotteryLuzhu = "";
function awardNewData() {
    $.get("/pk10/ajax", { ajaxHandler: 'GetNewestRecord', t: Math.random() }, function (data) {
        var numbers = data.numbers.split(',');
        var tr1 = $("#chart tr:first");
        var clsName = "odd";
        if (tr1) {
            clsName = tr1.attr("class") == "odd" ? "even" : "odd";
        }
        var html = '<tr class="' + clsName + '"><td><p class="p">' + data.period + '</p><p class="t">' + data.drawingTime;
        html += '</p></td><td class="nums shade-num">';
        for (var i = 0; i < numbers.length; i++) {
            html += '<i class="pk-no' + numbers[i] + '" name="num-' + numbers[i] + '"></i>';
        }
        html += '</td>';
        html += '<td name="spj"></td>';
        //html += '<td name="ch"></td>';
        //html += '<td name="zx"></td>';
        html += '<td name="odd"></td>';
        html += '<td name="even"></td>';
        html += '<td name="big"></td>';
        html += '<td name="small"></td>';
        html += '</tr>';
        tr1.before(html);
        $("#chart tr:last").remove();
        reloadData();
    }, 'json');

}
//更新图表
function reloadData() {
    var ball = $(".car-num .lot-number-omit .ball a.cur").attr("data-ball");
    var count = $("#selDate").val();
    $.get("/pk10/ballrulestat", { ball: ball, count: count, t: Math.random() }, function (data) {
        var chartDatas = [];
        if (data.success) {
            for (var i = 1; i < 11; i++) {
                chartDatas.push({ Name: "号码" + i, Value: data["num" + i] });
            }
            clearDraw();
            showSelectBall();
            var list = data.nums;
            var trs = $("#history tr[class!=head]");
            for (var i = 0; i < trs.length; i++) {
                var tr=$(trs[i]);
                if (i >= count) tr.hide();
                else {
                    tr.show();
                    var a = list[i], b = list[i + 1];
                    if (a > b) tr.find("[name=spj]").text("升").css("color", "#0000ff");//addClass("td_font_lightblue");
                    else if (a < b) tr.find("[name=spj]").text("降").css("color", "#00a200");//.addClass("td_draklightgreen");
                    else tr.find("[name=spj]").text("平").css("color", "#c3271d");//.addClass("td_red");
                    if (a % 2 != 0) tr.find("[name=odd]").text("单").css("color", "#c3271d");//.addClass("td_draklightgreen");
                    else tr.find("[name=even]").text("双").css("color", "#000");//.addClass("td_draklightgreen");
                    if (a > 5) tr.find("[name=big]").text("大").css("color", "#c3271d");//.addClass("td_lightblue");
                    else tr.find("[name=small]").text("小").css("color", "#000");//.addClass("td_lightblue");

                    if (a == ~~ball) {
                        tr.find("i[name=num-" + a + "]").removeClass("noshade-num").addClass("numsRed").attr("s", 1);
                    } else {
                        tr.find("i[name=num-" + a + "]").addClass("noshade-num");
                    }
                    tr.find("i[name=num-" + a + "]").addClass("numline");
                }
            }
            chartLine.reDraw();
            showColumn(" ", chartDatas, function () {
                return this.x + ':' + this.y + '(' + (Math.round(this.y / count * 10000) / 100.00) + '%)';
            });
        }
    }, 'json');
}

function showSelectBall() {
    var ball = $(".car-num .lot-number-omit .ball a.cur").attr("data-ball");
    if (ball == 0) return;
    var trs = $("#history tr[class!=head]");
    var show = false;
    if ($("#ckb-samepn b").hasClass("checked")) {
        show = true;
    }
    for (var i = 0; i < trs.length; i++) {
        var tr = $(trs[i]);

        if (show) {
            if (tr.find("i[name=num-" + ball + "]").attr("s") == 1) continue;
            tr.find("i[name=num-" + ball + "]").addClass("noshade-num");
        } else {
            tr.find("i[name=num-" + ball + "]").removeClass("noshade-num");
        }
    }
}
//清除所有
function clearDraw() {
    chartLine.clearLines();
    $("i").removeClass("noshade-num").removeClass("numsRed").removeClass("numline").attr("s", 0);

    $("#history td[name=even],#history td[name=odd],#history td[name=big],#history td[name=small]").text("");
    // $("#history td").removeClass("td_drakblue").removeClass("td_draklightgreen").removeClass("td_lightblue");
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
            $("#ckb-samepn").click(function () {
                var ball = $(".car-num .lot-number-omit .ball a.cur").attr("data-ball");
                if (ball == 0) return;
                var c = $("b", $(this)).attr("data-c");

                if ($("b", $(this)).attr("class") == "checkbox") {
                    $("b", $(this)).addClass("checked");
                } else {
                    $("b", $(this)).removeClass("checked");
                }
                showSelectBall();
            });
            $(" .lot-search .car-num .lot-number-omit .ball li a").on("click", function () {
                $(" .lot-search .car-num .lot-number-omit .ball li a").removeClass("cur");
                $(this).addClass("cur");
                var ball = $(this).attr("data-ball") - 1;
                //  changeData(ball, $("#dataType").val());
                reloadData();
            });
            $("#selDate").on("change", function () {
                reloadData();
            });
            require(['trendChart'], function (e) {
                chartLine = new e({ css: { noyl: "noyl", bline: "bline", lines: [".numline"] }, lineWidth: 2, lineColor: "#BB8569" });
                reloadData();
            });
        });
    }
});