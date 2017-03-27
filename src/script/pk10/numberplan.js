// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
//var lotteryLuzhu = "";

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'GET',
    success: function(res){
        $('.pk10_bodyBackground').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/plan/plan.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/plan/pk10_plan.js',type:'text/javascript'}).appendTo($('body'));
    }
});