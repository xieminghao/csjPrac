// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotMenu = 'cqssc_memu';
var lotteryLuzhu = "";
function changeData(ball, dt) {
    $.get("/shishicai/specialformdata", { ball: ball, dateType: dt, t: Math.random() }, function (text) {
        $('#table-datas').html(text);
    });
}
function updateFormDatas() {
    var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
    changeData(ball, $("#dataType").val());
}
$.ajax({
    url: host+pathname,
    data:{},
    datatype:'html',
    type:'get',
    success: function(res){
        $('.lot-wrap').replaceWith(res);
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/navdrag.js',type:'text/javascript'}).appendTo($('body'));

        $(" .lot-search .car-num .lot-number-omit .ball li a").on("click", function () {
            $(" .lot-search .car-num .lot-number-omit .ball li a").removeClass("cur");
            $(this).addClass("cur");
            var ball = $(this).attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });
        $("#dataType").bind("change", function () {
            var ball = $(".lot-search .car-num .lot-number-omit .ball .cur").attr("data-ball") - 1;
            changeData(ball, $("#dataType").val());
        });

        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/lotcommon.js',type:'text/javascript'}).appendTo($('body'));
        $("<scri"+"pt>"+"</scr"+"ipt>").attr({src:'../../script/lot/cqssc/award.js',type:'text/javascript'}).appendTo($('body'));
    }
});