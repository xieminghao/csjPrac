// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var searchList = decodeURIComponent(decodeURIComponent(location.search)).split('?r=')[1].split('&');
var pathname = searchList[0];
var stit = searchList[1];
document.title = document.title.replace('福彩3d选号技巧_福彩3d杀号技巧_福彩3d中奖技巧',stit)
var keywords = $("meta[name=keywords]").attr("content");
var description = $("meta[name=description]").attr("content");
$("meta[name=keywords]").attr('content', keywords.replace('福彩3d选号技巧_福彩3d杀号技巧_福彩3d中奖技巧', stit));
$("meta[name=description]").attr('content', description.replace('福彩3d选号技巧_福彩3d杀号技巧_福彩3d中奖技巧', stit));

var lotMenu = 'fc3d_memu';
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