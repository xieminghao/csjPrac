// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
//var pathname = '/shishicai/experience';
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
function showMore() {
    if ($("#more").attr("title") == "查看更多") {
        $('#moreinfo').show();
        $('.tips').css('height', '80px');
        $("#more").attr("title", "隐藏更多");
    }
    else {
        $("#more").attr("title", "查看更多");
        $('#moreinfo').hide();
        $('.tips').css('height', '25px');
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
    }
});