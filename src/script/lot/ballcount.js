/**
 * Created by liutongwang on 2017/3/7.
 */
$(function () {
    var selDate = $("#dateData").val();
    if (selDate) {
        var ss = selDate.split("-");
        if (ss && ss.length == 3) {
            var now = new Date();
            var d = now.getDate();
            var m = now.getMonth() + 1;
            var y = now.getFullYear();
            if (parseInt(ss[0]) != y || parseInt(ss[1]) != m || parseInt(ss[2]) != d) {
                return;
            }
        }
    }
    $.post('/home/getstat', {
        "id": lotteryId
    }, function (json) {
        if (json) {
            for (var i = 0; i < json.length; i++) {
                if (json[i].result.bigsmall) {
                    $("#stat_" + json[i].ball + "_bs").html(json[i].result.bigsmall);
                }
                if (json[i].result.oddeven) {
                    $("#stat_" + json[i].ball + "_oe").html(json[i].result.oddeven);
                }
            }
        }
    }, 'json');
});