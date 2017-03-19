// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');

var successFn = function(res){
    //$('#lot-content').html(res);
    $('.index-history').replaceWith(res);
};
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: successFn
});