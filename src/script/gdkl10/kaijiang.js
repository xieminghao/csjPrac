/**
 * Created by liutongwang on 2017/3/9.
 */
// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";

function Search() {
    $.get("/gdkl10/kaijiang?date=" + $("#dateData").val(), null, function (text) {
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
            datas.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        } else if ($.inArray("o", chkD) > -1) {
            datas.push(1, 3, 5, 7, 9, 11, 13, 15, 17, 19);
        } else if ($.inArray("e", chkD) > -1) {
            datas.push(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);
        } else if ($.inArray("b", chkD) > -1) {
            datas.push( 11, 12, 13, 14, 15, 16, 17, 18, 19,20);
        }
    } else {
        if ($.inArray("s", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push(2, 4,6, 8, 10);
        } else if ($.inArray("s", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push(1, 3, 5, 7, 9);
        } else if ($.inArray("b", chkD) > -1 && $.inArray("e", chkD) > -1) {
            datas.push(12, 14, 16, 18, 20);
        } else if ($.inArray("b", chkD) > -1 && $.inArray("o", chkD) > -1) {
            datas.push(11, 13, 15, 17, 19);
        }
    }
    $(".nums span[class^=no]").removeClass("bgLight");
    var spans = $(".nums span[class^=no]");
    spans.removeClass("bgLight");
    var length = spans.length;
    for (var i = 0; i < length; i++) {
        var d = ~~$(spans[i]).text();
        if ($.inArray(d, datas) > -1) {
            $(spans[i]).addClass("bgLight");
        }
    }
}

function reloadBallStatRemind() {
    $.get("/stat/BallStat?lotteryId=2", {t:Math.random()}, function (data) {
        var json = eval(data);
        if (json.Data && json.Data.length == 10) {
            var html = "";
            for (var i = 0; i < json.Data.length; i++) {
                html += '<td><div class="web_bigAndSmall2"><ul>';
                html += '<li>' + json.Data[i].big + '</li>';
                html += '<li>' + json.Data[i].small + '</li>';
                html += '<li>' + json.Data[i].odd + '</li>';
                html += '<li style="border:none;">' + json.Data[i].even + '</li>';
                html += '</ul></div></td>';
            }
        }
        $("#todayDoubleData").html(html);
    }, 'json');
}

function reloadChangLong() {
    $.get("/stat/ChangLongWarn?lotteryId=3", { t: Math.random() }, function (text) {
        $("#changlong_info").html(text);
    });
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
    	$("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/gdkl10/award.js',type:'text/javascript'}).appendTo($('body'));

    	
	    $(function () {
	        LoadGdkl10TipSet();
	        $(".iconHelp").live("mouseenter", function () {
	            $(".helpWindow").fadeIn(400);
	        });

	        $(".iconHelp").live("mouseleave", function () {
	            $(".helpWindow").fadeOut(400);
	        });
	    })
	    
    }
});