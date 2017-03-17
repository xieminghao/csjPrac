// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
function reloadData() {
    $.get('/shishicai/ColdHotNumber?' + Math.random(), null, function (text) {
        $('#lot-wrap' ).html(text);
    });
};
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("#times-show ").live("click",function () {
            if ($("b", $(this)).attr("class") == "checkbox") {
                $("b", $(this)).addClass("checked");
                $(".redBalls2").show()
            } else {
                $("b", $(this)).removeClass("checked");
                $(".redBalls2").hide()
            }
        });
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/cqssc/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});