/****************************************************双色球走势图UI处理********************************************/
define(function (require, exports, module) {

    var _fn;
    var Fc3d = require("../../fc3d/seajslib/fc3d");
    var Class = require("../../fc3d/seajslib/classconfig");
    var Fc3dObj = null;
    var day = -1;
    var pageSize = parseInt(Class.PageSize);
    var bartype = 0;
    var number = 1;
    var action = 1;;//动作 1:基本走势 1:号码走势
    var lotterycode = "fc3d";
    //加载数据方法
    function Load(action, pageSize, day, number, type) {
        var requestUrl = "";
        switch (action) {
            case 1:
                requestUrl = "/" + lotterycode + "/basechart";
                break;
            case 2:
                requestUrl = "/" + lotterycode + "/positionchart";
                break;
            case 3:
                requestUrl = "/" + lotterycode + "/sumchart";
                break;
            default:
                window.location.href = "/error/404.html";
                break;
        }
        if (requestUrl != "") {
            Fc3dObj.ReRender();
            Fc3dObj.RenderTitle(action, number);
            $(".jsloading").show();
            Fc3dObj.getData(requestUrl, { quantity: pageSize, ball: number == "" ? 0 : (number - 1) }, function (data) {

                Fc3dObj.NumLotteryData = data.Result;
                Fc3dObj.RenderBody(action, pageSize, number, type);
                $(".jsloading").hide();
            }, function (msg) {
                $("#container").html("加载数据异常，请<a href='#' onclick='location.reload(true);'>重试</a>");
                $(".jsloading").hide();
            }, null);
        }
    };
    function Bind() {
        action = parseInt($(".web_changeThree li[class='hover']").attr("data-action"));
        $("#chkFengceng").change(function () {
            if (action == 1) {
                var ornotArr = [];
                ornotArr.push({ begincol: 2, endcol: 32, beginclum: pageSize + 1, endclum: 1, showflag: $(this).attr("checked") == "checked" ? true : false });
                Fc3dObj.DisplayOrnotArr(ornotArr);

            }
            else if (action == 2) {

                Fc3dObj.DisplayOrnot(1, 31, pageSize + 1, 1, $(this).attr("checked") == "checked" ? true : false);
            } else if (action == 3) {

                Fc3dObj.DisplayOrnot(3, 35, pageSize + 1, 1, $(this).attr("checked") == "checked" ? true : false);
            }
        });
        $("#chkYilou").change(function () {
            if (action == 1) {
                var lineArr = new Array();
                lineArr.push({ begincol: 2, endcol: 32, beginclum: 2, endclum: pageSize + 2, showflag: $(this).attr("checked") == "checked" ? true : false });
                Fc3dObj.OrnotArr(lineArr);

            }
            else if (action == 2) {
                Fc3dObj.Ornot(1, 32, 2, pageSize + 2, $(this).attr("checked") == "checked" ? true : false);
            } else if (action == 3) {
                Fc3dObj.Ornot(3, 35, 2, pageSize + 2, $(this).attr("checked") == "checked" ? true : false);
            }
        });

        $("#chkBian").change(function () {
            if (action == 1) {
                Fc3dObj.ShowBianhao(2, 12, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowBianhao(12, 22, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowBianhao(22, 32, $(this).attr("checked") == "checked" ? true : false);
            }
            else if (action == 2) {

                Fc3dObj.ShowBianhao(1, 11, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowBianhao(21, 31, $(this).attr("checked") == "checked" ? true : false);
            } else if (action == 3) {
                Fc3dObj.BianHaoCls="web_colorSpeedBackGroundBh";
                Fc3dObj.ShowBianhao(3, 31, $(this).attr("checked") == "checked" ? true : false);
            }

        });
        $("#chkChong").change(function () {
            if (action == 1) {
                Fc3dObj.ShowChonghao(2, 12, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowChonghao(12, 22, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowChonghao(22, 32, $(this).attr("checked") == "checked" ? true : false);
            }
            else if (action == 2) {

                Fc3dObj.ShowChonghao(1, 11, $(this).attr("checked") == "checked" ? true : false);
                Fc3dObj.ShowChonghao(21, 31, $(this).attr("checked") == "checked" ? true : false);
            } else if (action == 3) {
                Fc3dObj.ChongHaoCls = "web_colorSpeedBackGroundCh";
                Fc3dObj.ShowChonghao(3, 31, $(this).attr("checked") == "checked" ? true : false);
            }
        });

        $("#position_ball a").click(function () {
            var _this = this;
            $("#position_ball li").removeClass("hover");
            $(this).parent().addClass("hover");
            var ball = parseInt($(this).attr("data-ball"));

            InitController();

            $("#yilou").attr("checked", true);
            Load(action, pageSize, -1, ball, 0);
        });

        $(".web_colorSpeedRightDiv a").click(function () {
            $(".web_colorSpeedRightDiv a").removeClass("linkBtns_hover");
            $(this).addClass("linkBtns_hover");
            pageSize = parseInt($(this).attr("value"));

            var ball = parseInt($("#position_ball li[class='hover']").find("a").attr("data-ball"));

            Fc3dObj.PageSize = pageSize;
            InitController();
            Load(action, pageSize, -1, ball);
        });

    };

    //初始化工具栏控件
    function InitController() {
        $(".web_colorSpeedLeftDiv :checkbox").each(function (index) {
            if (this.id == "chkYilou") {
                $(this).attr("checked", true);
            }
            else {
                $(this).attr("checked", false);
            }
        });
    };

    $(function () {
        Fc3dObj = new Fc3d("container", "chart", "head1", "body1", "foot1", "distribute1", "canvas", "issueno");
    });
    exports.Init = function (action, code, fn) {
        action = action;
        lotterycode = code;
        InitController();

        Load(action, pageSize, -1, 0, 0);
        if (fn != undefined) {
            _fn = fn;
        }

        Bind();
    };
});