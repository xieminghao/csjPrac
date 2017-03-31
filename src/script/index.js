$(document).ready(function () {
    var ad;
    var page = 1;//初始化当前的版面为1
    var $show = $("#lanrenzhijia").find(".web_video_listTwo");//找到图片展示区域
    var page_count = $show.find("ul").length;
    var $width_box = $show.parents("#wai_box").width();//找到图片展示区域外围的div



    $("#lanrenzhijia").find("#nav li").click(function () {
        $index = $(this).index();
        page = $index + 1;

        $show.animate({ left: -($width_box * $index) }, "normal");
        $(this).addClass("hover").siblings("li").removeClass("hover");
        return false;
    })

    ad = setInterval(function () { nextAnimated() }, 5000);

    $("#wai_box").hover(
      function () {
          clearInterval(ad);
      },
      function () {
          ad = setInterval(function () { nextAnimated() }, 5000);
      }
    )
    function nextAnimated() {
        //首先判断展示区域是否处于动画
        if (!$show.is(":animated")) {
            if (page >= 5) {
                $show.animate({ left: 0 }, "normal");
                page = 1;
                $number = 0;
            } else {
                $show.animate({ left: '-=' + $width_box }, "normal");
                page++;
                $number = page - 1;
            }

            $("#lanrenzhijia").find("#nav li:eq(" + $number + ")").addClass("hover").siblings("li").removeClass("hover");
            return false;
        }
    }



    //首页应用推荐
    AppLoad();

});

//从一个给定的数组arr中,随机返回num个不重复项
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = arr;
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i < num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length > 0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random() * temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}


var dataObj = [
    { "title": "手机自动下注", "img": "mobile/mobile-abm.png", "link": "http://www.1396app.com/android/app/664?utm=1399p" },
     { "title": "博应用", "img": "mobile/mobile-app.png", "link": "http://www.1396app.com/" },
      { "title": "北京赛车PK10", "img": "mobile/mobile-pk10.png", "link": "http://www.1396app.com/android/app/534?utm=1399p" },
       { "title": "重庆时时彩", "img": "mobile/mobile-cqssc.png", "link": "http://www.1396app.com/ios/app/535?utm=1399p" },
        { "title": "广东快乐十分", "img": "mobile/mobile-gdkl10.png", "link": "http://www.1396app.com/ios/app/536?utm=1399p" },
         { "title": "时时彩宝典", "img": "mobile/mobile-ssc.png", "link": "http://www.1396app.com/ios/app/379?utm=1399p" },
          { "title": "江苏快3", "img": "mobile/mobile-jsk3.png", "link": "http://www.1396app.com/ios/app/388?utm=1399p" },
           { "title": "幸运农场", "img": "mobile/mobile-xync.png", "link": "http://www.1396app.com/ios/app/422?utm=1399p" },
            { "title": "PK10开奖视频", "img": "mobile/mobile-pk10-video.png", "link": "http://www.1396app.com/android/app/380?utm=1399p" },
             { "title": "时时彩开奖视频", "img": "mobile/mobile-shishicai-video.png", "link": "http://www.1396app.com/ios/app/537?utm=1399p" },
             //{ "title": "六合宝典", "img": "mobile-hjkj.png", "link": "http://soft.royaleu.com/6hbd/" },
             //{ "title": "六合彩视频", "img": "mobile-lhcsp-video.png", "link": "http://soft.royaleu.com/6hc-video/" },
             { "title": "北京快乐8", "img": "mobile/mobile-bjkl8.png", "link": "http://www.1396app.com/android/app/2628?utm=1399p" },
             { "title": "博世界", "img": "mobile/mobile-bsj.png", "link": "http://www.1396mm.com/" }
];
function AppLoad()
{
    var newData = getArrayItems(dataObj, 10);

    var template = $("#app_List").html();
    var html = [];
    for (var i = 0, len = newData.length; i < len; i++) {
        newData[i].img = " <img src='" + $("#app_List").attr("link")+ newData[i].img + "' alt=" + newData[i].title+ " />";
        try {
            html.push(template.replaceWith(newData[i]));
        } catch(e){}
    };
    try {
        $('#app_List').html(html.join("")).show();
    }catch(e){}
}
