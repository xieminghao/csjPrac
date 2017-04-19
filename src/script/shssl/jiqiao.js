// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var search = location.search;
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";

$.ajax({
    url: host+pathname+search,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao_common.js',type:'text/javascript'}).appendTo($('body'));
    }
});




