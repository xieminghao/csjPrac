/***********************Base类扩展(包含奇偶*************************/
define(function (require, exports, module) {
    var Base = require("../../fc3d/seajslib/base");//引入Base库
    /*创建大小走势*/
    Base.prototype.CreateLargeOrSmall = function (rowIndex, parent) {
        var chart = this.NumLotteryData.chart;
        if (chart[rowIndex].TrendBigSmall != null) {
            //前区空格单元格数量
            if (this.NumLargeOrSmallNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.LargeDistributeCls;
                    parent.appendChild(td);
                }

            }
            for (var j = 0; j < 1; j++) {
                var largeTd = document.createElement("td");
                var smallTd = document.createElement("td");
                if (chart[rowIndex].TrendBigSmall[0] == 0) {
                    largeTd.className = this.LargeCls;
                    var largeTxt = document.createTextNode("大");
                    largeTd.appendChild(largeTxt);
                    //largeOrsmall+="<td class='"+this.LargeCls+"'>大</td>";
                }
                else {
                    largeTd.className = this.LargeDistributeCls;
                    var largeTxt = document.createTextNode(chart[rowIndex].TrendBigSmall[0]);
                    largeTd.appendChild(largeTxt);
                    //largeOrsmall+="<td>"+chart[i].dx[0]+"</td>";
                }
                parent.appendChild(largeTd);
                if (this.ShowNullLargeOrSmall) {
                    var blankTd = document.createElement("td");
                    blankTd.innerHTML = "&nbsp;";
                    blankTd.className = this.LargeDistributeCls;
                    parent.appendChild(blankTd);
                }
                //largeOrsmall+="<td>&nbsp;</td>";
                if (chart[rowIndex].TrendBigSmall[1] == 0) {
                    smallTd.className = this.SmallCls;
                    var smallTxt = document.createTextNode("小");
                    smallTd.appendChild(smallTxt);
                    //largeOrsmall+="<td class='"+this.SmarllCls+"'>小</td>";
                }
                else {
                    smallTd.className = this.SmallDistributeCls;
                    var smallTxt = document.createTextNode(chart[rowIndex].TrendBigSmall[1]);
                    smallTd.appendChild(smallTxt);
                    //largeOrsmall+="<td>"+chart[i].dx[1]+"</td>";
                }
                parent.appendChild(smallTd);
            }
            //后区单元格空格数量
            if (this.NumLargeOrSmallNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.LargeDistributeCls;
                    parent.appendChild(td);
                }

            }
        }
    };
    /*创建单双走势*/
    Base.prototype.CreateParity = function (rowIndex, parent) {
        var chart = this.NumLotteryData.chart;
        if (chart[rowIndex].TrendOddEven != null) {
            if (this.NumParityNullCol > 0) {
                for (var i = 0; i < this.NumParityNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.OddDistributeCls;
                    parent.appendChild(td);
                }
            }
            for (var j = 0; j < 1; j++) {
                var jiTd = document.createElement("td");
                var ouTd = document.createElement("td");
                if (chart[rowIndex].TrendOddEven[0] == 0) {
                    jiTd.className = this.OddCls;
                    var jiTxt = document.createTextNode("单");
                    jiTd.appendChild(jiTxt);
                    //parity+="<td class='"+this.OddCls+"'>单</td>";
                }
                else {
                    jiTd.className = this.OddDistributeCls;
                    var jiTxt = document.createTextNode(chart[rowIndex].TrendOddEven[0]);
                    jiTd.appendChild(jiTxt);
                    //parity+="<td>"+chart[i].jo[0]+"</td>";
                }
                parent.appendChild(jiTd);
                if (this.ShowNullParity) {
                    var blankTd = document.createElement("td");
                    blankTd.innerHTML = "&nbsp;";
                    blankTd.className = this.OddDistributeCls;
                    parent.appendChild(blankTd);
                }
                //parity+="<td>&nbsp;</td>";
                if (chart[rowIndex].TrendOddEven[1] == 0) {
                    ouTd.className = this.OCls;
                    var ouTxt = document.createTextNode("双");
                    ouTd.appendChild(ouTxt);
                    //parity+="<td class='"+this.OCls+"'>双</td>";
                }
                else {
                    ouTd.className = this.ODistributeCls;
                    var ouTxt = document.createTextNode(chart[rowIndex].TrendOddEven[1]);
                    ouTd.appendChild(ouTxt);
                    //parity+="<td>"+chart[i].jo[1]+"</td>";
                }
                parent.appendChild(ouTd);
            }
            if (this.NumParityNullCol > 0) {
                for (var i = 0; i < this.NumParityNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.OddDistributeCls;
                    parent.appendChild(td);
                }
            }
        }
    };
    /*创建振幅走势*/
    Base.prototype.CreateFloat = function (rowIndex, parent, barType) {
        var chart = this.NumLotteryData.chart;
        if (chart[rowIndex].DataFloat != null) {
            if (this.NumFloatNullCol > 0) {
                for (var i = 0; i < this.NumFloatNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = barType == 0 ? this.RedDistributeCls : this.BlueDistributeCls;
                    parent.appendChild(td);
                }
            }
            for (var i = 0; i < chart[rowIndex].DataFloat.length; i++) {
                var td = document.createElement("td");
                if (chart[rowIndex].DataFloat[i] == 0) {
                    td.className = barType == 0 ? this.RedResultCls : this.BlueResultCls;
                    var tdTxt = document.createTextNode(i);
                    td.appendChild(tdTxt);
                }
                else {
                    td.className = barType == 0 ? this.RedDistributeCls : this.BlueDistributeCls;
                    var tdTxt = document.createTextNode(chart[rowIndex].DataFloat[i]);
                    td.appendChild(tdTxt);
                }
                parent.appendChild(td);
            }
            if (this.NumFloatNullCol > 0) {
                for (var i = 0; i < this.NumFloatNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = barType == 0 ? this.RedDistributeCls : this.BlueDistributeCls;
                    parent.appendChild(td);
                }
            }
        }

    };
    /*分区域进行绘图(绘图扩展)
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	classname:连线元素样式名称
	canvas:父元素
	*/
    Base.prototype.DrawLine = function (begincol, endcol, beginclum, endclum, className, lineWidth, lineColor, canvas) {
        var t = this.tbody.rows;
        if (endclum == undefined) {
            endclum = t.length;
        }
        var lineObj = new Array();
        for (var i = beginclum; i < endclum; i++) {
            for (var j = begincol; j < endcol; j++) {
                if (t[i] == null || t[i].cells[j] == null) {
                    break;
                }
                if (t[i].cells[j].className.indexOf(className) > -1) {
                    lineObj.push(t[i].cells[j]);
                }
            }
        }
        this._Line(lineObj, lineWidth, lineColor, canvas);
    };
    /*分区域进行绘图--包含多样式连线(绘图扩展)
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	classnameArr:连线元素样式集合
	canvas:父元素
	*/
    Base.prototype.DrawLineCls = function (begincol, endcol, beginclum, endclum, classNameArr, lineWidth, lineColor, canvas) {
        var t = this.tbody.rows;
        if (endclum == undefined) {
            endclum = t.length;
        }
        var lineObj = new Array();
        for (var i = beginclum; i < endclum; i++) {
            for (var j = begincol; j < endcol; j++) {
                if (t[i] == null || t[i].cells[j] == null) {
                    break;
                }
                for (var m = 0; m < classNameArr.length; m++) {
                    if (t[i].cells[j].className.indexOf(classNameArr[m]) > -1) {
                        lineObj.push(t[i].cells[j]);
                    }
                }
            }
        }
        this._Line(lineObj, lineWidth, lineColor, canvas);
    };
    /*集合划线
    lineArr:划线集合 格式{begincol:1,endcol:1,beginclum:1,endclum:1,className:'redBar',lineWidth:1,lineColor:'red',canvas:'canvas'}
    */
    Base.prototype.DrawLineArr = function (lineArr) {
        if (lineArr != null && lineArr.length > 0) {
            try {
                for (var i = 0; i < lineArr.length; i++) {
                    this.DrawLine(lineArr[i].begincol, lineArr[i].endcol, lineArr[i].beginclum, lineArr[i].endclum, lineArr[i].className, lineArr[i].lineWidth, lineArr[i].lineColor, lineArr[i].canvas);
                }
            } catch (e) {
            }
        }
    };
    /*集合划线
    lineArr:划线集合 格式{begincol:1,endcol:1,beginclum:1,endclum:1,classNames:['redBar','blueBar'],lineWidth:1,lineColor:'red',canvas:'canvas'}
    */
    Base.prototype.DrawLineClsArr = function (lineArr) {
        if (lineArr != null && lineArr.length > 0) {
            try {
                for (var i = 0; i < lineArr.length; i++) {
                    this.DrawLineCls(lineArr[i].begincol, lineArr[i].endcol, lineArr[i].beginclum, lineArr[i].endclum, lineArr[i].classNames, lineArr[i].lineWidth, lineArr[i].lineColor, lineArr[i].canvas);
                }
            } catch (e) {
            }
        }
    };
    /*创建号码走势BODY
    barType:球类型 0:红球 1:蓝球
    number:第几个球
    */
    Base.prototype.CreatePositionBody = function (barType, number, issueNoCol) {
        if (this.NumLotteryData != null && this.NumLotteryData.chart != null) {
            var doc = document.createDocumentFragment();
            var tr = null;
            if (this.NumLotteryData.chart.length > 0 && this.NumLotteryData.chart[0] != null) {
                var chart = this.NumLotteryData.chart;
                for (var i = 0; i < chart.length; i++) {
                    if (i % this.IssueNoEndIndex + 1 == this.IssueNoEndIndex) {
                        tr = document.createElement("tr");
                        tr.id = "tr_" + chart[i].IssueNo;
                        tr.className = this.IssueNoEndCls;
                        this.BodyContent += "<tr id='tr_" + chart[i].IssueNo + "' class='" + this.IssueNoEndCls + "'>";
                    }
                    else {
                        tr = document.createElement("tr");
                        tr.id = "tr_" + chart[i].IssueNo;
                        tr.className = this.IssueNoEndCls;
                    }
                    if (issueNoCol != undefined && issueNoCol != "") {
                        this.CreateIssueNo(chart[i].IssueNo, tr, issueNoCol);
                    }
                    else {
                        this.CreateIssueNo(chart[i].IssueNo, tr, 1);
                    }

                    if (chart[i].MissNumber != null) {
                        for (var j = 0; j < chart[i].MissNumber.length; j++) {

                            var td = document.createElement("td");
                            if (chart[i].MissNumber[j] == 0)//为0表示为中奖结果
                            {
                                td.className = barType == 0 ? this.RedResultCls : this.BlueResultCls;
                                var tdTxt = document.createTextNode(j);
                                td.appendChild(tdTxt);
                                tr.appendChild(td);
                            }
                            else {
                                td.className = barType == 0 ? this.RedDistributeCls : this.BlueDistributeCls;
                                var tdTxt = document.createTextNode(chart[i].MissNumber[j]);
                                td.appendChild(tdTxt);

                            }
                            tr.appendChild(td);
                        }
                    }

                    //大小
                    if (this.ShowLargeOrSmall) {
                        if (chart[i].TrendBigSmall != null) {
                            this.CreateLargeOrSmall(i, tr);
                        }
                    }
                    //奇偶
                    if (this.ShowParity) {
                        if (chart[i].TrendOddEven != null) {
                            this.CreateParity(i, tr);
                        }
                    }
                    //振幅
                    if (this.ShowFloat) {

                        this.CreateFloat(i, tr, 1);
                    }

                    doc.appendChild(tr);

                }
            }
            this.tbody.appendChild(doc);
            /********************填充中奖结果*******************/
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
                var resultArr = issuenoData.Result.split('|');
                var tds = $(this).children();
                var cellCount = _this.NumLotteryMaxCol;
                for (var i = 1; i < cellCount; i++) {
                    if (tds.eq(i) != null) {
                        if (tds.eq(i).hasClass(barType == 0 ? _this.RedResultCls : _this.BlueResultCls)) {
                            tds.eq(i).html(resultArr[barType].split(',')[number]);
                        }
                    }
                }

            });
        }
        this.Parse();
    };

    /*创建号码走势遗漏分析*/
    Base.prototype.CreatePositionDistribute = function (colSpan, barType) {
        if (this.NumLotteryData != null && this.NumLotteryData.stat != null) {
            if (this.NumLotteryData.stat.OutCount != null) {

                /*******************出现次数******************/
                this.OutCountRate();
                var cTr = this.CreateBodyTr("countTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>出现次数</span><span class='questionMark_icon' myaction='tjsm' mykey='CXCS'></span></span>", cTr, [{ name: 'vAlign', value: 'bottom' }]);
                if (this.ShowLotteryResult) {
                    this.CreateCount(null, cTr, "&nbsp;");
                }
                if (this.NumLotteryData.stat.OutCount.data != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.data, cTr);
                }
                if (this.ShowLargeOrSmall && this.NumLotteryData.stat.OutCount.bigsmall != null) {
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                    this.CreateCount(this.NumLotteryData.stat.OutCount.bigsmall, cTr, "", this.ShowNullLargeOrSmall);
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                }
                if (this.ShowParity && this.NumLotteryData.stat.OutCount.oddeven != null) {
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                    this.CreateCount(this.NumLotteryData.stat.OutCount.oddeven, cTr, "", this.ShowNullParity);
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                }
                if (this.ShowFloat && this.NumLotteryData.stat.OutCount.fly != null) {
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                    this.CreateCount(this.NumLotteryData.stat.OutCount.fly, cTr, "");
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, cTr, "&nbsp;");
                        }
                    }
                }
                /*******************平均遗漏******************/
                var aTr = this.CreateBodyTr("avDistributeTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>平均遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='PJYL'></span></span>", aTr);

                if (this.ShowLotteryResult) {
                    this.CreateCount(null, aTr, "&nbsp;");
                }
                if (this.NumLotteryData.stat.MissAvg.data != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.data, aTr);
                }
                else {
                    for (var i = 0; i < count; i++) {
                        this.CreateCount(null, aTr, "&nbsp;");
                    }
                }
                if (this.ShowLargeOrSmall && this.NumLotteryData.stat.MissAvg.bigsmall != null) {
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.bigsmall, aTr, "", this.ShowNullLargeOrSmall);
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }
                }
                if (this.ShowParity && this.NumLotteryData.stat.MissAvg.oddeven != null) {
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.oddeven, aTr, "", this.ShowNullParity);
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }

                }
                if (this.ShowFloat && this.NumLotteryData.stat.MissAvg.fly != null) {
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.fly, aTr);
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, aTr, "&nbsp;");
                        }
                    }
                }
                /*********************最大遗漏*****************/
                var mTr = this.CreateBodyTr("maxDistributeTr", "web_colorSpeedBackGround2_tr2");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>最大遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='ZDYL'></span></span>", mTr);
                var maxDistributeTr = "<tr id='maxDistributeTr'>";
                if (this.ShowLotteryResult) {
                    this.CreateCount(null, mTr, "&nbsp;");
                }
                this.CreateMissData(this.NumLotteryData.stat.MissMax.data, mTr);
                if (this.ShowLargeOrSmall && this.NumLotteryData.stat.MissMax.bigsmall != null) {
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.bigsmall, mTr, "", this.ShowNullLargeOrSmall);
                    if (this.NumLargeOrSmallNullCol > 0) {
                        for (var k = 0; k < this.NumLargeOrSmallNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                }
                if (this.ShowParity && this.NumLotteryData.stat.MissMax.oddeven != null) {
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.oddeven, mTr, "", this.ShowNullParity);
                    if (this.NumParityNullCol > 0) {
                        for (var k = 0; k < this.NumParityNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                }
                if (this.ShowFloat && this.NumLotteryData.stat.MissMax.fly != null) {
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.fly, mTr);
                    if (this.NumFloatNullCol > 0) {
                        for (var k = 0; k < this.NumFloatNullCol; k++) {
                            this.CreateCount(null, mTr, "&nbsp;");
                        }
                    }
                }
            }
            var t = this.tbody.rows;
            this.StatAppendChildDistribute(t, cTr, aTr, mTr);
        }
    };

    /*创建出现次数统计列
    obj:数据源数组
    tr:添加到行对象
    def:默认值
    showNull:是否显示空格
   isProgress：是否显示柱状图
    */
    Base.prototype.CreateCount = function (obj, tr, def, showNull, isProgress) {
        if (obj != null) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i] == 0) {
                    this.CreateBodyTd("", "", "", "", obj[i], tr, [{ name: 'vAlign', value: 'bottom' }]);
                }
                else {
                    if (isProgress == undefined || isProgress == true) {
                        this.CreateBodyTd("", "", "", "", obj[i] + "<br><span class='" + this.ProgressBarCls + "' style='height:" + (obj[i] * this.CountRate) + "px;'></span>", tr, [{ name: 'vAlign', value: 'bottom' }]);

                    }
                    else {
                        this.CreateBodyTd("", "", "", "", obj[i], tr, [{ name: 'vAlign', value: 'bottom' }]);
                    }

                }
                if (i < obj.length - 1) {
                    if (showNull) {
                        this.CreateCount(null, tr, "&nbsp;");
                    }
                }
            }
        }
        else {
            this.CreateBodyTd("", "", "", "", def, tr, [{ name: 'vAlign', value: 'bottom' }]);
        }
    };
    /*创建遗漏数据统计列
    obj:数据源数组
    tr:添加到行对象
    def:默认值
    showNull:是否显示空格
    */
    Base.prototype.CreateMissData = function (obj, tr, def, showNull) {
        if (obj != null) {
            for (var i = 0; i < obj.length; i++) {
                this.CreateBodyTd("", "", "", "", obj[i], tr);
                if (i < obj.length - 1) {
                    if (showNull) {
                        this.CreateCount(null, tr, "&nbsp;");
                    }
                }
            }
        }
        else {
            this.CreateBodyTd("", "", "", "", def, tr);
        }
    };
    /*
      创建大小
      obj 数据源[0,1]
      tr 父级
      ismiss 是否遗漏 
  */
    Base.prototype.CreateTdBigSmall = function (obj, tr, ismiss) {
        if (obj != null) {
            var td = document.createElement("td");
            //前面
            if (this.NumLargeOrSmallNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.LargeDistributeCls;
                    tr.appendChild(td);
                }
            }
            if (obj[0] == 0) {
                td.className = this.LargeCls;
                td.innerHTML = "大";
                tr.appendChild(td);
            }
            else {
                td.className = this.LargeDistributeCls;
                if (ismiss) {
                    td.innerHTML = obj[0];
                }
                else {
                    td.innerHTML = "&nbsp;";
                }
                tr.appendChild(td);
            }

            //中间
            if (this.NumNullLargeOrSmallCol > 0) {
                for (var i = 0; i > this.NumNullLargeOrSmallCol; i--) {
                    td = document.createElement("td");
                    td.innerHTML = "&nbsp;";
                    tr.appendChild(td);
                }
            }



            td = document.createElement("td");
            if (obj[1] == 0) {
                td.className = this.SmallCls;
                td.innerHTML = "小";
                tr.appendChild(td);
            }
            else {
                td.className = this.SmallDistributeCls;
                if (ismiss) {
                    td.innerHTML = obj[1];
                }
                else {
                    td.innerHTML = "&nbsp;";
                }
                tr.appendChild(td);
            }

            //后面
            if (this.NumLargeOrSmallNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.LargeDistributeCls;
                    tr.appendChild(td);
                }
            }
        }
    }
    /*
        创建奇偶
        obj 数据源[0,1]
        tr 父级
        ismiss 是否遗漏
        count td的数量
    */
    Base.prototype.CreateTdEvenOdd = function (obj, tr, ismiss) {

        if (obj != null) {

            //前面
            if (this.NumParityNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.OddDistributeCls;
                    tr.appendChild(td);
                }
            }

            var td = document.createElement("td");
            if (obj[0] == 0) {
                td.className = this.OddCls;
                td.innerHTML = "奇";
                tr.appendChild(td);
            }
            else {

                td.className = this.OddDistributeCls;
                if (ismiss) {
                    td.innerHTML = obj[0];
                }
                else {
                    td.innerHTML = "&nbsp;";
                }
                tr.appendChild(td);
            }

            //中间
            if (this.NumNullParityCol > 0) {
                for (var i = 0; i > this.NumNullParityCol; i--) {
                    td = document.createElement("td");
                    td.innerHTML = "&nbsp;";
                    tr.appendChild(td);
                }
            }



            td = document.createElement("td");
            if (obj[1] == 0) {
                td.className = this.OCls;
                td.innerHTML = "偶";
                tr.appendChild(td);
            }
            else {
                td.className = this.ODistributeCls;
                if (ismiss) {
                    td.innerHTML = obj[1];
                }
                else {
                    td.innerHTML = "&nbsp;";
                }
                tr.appendChild(td);
            }

            //后面
            if (this.NumParityNullCol > 0) {
                for (var i = 0; i < this.NumLargeOrSmallNullCol; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;"
                    td.className = this.ODistributeCls;
                    tr.appendChild(td);
                }
            }
        }
    }
    /*
       创建Td Data
       obj 数据源[0,1,2,3,4,5,6,7]
       tr 父级
       ismiss 是否遗漏
       misscss 遗漏样式
       lotteycss 中奖号码样式 
       floatval 上下浮动值  
       showval   显示中奖的值
       isAdd0 是否补0
   */
    Base.prototype.CreateTdData = function (obj, tr, ismiss, misscss, lotteycss, floatval, showval, isAdd0) {
        if (floatval == undefined) {
            floatval = 0;
        }
        var td = null;
        for (var i = 0, len = obj.length; i < len; i++) {
            td = document.createElement("td");
            if (obj[i] == 0) {
                td.className = lotteycss;
                if (showval == undefined || showval == "") {
                    if (isAdd0 == true) {
                        td.innerHTML = (i + floatval) > 9 ? (i + floatval) : "0" + (i + floatval);
                    }
                    else {
                        td.innerHTML = (i + floatval);
                    }
                }
                else {
                    td.innerHTML = showval;
                }
                tr.appendChild(td);
            }
            else {
                td.className = misscss;
                if (ismiss) {
                    td.innerHTML = obj[i];
                }
                else {
                    td.innerHTML = "&nbsp;";
                }
                tr.appendChild(td);
            }
        }
    }
    /*
      创建指定数量的Td
    */
    Base.prototype.CreateTdCount = function (count, tr, css) {
        var td = null;
        for (var i = 0; i < count; i++) {
            td = document.createElement("td");
            td.className = css;
            td.innerHTML = "&nbsp;";
            tr.appendChild(td);
        }
    }
    /*
     创建区间Td
     v 值
     arr 数组{[0,4],[4,6]} 
     misscss 遗漏样式
     lotteycss 中奖样式
   */
    Base.prototype.CreateTdSection = function (v, arr, tr, misscss, lotteycss) {
        var td = null;
        for (var i = 0, len = arr.length; i < len; i++) {
            td = document.createElement("td");
            if (v >= arr[i][0] && v <= arr[i][1]) {
                td.className = lotteycss;
                td.innerHTML = v;
            }
            else {
                td.className = misscss;
                td.innerHTML = "&nbsp;";
            }
            tr.appendChild(td);
        }
    }


    /*
     创建区间Td 适用按照顺序
     vrr 区间[2,3,8,7]
     arr 区间[2,3,8,7]
     misscss 遗漏样式
     lotteycss 中奖样式
   */
    Base.prototype.CreateTdSectionExt = function (vrr, arr, tr, misscss, lotteycss) {
        var td = null;
        for (var i = 0, len = arr.length; i < len; i++) {
            td = document.createElement("td");
            if (arr[i] == 0) {
                td.className = lotteycss;
                td.innerHTML = vrr[i];
            }
            else {
                td.className = misscss;
                td.innerHTML = arr[i]
            }
            tr.appendChild(td);
        }
    }

    /*
    创建区间Td 适用按照固定顺序[0, 3, 6, 9, 1, 4, 7, 2, 5, 8]
    数据源 [0,1,2,3,4,5,6,7,8,9];
  */
    Base.prototype.CreateTdSectionFixed = function (fixedData, missData, tr, misscss, lotteycss) {
        var td = null;
        var i = 0, j = 0, len = missData.length, CopyData = [];

        for (i = 0; i < len; i++) {
            CopyData.push(missData[fixedData[i]]);
        }

        len = CopyData.length;
        for (i = 0; i < len; i++) {
            td = document.createElement("td");
            if (CopyData[i] == 0) {
                td.className = lotteycss;
                td.innerHTML = fixedData[i];
            }
            else {
                td.className = misscss;
                td.innerHTML = CopyData[i];
            }
            tr.appendChild(td);
        }
    }


    //顺序创建Td
    Base.prototype.CreatTdOrder = function (obj, tr, disStyleCss) {
        var td = null;
        if (obj != null) {
            for (var j = 0, len = obj.length; j < len; j++) {
                td = document.createElement("td");
                td.className = disStyleCss;
                td.innerHTML = obj[j];
                tr.appendChild(td);
            }
        }
    }


    //统计底部 添加到页面
    Base.prototype.StatAppendChildDistribute = function (body, lDistribute, avDistribute, maxDistributeTr) {
        var t = body;
        if (this.tDistribute != null) {
            for (var i = this.tDistribute.childNodes.length - 1; i >= 0 ; i--) {
                this.tDistribute.removeChild(this.tDistribute.childNodes[i]);
            }
        }
        this.tDistribute.appendChild(lDistribute);
        this.tDistribute.appendChild(avDistribute);
        this.tDistribute.appendChild(maxDistributeTr);
        if (lDistribute != null && lDistribute.cells.length > 0) {
            var leftCount = t[0].cells.length - lDistribute.cells.length;
            //alert(t[0].cells.length + "|" + lDistribute.cells.length);
            if (leftCount > 0) {
                for (var i = 0; i < leftCount; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;";
                    lDistribute.appendChild(td);
                }
            }
        }
        if (avDistribute != null && avDistribute.cells.length > 0) {
            var leftCount = t[0].cells.length - avDistribute.cells.length;
            //alert(t[0].cells.length + "|" + avDistribute.cells.length);
            if (leftCount > 0) {
                for (var i = 0; i < leftCount; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;";
                    avDistribute.appendChild(td);
                }
            }
        }
        if (maxDistributeTr != null && maxDistributeTr.cells.length > 0) {
            var leftCount = t[0].cells.length - maxDistributeTr.cells.length;
            //alert(t[0].cells.length + "|" + maxDistributeTr.cells.length);
            if (leftCount > 0) {
                for (var i = 0; i < leftCount; i++) {
                    var td = document.createElement("td");
                    td.innerHTML = "&nbsp;";
                    maxDistributeTr.appendChild(td);
                }
            }
        }
    }


    //创建各类型和值走势
    /*
        type 1 红球  2蓝球 
        arr  和值分区 
        floatval 浮度值，用于3-23，1-12类似的数据处理 
        isadd0 是否补0
    */
    Base.prototype.CreateSumValueBody = function (type, arr, floatval, isadd0) {
        //alert(this.LotteryCode);
        if (floatval == undefined) {
            floatval = 0;
        }
        var documentFragment = document.createDocumentFragment();
        var lotteryResult = "", lotteryResultHtml = "", td = null;
        if (this.NumLotteryData != null) {
            if (this.NumLotteryData.chart[0].Data != null) //基本走势图
            {
                var chart = this.NumLotteryData.chart;
                for (var i = 0; i < chart.length; i++) {
                    var tr = null;
                    if (i % this.IssueNoEndIndex + 1 == this.IssueNoEndIndex) {
                        tr = document.createElement("tr");
                        tr.id = "tr_" + chart[i].IssueNo;
                        tr.className = this.IssueNoEndCls;
                        this.BodyContent += "<tr id='tr_" + chart[i].IssueNo + "' class='" + this.IssueNoEndCls + "'>";
                    }
                    else {
                        tr = document.createElement("tr");
                        tr.className = this.IssueNoEndCls;
                        tr.id = "tr_" + chart[i].IssueNo;
                    }
                    this.CreateIssueNo(chart[i].IssueNo, tr, 1);//期号 

                    td = null;
                    //显示开奖结果  
                    if (this.ShowLotteryResult) {
                        td = document.createElement("td");
                        lotteryResultHtml = "";
                        for (var j = 0; j < chart[i].NumberFont.length; j++) {
                            lotteryResultHtml += "<span class='redFont'>" + chart[i].NumberFont[j] + "</span>";
                        }
                        td.innerHTML = "<div class='awardFont'>" + lotteryResultHtml+"</div>";
                        tr.appendChild(td);
                    }

                    //显示和值
                    if (this.ShowSumValue && chart[i].Data != null) {
                        td = document.createElement("td");
                        td.innerHTML = chart[i].Data;
                        tr.appendChild(td);
                    }

                    if (arr != null) {
                        this.CreateTdSection(Number(chart[i].Data), arr, tr, this.SumDistributeCls, this.SumCls);
                    }
                    else {
                        this.CreateTdData(chart[i].MissStatData, tr, true, this.SumDistributeCls, this.SumCls, floatval, "", isadd0);
                    }
                    //大小
                    if (chart[i].MissBigSmall != null) {

                        this.CreateTdBigSmall(chart[i].MissBigSmall, tr, true);
                    }
                    //奇偶
                    if (chart[i].MissEvenOdd != null) {

                        this.CreateTdEvenOdd(chart[i].MissEvenOdd, tr, true);
                    }



                    documentFragment.appendChild(tr);
                }
                if (this.tbody != null) {
                    for (var i = this.tbody.childNodes.length - 1; i >= 0 ; i--) {
                        this.tbody.removeChild(this.tbody.childNodes[i]);
                    }
                }
                this.tbody.appendChild(documentFragment);
            }
        }
        this.Parse();
    }
    //创建和值走势统计
    Base.prototype.CreateSumValDistribute = function () {
        var colSpan = 1;
        if (this.NumLotteryData != null && this.NumLotteryData.stat != null) {
            if (this.NumLotteryData.stat.OutCount != null) {
                var countdata = [], trArry = [], isNullCell = false, isProgressBar = true;
                //数据
                countdata[0] = this.NumLotteryData.stat.OutCount; //出现次数 
                countdata[1] = this.NumLotteryData.stat.MissAvg; //平均遗漏 
                countdata[2] = this.NumLotteryData.stat.MissMax; //最大遗漏   
                //tr
                trArry[0] = { tr: [this.CreateBodyTr("countTr", "web_colorSpeedBackGround2_tr2")], name: "出现次数", mykey: "CXCS" };
                trArry[1] = { tr: [this.CreateBodyTr("avDistributeTr", "web_colorSpeedBackGround2_tr2")], name: "平均遗漏", mykey: "PJYL" };
                trArry[2] = { tr: [this.CreateBodyTr("maxDistributeTr", "web_colorSpeedBackGround2_tr2")], name: "最大遗漏", mykey: "ZDYL" };

                //控制柱状图高度
                if (isProgressBar) {
                    this.OutCountRate()
                };
                for (var i = 0, len = countdata.length; i < len; i++) {
                    //列头
                    this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>" + trArry[i].name + "</span><span class='questionMark_icon' myaction='tjsm' mykey='" + trArry[i].mykey + "'></span></span>", trArry[i].tr[0], [{ name: 'vAlign', value: 'bottom' }]);

                    i > 0 ? isProgressBar = false : true;

                    //中奖号码
                    if (this.ShowLotteryResult) {
                        this.CreateCount(null, trArry[i].tr[0], "&nbsp;");
                    }
                    //和值
                    if (this.ShowSumValue) {
                        this.CreateCount(null, trArry[i].tr[0], "&nbsp;");
                    }
                    //范围
                    if (countdata[i].data != null) {
                        this.CreateCount(countdata[i].data, trArry[i].tr[0], "&nbsp;", isNullCell, isProgressBar);
                    }
                    //大小
                    this.CreateCount(countdata[i].bigsmall, trArry[i].tr[0], "&nbsp;", isNullCell, isProgressBar);
                    //奇偶
                    this.CreateCount(countdata[i].oddeven, trArry[i].tr[0], "&nbsp;", isNullCell, isProgressBar);
                   
                   
                }
            }
            var t = this.tbody.rows;
            this.StatAppendChildDistribute(t, trArry[0].tr[0], trArry[1].tr[0], trArry[2].tr[0]);
        }
    }

    module.exports = Base;
});