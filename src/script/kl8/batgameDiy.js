// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
var lotMenu = 'kl8_memu';

function PlaySound() {
    try {
        var ieVersion = "-1";
        var ua = navigator.userAgent.toLowerCase();
        if (window.ActiveXObject)
            ieVersion = ua.match(/msie ([\d.]+)/)[1];

        if (parseFloat(ieVersion) > 0 && parseFloat(ieVersion) < 6)
            document.getElementById("sound").innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' width='1' height='1'><param name='movie' value='/res/themes/images/notice.swf'><param name='quality' value='high'><param name='wmode' value='transparent'><embed src='/res/themes/images/notice.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='1' height='1'></embed></object>";
        else
            document.getElementById("sound").innerHTML = "<embed src='/res/themes/images/notice.swf' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='1' height='1'></embed>";

    } catch (e) { };
}

//免费推荐
function gethtml(star, data, data1, number) {
    var vhtml = "";
    vhtml += "<table style=\"width: 100%; margin: 0px;\" class=\"lot-table\" id=\"tb" + data1.DrawingDate + "" + data1.Period + "\">";
    vhtml += "<tbody><tr>";
    if (1 == star) {
        vhtml += "<td colspan=\"4\" class=\"betgame-td2\">" + data1.Period + "★★★ 参考<span style=\"margin-left: 20px;\">开奖号码：等待开奖</span></td>";
    } else {
        vhtml += "<td colspan=\"4\" class=\"betgame-td2\">" + data1.Period + "☆☆☆ 参考<span style=\"margin-left: 20px;\">开奖号码：" + number + "</span></td>";
    }
    vhtml += "</tr>";

    vhtml += "<tr>";
    vhtml += "<td>推荐号码</td>";
    vhtml += "<td class=\"betgame-td3\" style='width:200px;'><span>" + data.ResultStr + "</span><span style=\"color:red\">" + data.ResultDisplay + "</span></td>";
    vhtml += "<td class=\"betgame-td3\" style='width:100px;'><span>总和" + data.OddEven + "</span><span style=\"color:red\">" + data.OddEvenDisplay + "</span></td>";
    vhtml += "<td class=\"betgame-td3\" style='width:100px;'><span>总和" + data.BigSmall + "</span><span style=\"color:red\">" + data.BigSmallDisplay + "</span></td>";
    vhtml += "</tr>";

    vhtml += "</tbody></table>";

    return vhtml;
}
//历史开奖记录
function openhistory() {
    $.get('/kl8/openhistory', { t: Math.random() }, function (result) {
        $("#opencodelist").html(result);
    }, 'html');
}

function betgameset() {
    $.get('/kl8/getcurrentbetgame', { t: Math.random() }, function (result) {
        if (result != null) {
            if (result.curData != null) {
                $("#newBetGameData").html(gethtml(1, result.curData.SelectTwoSide, result.curData, ""));
            }

            if (result.hisData != null) {
                $("#historyBetGame table:last").remove();
                $("#historyBetGame").prepend(gethtml(2, result.hisData.SelectTwoSide, result.hisData, result.hisData.Result));
            }
           
        }
    }, 'json');
    openhistory();
}


$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').replaceWith(res);

		$(function () {

            openhistory();
        });


	}
});


