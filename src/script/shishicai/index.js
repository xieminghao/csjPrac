// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
var successFn = function(res){
    $('.index-history').replaceWith(res);
    $('.feedbackDiv').remove();
    //$('li[data-tag="zh"]').remove();
    //$('li[data-tag="sjyy"]').remove();
}

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: successFn
});