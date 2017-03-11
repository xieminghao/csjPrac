/**
 * Created by liutongwang on 2017/3/9.
 */
// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'pk10_memu';
var alarm = '';
var lotteryLuzhu = "";
function refreshData() {
    alarm.process();
}

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/numposalarm.js',type:'text/javascript'}).appendTo($('body'));
        alarm = new Alarm("pk10");
    }
});