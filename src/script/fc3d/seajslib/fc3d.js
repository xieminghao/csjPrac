/************************************福彩3d走势处理模块************************************/
define(function (require, exports, module) {

    var Base = require("../../fc3d/seajslib/baseExt");//引入Base库
    //定义走势基本操作类
    function Fc3d(container, tableId, theadId, tbodyId, tfootId, tdistributeId, tcanvasId, issnunoId) {
        Base.call(this, container, tableId, theadId, tbodyId, tfootId, tdistributeId, tcanvasId, issnunoId);//继承Base类
        this._BodyTr = "";
        this._BodyTd = "";
        this.LotteryCode = "fc3d";
        this.LotteryName = "福彩3D";
        this.PageSize = 30;//期数
        this.Day = -1;//周几
        this.ball = 0;
        this.RequestUrl = "";//请求URL地址
        //走势图Action名称数组
        this.ChartAction = 1;//默认action值
        this.ChartActionName = { 1: '基本走势', 2: '号码定位走势', 3: '和值走势' };
        this.MyactionKey = "";//说明的Key
    };
    Base.extend(Fc3d, Base);

    Fc3d.prototype.RenderTitle = function (action, number) {
        this.RemoveTitle();
        this.RemoveBody();
        switch (action) {
            case 1://基本走势
                this.BaseTrendHead();
                this.BaseTrendFoot();
                this
                break;
            case 2://号码定位走势
                this.NumberPositionHead(number);
                this.NumberPositionFoot(number);
                break;
            case 3://和值走势
                this.SumHead();
                this.SumFoot();
                break;
        }
    };
    //内容显示方法
    Fc3d.prototype.RenderBody = function (action, pagesize, number, type) {
        this.pagesize = pagesize;
        switch (action) {
            case 1:
                this.CreateBody();

                var lineArr = new Array();
                lineArr.push({ begincol: 2, endcol: 12, beginclum: 0, endclum: pagesize, className: this.RedResultCls, lineWidth: 1, lineColor: this.RedLineColor, canvas: "canvas" });
                lineArr.push({ begincol: 12, endcol: 22, beginclum: 0, endclum: pagesize, className: this.BlueResultCls, lineWidth: 1, lineColor: this.BlueLineColor, canvas: "canvas" });
                lineArr.push({ begincol: 22, endcol: 32, beginclum: 0, endclum: pagesize, className: this.RedResultCls, lineWidth: 1, lineColor: this.RedLineColor, canvas: "canvas" });

                this.DrawLineArr(lineArr);

                this.CreateDistribute(1);
                break;
            case 2:
                this.ShowFloat = true;
                this.NumLotteryMaxCol = 17;

                this.NumLargeOrSmallNullCol = 1;
                this.NumParityNullCol = 1;
                this.CreatePositionBody(0, number - 1, 1);

                var lineArr = new Array();
                lineArr.push({ begincol: 1, endcol: 11, beginclum: 0, endclum: pagesize, className: this.RedResultCls, lineWidth: 1, lineColor: this.RedLineColor, canvas: "canvas" });
                lineArr.push({ begincol: 12, endcol: 16, beginclum: 0, endclum: pagesize, className: this.LargeCls, lineWidth: 1, lineColor: this.BlueLineColor, canvas: "canvas" });
                lineArr.push({ begincol: 17, endcol: 21, beginclum: 0, endclum: pagesize, className: this.OddCls, lineWidth: 1, lineColor: this.RedLineColor, canvas: "canvas" });
                lineArr.push({ begincol: 21, endcol: 31, beginclum: 0, endclum: pagesize, className: this.BlueResultCls, lineWidth: 1, lineColor: this.BlueLineColor, canvas: "canvas" });
                this.DrawLineArr(lineArr);

                this.CreatePositionDistribute(1, type);
                break;
            case 3:
                this.ShowSumValue = true;
                this.ShowLotteryResult = true;
                this.CreateSumValueBody(2, null, 0);//创建具体内容  
                this.CreateSumValDistribute();//统计 

                //画线
                var lineArr = new Array();
                lineArr.push({ begincol: 3, endcol: 31, beginclum: 0, endclum: pagesize, className: this.SumCls, lineWidth: 1, lineColor: this.RedLineColor, canvas: "canvas" });

                this.DrawLineArr(lineArr);
                break;
        }
        require.async("/res/js/lot/seajslib/explainbase", function (obj) {
            obj.Init("fc3d/explaindata");
        });
    };
    /*创建福彩3d基本走势头部*/
    Fc3d.prototype.BaseTrendHead = function () {
        var tr = this.CreateHeadTr("web_colorSpeedBackGround2_tr2");
        var _this = this;
        this.CreateHeadTd("issueno", 2, "", "web_colorSpeedMap_fontSize14  web_colorSpeedBackGround1", "<span class=\"iconJT\">期数</span>", tr, "click", function () {
            var lineArr = new Array();
            _this.Sort();
            lineArr.push({ begincol: 2, endcol: 12, beginclum: 0, endclum: _this.PageSize, className: _this.RedResultCls, lineWidth: 1, lineColor: _this.RedLineColor, canvas: "canvas" });
            lineArr.push({ begincol: 12, endcol: 22, beginclum: 0, endclum: _this.PageSize, className: _this.BlueResultCls, lineWidth: 1, lineColor: _this.BlueLineColor, canvas: "canvas" });
            lineArr.push({ begincol: 22, endcol: 32, beginclum: 0, endclum: _this.PageSize, className: _this.RedResultCls, lineWidth: 1, lineColor: _this.RedLineColor, canvas: "canvas" });
            _this.DrawLineArr(lineArr);
        }, "90px");
        this.CreateHeadTd("", 2, "", "web_colorSpeedBackGround1", "开奖号码", tr, "", "", "90px");
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", "百位", tr, "", "");
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", "十位", tr, "", "");
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", "个位", tr, "", "");
        //开奖号码区域
        var tr3 = this.CreateHeadTr("web_colorSpeedBackGround2_tr web_colorSpeedBackGround2_tr2");
        for (var i = 1; i <= 3; i++) {
            for (var j = 0; j <= 9; j++) {
                this.CreateHeadTd("", "", "", "", j, tr3, "", "");
            }
        }
    };
    /*福彩3d基本走势尾部*/
    Fc3d.prototype.BaseTrendFoot = function () {
        var tr = this.CreateFootTr("web_colorSpeedBackGround2_tr2");
        var tr2 = this.CreateFootTr("web_colorSpeedBackGround2_tr2");
        var _this = this;

        //开奖号码区域
        this.CreateFootTd("", 2, "", "web_colorSpeedBackGround1", "期数", tr, "", "");
        this.CreateHeadTd("", 2, "", "web_colorSpeedBackGround1", "开奖号码", tr, "", "");
        for (var i = 1; i <= 3; i++) {
            for (var j = 0; j <= 9; j++) {
                this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", j, tr, "", "");
            }
        }

        this.CreateFootTd("", "", 10, "web_colorSpeedBackGround1", "百位", tr2, "", "");
        this.CreateFootTd("", "", 10, "web_colorSpeedBackGround1", "十位", tr2, "", "");
        this.CreateFootTd("", "", 10, "web_colorSpeedBackGround1", "个位", tr2, "", "");

    };
    /*创建福彩3d内容区域*/
    Fc3d.prototype.CreateBody = function () {
        this.IssueNoCls = "IssueNo";
        if (this.NumLotteryData != null && this.NumLotteryData.chart != null) {
            var doc = document.createDocumentFragment();
            var chart = this.NumLotteryData.chart;
            var result = "";
            for (var i = 0; i < chart.length; i++) {
                var tr = null;
                if (i % this.IssueNoEndIndex + 1 == this.IssueNoEndIndex) {
                    tr = document.createElement("tr");
                    tr.id = "tr_" + chart[i].IssueNo;

                }
                else {
                    tr = document.createElement("tr");
                    tr.id = "tr_" + chart[i].IssueNo;
                }
                tr.className = "web_colorSpeedBackGround2_tr2";

                this.CreateIssueNo(chart[i].IssueNo, tr, 1);
                //开奖结果
                result = "";
                for (var j = 0; j < chart[i].NumberFont.length; j++) {
                    result += "<span class='redFont'>" + chart[i].NumberFont[j] + "</span>";
                }
                this.CreateBodyTd("", "", "", "", "<div class='awardFont'>" + result + "</div>", tr);
                //号码分布
                if (chart[i].MissData != null) {
                    for (var j = 0; j < chart[i].MissData.data0.length; j++) {
                        if (chart[i].MissData.data0[j] == 0) {
                            this.CreateBodyTd("", "", "", this.RedResultCls, "", tr);
                        }
                        else {
                            this.CreateBodyTd("", "", "", this.RedDistributeCls, chart[i].MissData.data0[j], tr);
                        }
                    }
                    for (var j = 0; j < chart[i].MissData.data1.length; j++) {
                        if (chart[i].MissData.data1[j] == 0) {
                            this.CreateBodyTd("", "", "", this.BlueResultCls, "", tr);
                        }
                        else {
                            this.CreateBodyTd("", "", "", this.BlueDistributeCls, chart[i].MissData.data1[j], tr);
                        }
                    }
                    for (var j = 0; j < chart[i].MissData.data2.length; j++) {
                        if (chart[i].MissData.data2[j] == 0) {
                            this.CreateBodyTd("", "", "", this.RedResultCls, "", tr);
                        }
                        else {
                            this.CreateBodyTd("", "", "", this.RedDistributeCls, chart[i].MissData.data2[j], tr);
                        }
                    }


                }
                doc.appendChild(tr);

            }
        }
        if (this.tbody != null) {
            for (var i = this.tbody.childNodes.length - 1; i >= 0 ; i--) {
                this.tbody.removeChild(this.tbody.childNodes[i]);
            }
        }
        if (doc != null && doc.childNodes.length > 0) {
            this.tbody.appendChild(doc);
        }
        /*********************中奖结果填充******************/
        var _this = this;
        var tbodyObj = $("#" + this.tbodyId);
        tbodyObj.find("tr").each(function (index) {
            var id = this.id;
            var issuenoData = null;
            for (var filte = 0; filte < chart.length; filte++) {
                if (chart[filte].IssueNo == id.split('_')[1]) {
                    issuenoData = chart[filte];
                    break;
                }
            }
            var redtmp = 0;
            var bluetmp = 0;
            var resultArr = issuenoData.Result.split(',');
            var tds = $(this).children();
            var isGoNow = false;
            var tempArr;

            for (var i = 0; i < tds.length; i++) {
                if (tds.eq(i).hasClass(_this.RedResultCls) || tds.eq(i).hasClass(_this.BlueResultCls)) {
                    if (redtmp >= resultArr.length) {
                        tempArr = resultArr;
                        isGoNow = true;
                        redtmp = 0;
                    }
                    tds.eq(i).html(resultArr[redtmp]);
                    redtmp++;
                }
            }
        });
        this.Parse();
    };
    /*创建福彩3d遗漏区域*/
    Fc3d.prototype.CreateDistribute = function () {
        var colSpan = 1;
        if (this.NumLotteryData != null && this.NumLotteryData.stat != null) {
            var t = this.tbody.rows;
            if (this.NumLotteryData.stat.OutCount.data0 != null) {
                this.OutCountRate();
                /*******************上期遗漏******************/
                var cTr = this.CreateBodyTr("countTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>出现次数</span><span class='questionMark_icon' myaction='tjsm' mykey='CXCS'></span></span>", cTr, [{ name: 'vAlign', value: 'bottom' }]);
                this.CreateBodyTd("", "", "", "", "&nbsp;", cTr);
                if (this.NumLotteryData.stat.OutCount.data0 != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.data0, cTr);
                }
                if (this.NumLotteryData.stat.OutCount.data1 != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.data1, cTr);
                }
                if (this.NumLotteryData.stat.OutCount.data2 != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.data2, cTr);
                }

                /*******************平均遗漏******************/
                var aTr = this.CreateBodyTr("avDistributeTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>平均遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='PJYL'></span></span>", aTr);
                this.CreateBodyTd("", "", "", "", "&nbsp;", aTr);
                if (this.NumLotteryData.stat.MissAvg.data0 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.data0, aTr);
                }
                if (this.NumLotteryData.stat.MissAvg.data1 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.data1, aTr);
                }

                if (this.NumLotteryData.stat.MissAvg.data2 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.data2, aTr);
                }

                /*********************最大遗漏*****************/
                var mTr = this.CreateBodyTr("maxDistributeTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>最大遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='ZDYL'></span></span>", mTr);
                this.CreateBodyTd("", "", "", "", "&nbsp;", mTr);
                if (this.NumLotteryData.stat.MissMax.data0 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.data0, mTr);
                }
                if (this.NumLotteryData.stat.MissMax.data1 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.data1, mTr);
                }
                if (this.NumLotteryData.stat.MissMax.data2 != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.data2, mTr);
                }

            }
            var t = this.tbody.rows;
            this.StatAppendChildDistribute(t, cTr, aTr, mTr);

        }
    };
    /*************************************************************************************号码走势*****************************************************************************************
    /*福彩3D号码走势头部
  number:红几球
  */
    Fc3d.prototype.NumberPositionHead = function (number) {
        var tr = this.CreateHeadTr("web_colorSpeedBackGround2_tr2");
        var _this = this;
        this.CreateHeadTd("issueno", 2, "", "web_colorSpeedMap_fontSize14  web_colorSpeedBackGround1", "<span class=\"iconJT\">期数</span>", tr, "click", function () {
            var lineArr = new Array();
            _this.Sort();
            lineArr.push({ begincol: 1, endcol: 11, beginclum: 0, endclum: _this.PageSize, className: _this.RedResultCls, lineWidth: 1, lineColor: _this.RedLineColor, canvas: "canvas" });
            lineArr.push({ begincol: 12, endcol: 16, beginclum: 0, endclum: _this.PageSize, className: _this.LargeCls, lineWidth: 1, lineColor: _this.BlueLineColor, canvas: "canvas" });
            lineArr.push({ begincol: 17, endcol: 21, beginclum: 0, endclum: _this.PageSize, className: _this.OddCls, lineWidth: 1, lineColor: _this.RedLineColor, canvas: "canvas" });
            lineArr.push({ begincol: 21, endcol: 31, beginclum: 0, endclum: _this.PageSize, className: _this.BlueResultCls, lineWidth: 1, lineColor: _this.BlueLineColor, canvas: "canvas" });
            _this.DrawLineArr(lineArr);
        }, "120px");
        var num = "百";
        switch (number) {
            case 1: num = "百"; break;
            case 2: num = "十"; break;
            case 3: num = "个"; break;
            default: num = "百"; break;
        }
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", num + "位开奖号码", tr, "", "");
        this.CreateHeadTd("", "", 5, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>大小</span><span class='questionMark_icon' myaction='hmdwzs' mykey='DX'></span></span>", tr, "", "");
        this.CreateHeadTd("", "", 5, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>单双</span><span class='questionMark_icon' myaction='hmdwzs' mykey='DS'></span></span>", tr, "", "");
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>振幅</span><span class='questionMark_icon' myaction='hmdwzs' mykey='ZF'></span></span>", tr, "", "");
        var tr2 = this.CreateHeadTr("web_colorSpeedBackGround2_tr web_colorSpeedBackGround2_tr3");
        for (var i = 0; i <= 9; i++) {
            this.CreateHeadTd("", "", "", "", i, tr2, "", "");
        }
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "大", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "小", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "单", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "双", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr2, "", "");
        for (var i = 0; i <= 9; i++) {
            this.CreateHeadTd("", "", "", "", i, tr2, "", "");
        }

    };
    /*福彩3D号码走势头部
   number:红几球
   type: 标题类型 0:红球 1:蓝球
   */
    Fc3d.prototype.NumberPositionFoot = function (number) {
        var num = "万";
        switch (number) {
            case 1: num = "百"; break;
            case 2: num = "十"; break;
            case 3: num = "个"; break;
            default: num = "百"; break;
        }
        var tr = this.CreateFootTr("web_colorSpeedBackGround2_tr2");
        this.CreateFootTd("issueno", 2, "", "web_colorSpeedBackGround1", "<span >期数</span>", tr, "", "");
        for (var i = 0; i <= 9; i++) {
            this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", i, tr, "", "");
        }
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "大", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "小", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "单", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "双", tr, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "&nbsp;", tr, "", "");
        for (var i = 0; i <= 9; i++) {
            this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", i, tr, "", "");
        }
        var tr2 = this.CreateFootTr("web_colorSpeedBackGround2_tr2");
        this.CreateFootTd("", "", 10, "web_colorSpeedBackGround1", num + "位开奖号码", tr2, "", "");
        this.CreateHeadTd("", "", 5, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>大小</span><span class='questionMark_icon' myaction='hmdwzs' mykey='DX'></span></span>", tr2, "", "");
        this.CreateHeadTd("", "", 5, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>单双</span><span class='questionMark_icon' myaction='hmdwzs' mykey='DS'></span></span>", tr2, "", "");
        this.CreateHeadTd("", "", 10, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>振幅</span><span class='questionMark_icon' myaction='hmdwzs' mykey='ZF'></span></span>", tr2, "", "");
    };
    /****************************************************************************福彩3D 和值走势操作*******************************************************************/
    //头部
    Fc3d.prototype.SumHead = function () {
        var j = 0;
        var tr = this.CreateHeadTr("web_colorSpeedBackGround2_tr2");
        var _this = this;
        this.CreateHeadTd(this.issnunoId, 2, "", "web_colorSpeedMap_fontSize14  web_colorSpeedBackGround1", "<span class=\"iconJT\">期数</span>", tr, "click", function () {
            var lineArr = new Array();
            _this.Sort();
            lineArr.push({ begincol: 3, endcol: 31, beginclum: 0, endclum: _this.PageSize, className: _this.SumCls, lineWidth: 1, lineColor: _this.RedLineColor, canvas: "canvas" });
            _this.DrawLineArr(lineArr);
        }, "75px");
        this.CreateHeadTd("", 2, "", "web_colorSpeedBackGround1", "开奖号码 ", tr, "", "", "70px");


        this.CreateHeadTd("", 2, "", "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>和值</span><span class='questionMark_icon' myaction='hzzs' mykey='SUM'></span></span>", tr, "", "", "50px");


        var tr2 = null;
        this.CreateHeadTd("", "", 28, "web_colorSpeedBackGround1", "和值走势 ", tr, "", "", "");
        tr2 = this.CreateHeadTr("web_colorSpeedBackGround2_tr web_colorSpeedBackGround2_tr2");

        this.CreateHeadTd("", "", 2, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>大小</span><span class='questionMark_icon' myaction='hzzs' mykey='DX'></span></span>", tr, "", "");
        this.CreateHeadTd("", "", 2, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>奇偶</span><span class='questionMark_icon' myaction='hzzs' mykey='JO'></span></span>", tr, "", "");

        for (j = 0 ; j < 28 ; j++) {
            this.CreateHeadTd("", "", "", "", j, tr2, "", "");
        }

        //大小
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "大", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "小", tr2, "", "");
        //奇偶
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "奇", tr2, "", "");
        this.CreateHeadTd("", "", "", "web_colorSpeedBackGround1", "偶", tr2, "", "");


    };
    //尾部
    Fc3d.prototype.SumFoot = function (DataType) {
        var j = 0, i = 0;
        var tr = this.CreateFootTr("web_colorSpeedBackGround2_tr2");
        this.CreateFootTd("", 2, "", "web_colorSpeedMap_fontSize14  web_colorSpeedBackGround1", "期数", tr, "", "");
        this.CreateFootTd("", 2, "", "web_colorSpeedBackGround1", "开奖号码 ", tr, "", "", "");

        this.CreateFootTd("", 2, "", "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>和值</span><span class='questionMark_icon' myaction='hzzs' mykey='SUM'></span></span>", tr, "", "");


        for (j = 0 ; j < 28 ; j++) {
            this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", j, tr, "", "");
        }
        //奇偶
        this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", "大", tr, "", "");
        this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", "小", tr, "", "");
        this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", "奇", tr, "", "");
        this.CreateFootTd("", "", "", "web_colorSpeedBackGround1", "偶", tr, "", "");
        

        var tr2 = this.CreateFootTr("web_colorSpeedBackGround2_tr2");

        this.CreateFootTd("", "", 28, "web_colorSpeedBackGround1", "和值走势 ", tr2, "", "", "");

        this.CreateFootTd("", "", 2, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>大小</span><span class='questionMark_icon' myaction='hzzs' mykey='DX'></span></span>", tr2, "", "");
        this.CreateFootTd("", "", 2, "web_colorSpeedBackGround1", "<span class='questionMark'><span class='questionMark_text'>奇偶</span><span class='questionMark_icon' myaction='hzzs' mykey='JO'></span></span>", tr2, "", "");
    };

    module.exports = Fc3d;
});