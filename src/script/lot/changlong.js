$(function () {
    $(".cl_s_block i").bind("click", function () {
        if ($(this).attr("class").indexOf("cl_selected") > 0) {
            $(this).removeClass("cl_selected");
        } else {
            $(this).addClass("cl_selected");
        }
        userchoose();
    });
    $(".cl_s_r_operating i").bind("click", function () {
        if ($(this).attr("class").indexOf("cl_selected") > 0) {
            $(this).removeClass("cl_selected");
            cSound = 0;
        } else {
            $(this).addClass("cl_selected");
            cSound = 1;
        }
        userchoose();
    });
    $("#s_all").bind("click", function () {
        $(".cl_s_block i").addClass("cl_selected");
        userchoose();
    });
    $("#s_none").bind("click", function () {
        $(".cl_s_block i").removeClass("cl_selected");
        userchoose();
    });

    $('#s_times').bind("change", function () {
        userchoose();
    });

    $("#c_type a").bind("click", function () {
        var ot = $("#c_type a.hover").attr('data-type');
        var nt = $(this).attr('data-type');
        if (nt == ot) return;
        $("#c_type a").removeClass("hover");
        $(this).addClass("hover");
        userchoose();
        if ($("#c_type a.hover").attr('data-type') == "-1") {
            $("#tdtip").text("连续未开期数");
        } else {
            $("#tdtip").text("连续开出期数");
        }
    });

    var changlongCookie = $.cookie("changlong", "lotterys");
    $(".cl_s_block i").each(function () {
        if (changlongCookie != "" && !changlongCookie) {
            $(this).addClass("cl_selected");
        } else if ((',' + changlongCookie + ',').indexOf(',' + $(this).attr("data-lot") + ',') > -1) {
            $(this).addClass("cl_selected");
        }
    });

    function userchoose() {
        var c_lots = $(".cl_s_block i[class*=cl_selected]");
        var lots = [];
        for (var i = c_lots.length - 1; i >= 0; i--) {
            lots.push(~~$(c_lots[i]).attr("data-lot"));
        }

        leastUpdateTime = 0;
        cLotterys = lots.join(',');
        cSound = $("#ckbSound").attr("class").indexOf("cl_selected") > -1 ? 1 : 0;
        cTimes = $("#s_times").val();

        $.cookie("changlong", "", { least: leastUpdateTime, lotterys: cLotterys, sound: cSound, times: cTimes }, { expires: 24 * 60 * 60 * 30, path: "/", secure: false });

        //请求数据
        if (lots.length > 0) {
            refreshChanglong(false);
        } else {
            $("#history tr[class!=head]").remove();
        }
    }

    var leastUpdateTime = 0;
    var cLotterys = '';
    var cSound = 0;
    var cTimes = 4;

    //刷新长龙数据
    //auto：是否自动更新
    function refreshChanglong(auto) {
        var type = $("#c_type a.hover").attr('data-type');
        $.get("/stat/changlong/",
            {
                type: type, least: leastUpdateTime,
                lotterys: $.cookie("changlong", "lotterys"),
                comeTimes: $("#s_times").val(),
                t: Math.random()
            },
            function (d) {
                if (d) {
                    $("#history tr[class!=head]").remove();
                    leastUpdateTime = d.updatetime;
                    var trs = '';
                    var clsName = "odd";
                    var count = d.datas.length;
                    for (var i = 0; i < count; i++) {
                        var data = d.datas[i];
                        trs += '<tr class="' + (i % 2 == 0 ? 'odd' : 'even') + '">';
                        trs += '<td>' + data.lotteryName + '</td>';
                        if (data.betType.length > 0) {
                            trs += '<td><i>' + data.position + '&nbsp;' + data.betItem + data.betType + '形态</i></td>';
                        }
                        else
                            trs += '<td><i>' + data.position + '&nbsp;' + data.betItem + '</i></td>';
                        trs += '<td>' + data.times + ' 期</td>';
                        if (data.lotteryCode == 'kl8') {
                            if (data.position == "总和") {
                                trs += '<td><a href="/kl8/luzhutotal/#lzpos" target="_blank">查看</a></td>';
                            } else if (data.position == "上下盘") {
                                trs += '<td><a href="/kl8/luzhuupordown/#lzpos" target="_blank">查看</a></td>';
                            } else {
                                trs += '<td><a href="/kl8/luzhuoddoreven/#lzpos" target="_blank">查看</a></td>';
                            }
                        } else if (data.lotteryCode == 'pl3' || data.lotteryCode == 'fc3d') {
                            if (data.position == "总和") {
                                trs += '<td><a href="/' + data.lotteryCode + '/luzhutotal/#lzpos" target="_blank">查看</a></td>';
                            } else {
                                trs += '<td><a href="/' + data.lotteryCode + '/luzhubigorsmall/#lzpos" target="_blank">查看</a></td>';
                            }
                        }
                        else if (data.lotteryCode == 'jsk3' || data.lotteryCode == 'shssl') {
                            trs += '<td><a href="/' + data.lotteryCode + '/luzhutotal/#lzpos" target="_blank">查看</a></td>';
                        }
                        else {
                            trs += '<td><a href="/' + data.lotteryCode + '/luzhuanalysis?mode=3&pos=' + encodeURIComponent(data.position) + '&type=' + encodeURIComponent(data.betItem) + '" target="_blank">查看</a></td>';
                        }
                        if (data.lotteryCode == 'pl3' || data.lotteryCode == 'fc3d' || data.betType!="") {
                            trs += '<td></td>';
                        } else {
                            trs += '<td><a href="/' + data.lotteryCode + '/changlongdaystat?position=' + encodeURIComponent(data.position) + '&long=' + encodeURIComponent(data.betItem) + '#clsplit" target="_blank">查看</a></td>';
                        }
                    }
                    $("#history .head").after(trs);
                    if (auto && count > 0 && cSound == 1) {
                        soundWarn();
                    }
                }
            }, 'json');
    }

    // var tempCount = 0;
    function soundWarn() {
        var bg = $('#duSound');
        try {
            if (bg[0].load) {
                bg[0].load();
                bg[0].play();
            } else {
                if (bg.length) bg.remove();
                bg = document.createElement('bgsound');
                bg.id = "duSound";
                bg.src = '/res/themes/images/du.mp3';
                bg.loop = 1;
                $(bg).appendTo(document.body);
            }
        } catch (e) { };
        //if (++tempCount < 5) {
        //    setTimeout(function () { soundWarn(); }, 1000);
        //}
        //else {
        //    tempCount = 0;
        //}
    }

    setInterval(function () { refreshChanglong(true) }, (Math.random() * 10000 + 15000));
});