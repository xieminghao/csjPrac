// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'gd11x5_memu';
var lotteryLuzhu = "";
function todaystatlist() {
    $.get('/gd11x5/_partialtodaystat', { code: "gd11x5", t: Math.random() }, function (text) {
        $('#tblist').html(text);
        loadData();
    });
}


$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/todaystat.js',type:'text/javascript'}).appendTo($('body'));
    }
});