// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.search.split('?r=')[1];
var lotMenu = 'sdc_memu';
var lotteryLuzhu = "";

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);

    }
});