// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'pk10_memu';
var lotteryLuzhu = "";
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.article').replaceWith(res);
        // console.log(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao4home.js',type:'text/javascript'}).appendTo($('body'));
    }
});