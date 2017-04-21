// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var searchList = decodeURIComponent(decodeURIComponent(location.search)).split('?r=')[1].split('&');
var pathname = searchList[0];
var stit = searchList[1];
document.title = document.title.replace('幸运飞艇技巧',stit)
var keywords = $("meta[name=keywords]").attr("content");
var description = $("meta[name=description]").attr("content");
$("meta[name=keywords]").attr('content', keywords.replace('幸运飞艇,幸运飞艇开奖结果,幸运飞艇投注技巧,幸运飞艇玩法', stit));
$("meta[name=description]").attr('content', description.replace('排列3高手技巧_排列3杀号定胆技巧', stit));
var lotMenu = 'xyft_memu';
var lotteryLuzhu = "";

$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);

        $sublink = $("div.method-position>a")[1];
        var sublinkhref = $sublink.getAttribute('href');
        var subarr = sublinkhref.split('/');
        $sublink.href = '/' + subarr[2] + '/' + subarr[1];

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/public/jiqiao_common.js',type:'text/javascript'}).appendTo($('body'));
    }
});