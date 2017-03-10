// 每个页面值调用一次的请求根据页面的location来判断请求的接口
var host = 'http://120.76.188.66:8080'
var pathname = location.pathname.replace('index.html','');
var lotteryLuzhu = "";
// console.log(host+pathname);



$.ajax({
	// url: 'http://120.76.188.66:8080/pk10/',
	url: host+pathname,
	datatype:'html',
	type:'get',
	// headers: {'isaj': true},
	success: function(res){
		$('.lot-wrap').replaceWith(res);

		if (!Array.indexOf) {
	        Array.prototype.indexOf = function (obj) {
	            for (var i = 0; i < this.length; i++) {
	                if (this[i] == obj) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }

	    function awardData() {
	        $.get("/pk10/ajax", { ajaxHandler: 'GetNewestRecord', t: Math.random() }, function (data) {
	            var numbers = data.numbers.split(',');
	            var ball = $("#choose_ball a.currball").attr("ball");
	            var tr1 = $("#listTable ul li:first");
	            var winNum = numbers[ball - 1];
	            //var clsName = "odd";
	            //if (tr1) {
	            //    clsName = tr1.attr("class") == "odd" ? "even" : "odd";
	            //}
	            var html = '<li>';
	            html += '<span class="web_qhtime">' + data.period + ' ' + data.drawingTime + '</span>';
	            html += '<span class="web_block1 web_nine_balls" data-nums="' + data.numbers + '">' + numbers[ball - 1] + '</span>';
	            html += '<span class="web_block2" name="span_plan1"></span>';
	            html += '<span class="web_block2" name="span_plan1"></span>';
	            html += '<span class="web_block2" name="span_plan1"></span>';
	            html += '<span class="web_block2" name="span_plan2"></span>';
	            html += '<span class="web_block2" name="span_plan2"></span>';
	            html += '<span class="web_block2" name="span_plan2"></span>';
	            html += '<span class="web_block2" name="span_plan3"></span>';
	            html += '<span class="web_block2" name="span_plan3"></span>';
	            html += '<span class="web_block2" name="span_plan3"></span>';
	            html += '<span class="web_block2" name="span_plan4"></span>';
	            html += '<span class="web_block2" name="span_plan4"></span>';
	            html += '<span class="web_block2" name="span_plan4"></span>';
	            html += '<span class="web_block2" name="span_plan5"></span>';
	            html += '<span class="web_block2" name="span_plan5"></span>';
	            html += '<span class="web_block2" name="span_plan5"></span>';
	            html += '<span class="web_block3" name="span_planc"></span>';
	            html += '<span class="web_block3" name="span_planc"></span>';
	            html += '<span class="web_block3" name="span_planc" style="border-right:none;"></span>';
	            html += '</li>';
	            var $html = $(html);
	            var plans = [];
	            for (var i = 1; i <= 5; i++) {
	                plans.push(sys.getPlan(i));
	            }
	            for (var j = 1; j <= 5; j++) {
	                var tds = $html.find("span[name=span_plan" + j + "]");
	                var index = plans[j - 1].indexOf(winNum);
	                if (index > -1) {
	                    $(tds[index % 3]).text(winNum).addClass(sys.getPlanColor(j));
	                } else {
	                    $(tds).text("挂")
	                }
	            }
	            var cusPlan = sys.getCustom() == null ? [] : sys.getCustom().split(",");
	            if (cusPlan.length == 9) {
	                var ctds = $html.find("span[name=span_planc]");
	                var cindex = cusPlan.indexOf(winNum);
	                if (cindex > -1) {
	                    $(ctds[cindex % 3]).text(winNum).addClass(sys.getPlanColor("c"));
	                } else {
	                    $(ctds).text("挂")
	                }
	            }

	            tr1.before($html);
	            $("#listTable ul li:last").remove();
	            $("#listTable ul li:last").css({ "border-bottom": "none" });
	        }, 'json');

	    }

	    var sys = {
	        plan1: '2,4,1,8,10,3,9,6,7',
	        plan2: '8,10,9,5,6,7,4,3,2',
	        plan3: '8,10,7,2,6,5,9,1,4',
	        plan4: '2,1,3,5,6,7,4,10,8',
	        plan5: '7,10,5,8,4,6,3,9,1',
	        planDefault: [1, 4, 7, 2, 5, 8, 3, 6, 9],
	        getCustom: function () {
	            var ball = $("#choose_ball a.currball").attr("ball");
	            return $.cookie("pk10_ninegrid_" + ball);
	        },
	        setCustom: function (v) {
	            var ball = $("#choose_ball a.currball").attr("ball");
	            $.cookie("pk10_ninegrid_" + ball, "", v, { expires: 3600 * 24 * 30, path: "/", secure: false });
	        },
	        getPlan: function (p) {
	            return this["plan" + p].split(",");
	        },
	        getPlanColor: function (p) {
	            switch (p.toString()) {
	                case "1": return "web_blueTd";
	                case "2": return "web_redTd";
	                case "3": return "web_violetTd";
	                case "4": return "web_lightBlueTd";
	                case "5": return "web_lightGreenTd";
	                case "c": return "web_lightyellowTd";
	            }
	        },
	        stat: function () {
	            $("#listTable ul li span[name^=span_plan]").text("").removeClass().addClass("web_block2");
	            var rows = $("#listTable ul li");
	            var rowCount = rows.length;
	            var ball = $("#choose_ball a.currball").attr("ball");
	            var plans = [];
	            for (var i = 1; i <= 5; i++) {
	                plans.push(sys.getPlan(i));
	            }
	            var cusPlan = sys.getCustom() == null ? [] : sys.getCustom().split(",");
	            for (var i = 0; i < rowCount; i++) {
	                var winNum = $(rows[i]).find("span.web_nine_balls").attr("data-nums").split(",")[ball - 1];
	                $(rows[i]).find(".web_nine_balls").text(winNum);
	                for (var j = 1; j <= 5; j++) {
	                    var tds = $(rows[i]).find("span[name=span_plan" + j + "]");
	                    var index = plans[j - 1].indexOf(winNum);
	                    if (index > -1) {
	                        $(tds[index % 3]).text(winNum).addClass(sys.getPlanColor(j));
	                    } else {
	                        $(tds).text("挂")
	                    }
	                }
	            }
	            this.customStat();

	        },
	        customStat: function () {
	            $("#listTable ul li span[name=span_planc]").text("").removeClass().addClass("web_block3");
	            var rows = $("#listTable ul li");
	            var rowCount = rows.length;
	            var ball = $("#choose_ball a.currball").attr("ball");
	            var cusPlan = sys.getCustom() == null ? [] : sys.getCustom().split(",");
	            if (cusPlan.length == 9) {
	                for (var i = 0; i < rowCount; i++) {
	                    var winNum = $(rows[i]).find(".web_nine_balls").attr("data-nums").split(",")[ball - 1];
	                    var ctds = $(rows[i]).find("span[name=span_planc]");
	                    var cindex = cusPlan.indexOf(winNum);
	                    if (cindex > -1) {
	                        $(ctds[cindex % 3]).text(winNum).addClass(sys.getPlanColor("c"));
	                    } else {
	                        $(ctds).text("挂")
	                    }
	                }
	            }
	        }
	    }

	    $(function () {

	        $(".web_nineGrid2 li span:last-child").css({ "border-right": "none"});
	        $("#listTable ul li:last").css({ "border-bottom": "none" });

	        $(".web_nine_select i").click(function (e) {
	            $(this).parent().prev().html($(this).html());
	            $(this).parent().fadeOut(100);
	        });
	        $(".web_nine_select i").hover(
	          function () {
	              $(this).addClass("hover");
	          },
	          function () {
	              $(this).removeClass("hover");
	          }
	        );
	        $(".jtk").click(function (e) {
	            $(this).next().fadeIn(100);

	            $(this).parent().parent().mouseleave(function (e) {
	                $(this).find(".web_nine_select").fadeOut(100);
	            });
	        });


	        //clear
	        $(".web_custom a[name=clear]").on("click", function () {
	            for (var i = 0; i < sys.planDefault.length; i++) {
	                $("span.web_jtPos .jtk")[i].innerHTML = sys.planDefault[i];
	            }
	            $("#listTable ul li span[name=span_planc]").text("").removeClass().addClass("web_block3");
	            sys.setCustom("");
	            sys.customStat();
	        });
	        //submit
	        $(".web_custom a[name=submit]").on("click", function () {
	            var cusTdInput = $("span.web_jtPos .jtk");
	            var cusPlan = [];
	            for (var i = 0; i < cusTdInput.length; i++) {
	                var ci = cusTdInput[i].innerHTML;
	                if (cusPlan.indexOf(ci) > -1) {
	                    $.dialog({
	                        title: "提示",
	                        padding: '5px',
	                        content: "九宫中不可以出现重复的号码！",
	                        follow: $(".web_custom a[name=submit]")[0],
	                        ok: function () { }
	                    });
	                    return;
	                }
	                cusPlan.push(ci);
	            }
	            sys.setCustom(cusPlan.join(','));
	            sys.customStat();
	        });


	        //$("#listTable ul li").hover(
	        //    function () {
	        //        $(this).css("background", "#eee");
	        //    },
	        //    function () {
	        //        $(this).css("background", "#fff");
	        //    }
	        //);
	        var leftPos;
	        var x = $("#posTable").offset().left;
	        window.onresize = function () {
	            leftPos = $("#listTable").offset().left;
	            scrollMenu();
	        }
	        $(window).scroll(function (e) {
	            scrollMenu();
	        });
	        function scrollMenu() {
	            x = $("#listTable").offset().left;
	            if ($(document).scrollTop() > $("#listTable").offset().top) {
	                $("#posTable").addClass("web_nineposition").css("left", x + "px");
	            } else {
	                $("#posTable").removeClass("web_nineposition");
	            }
	        }


	        $("#choose_ball ul li a").on("click", function () {
	            $(".jsloading").show();
	            $(".web_nineBlick").hide();

	            $("#choose_ball li a.currball").removeClass("currball");
	            $(this).addClass("currball");

	            $.get("/pk10/nineplan", { ball: $(this).attr("ball"), t: Math.random() }, function (data) {
	                for (var i = 1; i <= 5; i++) {
	                    var tds = $("span.listBlock[name=plan_" + i + "] span");
	                    for (var j = 1; j < 10; j++) {
	                        $(tds[j - 1]).text(data.plans[i - 1][j - 1])
	                    }
	                    sys['plan' + i] = data.plans[i - 1].join(',');
	                }
	                sys.stat();

	                $(".jsloading").hide();
	                $(".web_nineBlick").show();
	            }, 'json');

	        });

	        function tdBgColor() {
	            for (var i = 1; i <= 5; i++) {
	                $(".listBlock[name=plan_" + i + "]").addClass(sys.getPlanColor(i));
	            }
	        }
	        tdBgColor();
	        sys.stat();

	        $(".jsloading").hide();
	        $(".web_nineBlick").show();

	    });
		
	}
});


