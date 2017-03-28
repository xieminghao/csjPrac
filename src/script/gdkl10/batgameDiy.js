// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);

// 	$('.feedbackDiv').remove();
// 	$('li[data-tag="zh"]').remove();
// 	$('li[data-tag="tbm"]').remove();
// 	$('li[data-tag="sjyy"]').remove();


// }

$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	data:{},
	datatype:'html',
	type:'get',
	success: function(res){
		$('.lot-wrap').replaceWith(res);

		$(function () {
            tick();
            $.get('/gdkl10/gethistoryandbetgame', { count: 20, t: Math.random() },
                function (result) {
                    var htmlrs = "";
                    result = eval('(' + result + ')');
                    var table = '<table  class="lot-table">';
                    for (var j = 0; j < result.itemArray.length; j++) {
                        htmlrs = appendTable(result.itemArray[j], "☆");
                        if (htmlrs) {
                            table += '<tr><td style="height:21px; background-color:#F0F0F0;border-bottom:none;">';
                            table += htmlrs.head;
                            table += '</td></tr><tr><td style="border:none;">';
                            table += htmlrs.table;
                            table += '</td></tr>';
                        }
                    }
                    table += '</table>';
                    $("#historyBetGame").html(table);
                });
        });

        var pId = 0;
        var betCount = 0;
        var tickTimer = null;

         function tick() {
             $.get('/gdkl10/getcurrentbetgame', { t: Math.random() },
                    function (result) {
                        result = eval('(' + result + ')');
                        var allBetCount = betCount;
                        var nPid = pId;
                        var htmlrs = appendTable(result.itemArray[0], "★");
                        $("#newBetGame").html(htmlrs.head);
                        $("#newBetGameData").html(htmlrs.table);
                        if (pId > 0 && (htmlrs.betCount != allBetCount || nPid != htmlrs.pId)) {
                            //if ($('#soundCheckBox')[0].checked) PlaySound();
                            allBetCount = htmlrs.betCount;
                            nPid = htmlrs.pId;
                        }
                        //if (tickTimer) clearTimeout(tickTimer);
                        //tickTimer = setTimeout(tick, 20000);
                    });
                }

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
        function appendTable(betGamesItem, starStr) {
            var result = {};
            var index = 0;
            var span = betGamesItem.periodNumber == "undefined" ? "" : betGamesItem.periodNumber + "期 ";
            var star = "";
            for (var i = 0; i < betGamesItem.star; i++) {
                star = star + starStr;
            }
            if (betGamesItem.data && betGamesItem.data.length > 0) {
                span = span + star + " 参考";
                span = span + "<span style='margin-left:20px;'>开奖号码：";
                if (betGamesItem.code == "") {
                    span = span + "等待开奖";
                }
                else {
                    span = span + betGamesItem.code;
                }
                span += '</span>';
            }

            result.head = span;
            var table = "<table style='width:100%;'>";

            var betData = betGamesItem.data;
            var dataCount = betData.length;
            var allCount = 0;
            for (var i = 0; i < betData.length; i++) {
                var newTable = "";
                newTable = "<tr>";
                newTable = newTable + "<td>";
                newTable = newTable + betData[i].name;
                newTable = newTable + "</td>";
                var tdCount = 0;
                for (var j = 0; j < betData[i].data.length; j++) {
                    tdCount = tdCount + 1;
                    allCount = allCount + 1;

                    newTable = newTable + "<td style='width: 174px;height: 29px;line-height: 24px;padding-left: 10px;text-align: left;'>";
                    newTable = newTable + "<span style='color:" + betData[i].data[j].color + ";'>" + betData[i].data[j].code + "</span>";
                    if (betData[i].data[j].result == "1") {
                        newTable = newTable + "<span style='color:Red;'>(赢)</span>";
                    }
                    else if (betData[i].data[j].result == "3") {
                        newTable = newTable + "<span style='color:Gray;'>(平)</span>";
                    }
                    newTable = newTable + "</td>";
                }
                for (var k = tdCount; k < 3; k++) {
                    newTable = newTable + "<td style='width: 174px;height: 29px;line-height: 24px;padding-left: 10px;text-align: left;'>&nbsp;</td>";
                }
                newTable = newTable + "<tr>";

                table = table + newTable;
            }
            table = table + "</table>";
            result.table = table;
            result.betCount = allCount;
            result.pId = betGamesItem.period;
            return result;
        }

	}
});


