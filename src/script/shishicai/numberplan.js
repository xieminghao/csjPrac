// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'GET',
    success: function(res){
        $('.cqssc_bodyBackground').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/plan/plan.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/plan/cqssc_plan.js',type:'text/javascript'}).appendTo($('body'));
    }
});