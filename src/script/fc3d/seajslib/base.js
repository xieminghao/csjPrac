/****************************数据分析基础处理类******************************/
define(function (require, exports, module) {
    var Class = require("../../fc3d/seajslib/classconfig");//引用样式配置文件
    function Base(container, tableId, theadId, tbodyId, tfootId, tdistributeId, tcanvasId, issnunoId) {
        this.theadId = theadId;//头部ID
        this.tbodyId = tbodyId;//内容区域ID
        this.tfootId = tfootId;//尾部ID
        this.tableId = tableId;//表ID
        this.issnunoId = (issnunoId == undefined ? "issnuno" : (issnunoId == null ? "issnuno" : issnunoId));//统计区域  

        this.table = document.getElementById(tableId);//获取表格对象
        this.container = container;//数据渲染容器
        this.distribute = null;//遗漏数据统计区域
        this.tdistributeId = (tdistributeId == undefined ? "distribute" : (tdistributeId == null ? "distribute" : tdistributeId));//统计区域
        this.pagesize = parseInt(Class.PageSize);//默认期数
        /********************初始化表格*********************/

        this._CreateHead();//创建数据头部
        this._CreateBody();//创建数据内容
        this._CreateDistribute();//创建遗漏统计内容
        this._CreateFooter();//创建数据尾部
        this.thead = document.getElementById(this.theadId);//获取表格头部对象
        this.tbody = document.getElementById(this.tbodyId);//获取表格数据区域对象
        this.tfoot = document.getElementById(this.tfootId);//获取表格尾部对象
        this.tDistribute = document.getElementById(this.tdistributeId);//获取遗漏统计数据区域对象
        this._lineStr = "";//IE划线
        this._Lines = [];//存储IE划线对象
        this._TmpDom = document.createDocumentFragment();//存储IE划线创建文档
        this._canvas = tcanvasId == undefined ? "canvas" : (tcanvasId == "" ? "canvas" : tcanvasId);//默认追加线条父容器ID
        this._DistributeArr = new Array();//遗漏数据
        this._DistributeArrKey = new Array();//遗漏数据集合KEY对应
        this._KeyTable = [];//保存球与KEY关系
        this._HistoryKeyTable = [];//保存历史球值关系
        this.BodyContent = "";//区域内容
        this.PageSize = parseInt(Class.PageSize, 10);//默认期數
        /***************对外公开属性******************/
        /***************表格样式属性******************/
        this.CountRate = 5;//出现次数 百分比 戮值
        this.NumLotteryData = [];//数据集合属性
        this.IssueNoEndIndex = Class.IssueNoEndIndex;//期号分割索引
        this.IssueNoEndCls = Class.IssueNoEndCls;//期号分割索引样式
        this.IssueCls = Class.IssueCls;//期号样式

        this.RedResultCls = Class.RedResultCls;//球号样式
        this.BlueResultCls = Class.BlueResultCls;//球号样式

        this.BlueDistributeCls = Class.BlueDistributeCls;//蓝球遗漏数据样式
        this.RedDistributeCls = Class.RedDistributeCls;//红球遗漏数据样式
        this.YellowDistributeCls = Class.YellowDistributeCls;//黄球遗漏数据样式	
        this.LargeDistributeCls = Class.LargeDistributeCls;//大遗漏样式
        this.SmallDistributeCls = Class.SmallDistributeCls;//小遗漏样式
        this.OddDistributeCls = Class.OddDistributeCls;//奇遗漏样式
        this.ODistributeCls = Class.ODistributeCls;//偶遗漏样式

        this.OtherDistributeCls = Class.OtherDistributeCls;
        this.OtherCls = Class.OtherCls;//振幅样式
        this.ChongHaoCls = Class.ChongHaoCls;//重号样式
        this.BianHaoCls = Class.BianHaoCls;//边号样式
        this.ProgressBarCls = Class.ProgressBarCls;//出现次数统计样式
        this.YiLouFenChenCls = Class.YiLouFenChenCls;//遗漏分层样式
        /****************详细属性******************/
        this.LargeCls = Class.LargeCls;//"大"样式
        this.SmallCls = Class.SmallCls;//"小"样式
        this.OddCls = Class.OddCls;//"奇"样式
        this.OCls = Class.OCls;//"偶"样式
        this.SumCls = Class.SumCls;//和值样式
        this.DefaultGray = Class.DefaultGray;//默认灰色
        this.RedLineColor = Class.RedLineColor;//红色结果连线样式
        this.BlueLineColor = Class.BlueLineColor;//蓝色结果连线样式


        this.SumDistributeCls = Class.SumDistributeCls;//和值遗漏样式

        /****************定义是否显示单元格***********/
        this.ShowLotteryResult = false;//默认是否显示中奖结果栏
        this.ShowLargeOrSmall = true;//默认是否显示大小走势栏
        this.IsLargeOrSmallFromZero = false;//模式大小比值栏小从0开始
        this.ShowNullLargeOrSmall = true;//默认显示大小栏中间空格
        this.ShowParity = true;//默认是否显示奇偶走势栏
        this.ShowNullParity = true;//默认是否显示奇偶栏中间空格
        this.ShowSumValue = false;//默认是否显示和值
        this.NumLotteryMaxCol = 17;//默认显示号码走势球区域栏数
        this.NumLargeOrSmallNullCol = 0;//默认显示大小单元格左右空格数量
        this.NumParityNullCol = 0;//默认显示奇偶单元格左右空格数量
   
        this.NumFloatNullCol = 0;//默认显示振幅单元格左右空格数量 
        this.NumNullLargeOrSmallCol = 0;//默认显示大小栏中间空格数量
        this.NumNullParityCol = 0;//默认是否显示奇偶栏中间空格数量
    };
    //异步请求数据 
    Base.prototype.getData = function (url, queryOrJson, success, error, obj, methodType) {
        //ajax 请求 url 请求地址，queryOrJson 请求参数，success 成功回调方法，error 失败回调方法  obj 加载数据对象
        jQuery.support.cors = true;
        if (!methodType) {
            methodType = "GET";
        }
        if (url != undefined) {
            $.ajax({
                type: methodType,
                url: url,
                data: queryOrJson,
                success: function (msg) {
                    if ($.trim(msg) != '') {
                        var json = eval("(" + msg + ")");
                        if (json != undefined && json.State == 1) {
                            success(json, obj);
                        } else {
                            error(json);
                        }
                    }
                },
                error: function (obj, msg) {
                    error(msg);
                }
            });
        }
    };
    Base.prototype.ajax = function (url, queryOrJson, success, error, methodType) {
        //ajax 请求 url 请求地址，queryOrJson 请求参数，success 成功回调方法，error 失败回调方法  obj 加载数据对象
        jQuery.support.cors = true;
        if (!methodType) {
            methodType = "GET";
        }
        if (url != undefined) {
            $.ajax({
                type: methodType,
                url: url,
                data: queryOrJson,
                success: function (msg) {
                    success(msg);
                },
                error: function (obj, msg) {
                    error(msg);
                }
            });
        }
    };
    Base.prototype.getDataByJsonp = function (url, queryOrJson, success, error, obj) {
        //ajax 请求 url 请求地址，queryOrJson 请求参数，success 成功回调方法，error 失败回调方法  obj 加载数据对象 
        jQuery.support.cors = true;
        $.ajax({
            type: 'GET',
            url: url,
            data: queryOrJson,
            dataType: "jsonp",
            timeout: 180000,
            success: function (json) {
                if (typeof (json) == "object" && json.State == 1) {
                    success(json, obj);
                } else {
                    error(json);
                }
            },
            error: function (obj, msg) {
                error(msg);
            }
        });
    };
    //异步请求数据 (json)
    Base.prototype.getJsonData = function (url, queryOrJson, success, error, obj) {
        //ajax 请求 url 请求地址，queryOrJson 请求参数，success 成功回调方法，error 失败回调方法  obj 加载数据对象
        jQuery.support.cors = true;
        $.getJSON(url, queryOrJson, function (json) {
            if (typeof (json) == "object") {
                success(json, obj);
            } else {
                error(json);
            }
        });
    };
    Base.prototype.Substr = function (str, len) {
        var char_length = 0;
        for (var i = 0; i < str.length; i++) {
            var son_str = str.charAt(i);
            encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5;
            if (char_length > len) {
                var sub_len = char_length == len ? i + 1 : i;
                return str.substr(0, sub_len) + "..";
                break;
            }
        }
        return str;
    }
    //判断IE版本
    Base.prototype.IsIE = function (version) {
        var b = document.createElement('b');
        b.innerHTML = "<!--[if lte IE " + version + "]><i></i><![endif]-->";
        return b.getElementsByTagName('i').length === 1;
    };
    Base.prototype.setTBodyInnerHTML = function (tbody, html) {
        var div = document.createElement('div');
        div.innerHTML = '<table>' + html + '</table>';
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild)
        }
        tbody.appendChild(div.firstChild.firstChild)
    };

    Base.extend = function (subClass, superClass) {
        var F = function () { };
        F.prototype = superClass.prototype;
        subClass.prototype = new F();
        subClass.prototype.constructor = subClass;
        subClass.superclass = superClass.prototype; //加多了个属性指向父类本身以便调用父类函数 
        if (superClass.prototype.constructor == Object.prototype.constructor) {
            superClass.prototype.constructor = superClass;
        }
    };


    //创建table thead元素
    Base.prototype._CreateHead = function () {
        var thead = document.createElement("thead");
        thead.id = this.theadId;
        thead.className = this.theadId;
        this.table.appendChild(thead);
    };
    //创建table tbody元素
    Base.prototype._CreateBody = function () {

        var tbody = document.createElement("tbody");
        tbody.id = this.tbodyId;
        tbody.className = this.tbodyId;
        this.table.appendChild(tbody);
    };
    //创建table foot元素
    Base.prototype._CreateFooter = function () {

        var tfoot = document.createElement("tfoot");
        tfoot.id = this.tfootId;
        tfoot.className = this.tfootId;
        this.table.appendChild(tfoot);
    };
    //创建table 遗漏统计区域tbody元素
    Base.prototype._CreateDistribute = function () {
        var tbody = document.createElement("tbody");
        tbody.id = this.tdistributeId;
        this.table.appendChild(tbody);
    };
    //创建table thead tr
    Base.prototype.CreateHeadTr = function (trCls) {

        var tr = document.createElement("tr");
        tr.className = trCls;
        this.thead.appendChild(tr);
        return tr;
    };
    /*清空区域重绘*/
    Base.prototype.ReRender = function () {
        this.RemoveTitle();
        this.RemoveBody();
    };
    /*清空表格内所有元素*/
    Base.prototype.ClearTable = function () {
        this.table.removeChild(this.thead);
        this.table.removeChild(this.tbody);
        this.table.removeChild(this.tfoot);
        this.table.removeChild(this.tDistribute);
    };
    //清除头尾部
    Base.prototype.RemoveTitle = function () {
        if (this.thead != null) {
            for (var i = this.thead.childNodes.length - 1; i >= 0 ; i--) {
                this.thead.removeChild(this.thead.childNodes[i]);
            }
        }
        if (this.tfoot != null) {
            for (var i = this.tfoot.childNodes.length - 1; i >= 0 ; i--) {
                this.tfoot.removeChild(this.tfoot.childNodes[i]);
            }
        }
    };
    //清除内容区域
    Base.prototype.RemoveBody = function () {
        if (this.tbody != null) {
            for (var i = this.tbody.childNodes.length - 1; i >= 0 ; i--) {
                this.tbody.removeChild(this.tbody.childNodes[i]);
            }
        }
        //console.log(this.tDistribute.childNodes.length);
        if (this.tDistribute != null) {
            for (var i = this.tDistribute.childNodes.length - 1; i >= 0 ; i--) {
                this.tDistribute.removeChild(this.tDistribute.childNodes[i]);
            }
        }
        //console.log("剩余:" + this.tDistribute.childNodes.length);
        if (this._canvas != "") {
            var vhtml = document.getElementById(this._canvas);
            if (vhtml != null) {
                vhtml.innerHTML = "";
                vhtml.style.display = 'block';
            }

        }

    };
    /*
	/// <summary>
    /// 创建table thead td元素
    /// </summary>
    /// <param name="id">ID属性</param>
    /// <param name="rowspan">rowspan属性</param>
    /// <param name="colspan">colspan属性</param>
    /// <param name="className">className属性</param>
    /// <param name="title">显示文本</param>
    /// <param name="parent">父级元素</param>
    /// <returns></returns>
	*/
    Base.prototype.CreateHeadTd = function (id, rowspan, colspan, className, title, parent, event, fn, width) {
        var td = document.createElement("td");
        if (id != undefined && id != "") {
            td.id = id;
        }
        if (rowspan != undefined && rowspan != "") {
            td.rowSpan = rowspan;
        }
        if (colspan != undefined && colspan != "") {
            td.colSpan = colspan;
        }
        if (className != undefined && className != "") {
            td.className = className;
            
        }
        if (width != undefined && width != "") {
            td.style.width = width;
        }
        //期号排序，暂时屏蔽
        if (event != "" && fn != undefined) {
            if (td.addEventListener) {
                td.addEventListener(event, fn, false);

                //侦听是否是期数排序列
                if (id == this.issnunoId) {
                        td.className = "issueno";
                    td.addEventListener(event, function () {
                        var issueObj = getElementsByClassName("issueno");
                        if (issueObj != undefined) {
                            //正序图标时更改样式为倒序图标
                            for (var i = 0; i < issueObj.length; i++) {
                                if (issueObj[i].children[0].className.indexOf("iconJT") > -1) {
                                    issueObj[i].children[0].className = "iconJB";
                                }
                                else {
                                    issueObj[i].children[0].className = "iconJT";
                                }
                            }
                        }
                    }, false);
                }

            }
            else if (td.attachEvent) //兼容IE系列浏览器
            {
                td.attachEvent("on" + event, fn);
                if (id == this.issnunoId) {
                    td.className = "issueno";
                    td.attachEvent("on" + event, function () {
                        var issueObj = getElementsByClassName("issueno");
                        if (issueObj != undefined) {
                            //正序图标时更改样式为倒序图标
                            for (var i = 0; i < issueObj.length; i++) {
                                if (issueObj[i].children[0].className.indexOf("iconJT") > -1) {
                                    issueObj[i].children[0].className = "iconJB";
                                }
                                else {
                                    issueObj[i].children[0].className = "iconJT";
                                }
                            }
                        }
                    }, false);
                }
            }
        }
        td.innerHTML = title;
        parent.appendChild(td);
    };

    //创建table foot tr
    Base.prototype.CreateFootTr = function (trCls) {
        var tr = document.createElement("tr");
        tr.className = trCls;
        this.tfoot.appendChild(tr);
        return tr;
    };
    //创建table foot td
    Base.prototype.CreateFootTd = function (id, rowSpan, colSpan, className, title, parent, event, fn, width) {
        this.CreateHeadTd(id, rowSpan, colSpan, className, title, parent, event, fn, width);
    };
    //创建tr标签
    Base.prototype.CreateBodyTr = function (id, className) {
        var tr = document.createElement("tr");
        if (id != undefined && id != "") {
            tr.id = id;
        }
        if (className != undefined && className != "") {
            tr.className = className;
        }
        return tr;
    };
    //创建td标签  attris自定义属性  格式{name:'a',value:'b'}
    Base.prototype.CreateBodyTd = function (id, rowSpan, colSpan, className, title, parent, attris) {
        var td = document.createElement("td");
        if (id != undefined && id != "") {
            td.id = id;
        }
        if (rowSpan != undefined && rowSpan != "") {
            td.rowSpan = rowSpan;
        }
        if (colSpan != undefined && colSpan != "") {
            td.colSpan = colSpan;
        }
        if (className != undefined && className != "") {
            td.className = className;
        }
        if (attris != null) {
            for (var i = 0; i < attris.length; i++) {
                td.setAttribute(attris[i].name, attris[i].value);
            }
        }
        td.innerHTML = title;
        parent.appendChild(td);
    };
    /*********************************************走势相关方法*******************************************/
    //创建期数列
    Base.prototype.CreateIssueNo = function (issueNo, tr, colSpan) {
        var td = document.createElement("td");
        td.className = this.IssueCls;
        td.colSpan = colSpan;
        var tdTxt = document.createTextNode(issueNo);
        td.appendChild(tdTxt);
        tr.appendChild(td);
    }
    //创建内容列
    Base.prototype.CreateBody = function (fn) {
        var documentFragment = document.createDocumentFragment();
        if (this.NumLotteryData != null) {
            if (this.NumLotteryData.chart[0].MissFont != null) //基本走势图
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
                        tr.id = "tr_" + chart[i].IssueNo;
                    }
                    this.CreateIssueNo(chart[i].IssueNo, tr, 1);
                    for (var j = 0; j < chart[i].MissFont.length; j++) {
                        if (chart[i].MissFont[j] == 0)//为0表示为中奖结果
                        {
                            var td = document.createElement("td");
                            td.className = this.RedResultCls;
                            tr.appendChild(td);
                        }
                        else {
                            var td = document.createElement("td");
                            td.className = this.RedDistributeCls;
                            var tdTxt = document.createTextNode(chart[i].MissFont[j]);
                            td.appendChild(tdTxt);
                            tr.appendChild(td);
                        }

                    }
                    for (var j = 0; j < chart[i].MissEnd.length; j++) {
                        if (chart[i].MissEnd[j] == 0)//为0表示为中奖结果
                        {
                            var td = document.createElement("td");
                            td.className = this.BlueResultCls;
                            //td.id = "td_" + i + "_" + j;
                            tr.appendChild(td);
                        }
                        else {
                            var td = document.createElement("td");
                            td.className = this.BlueDistributeCls;
                            var tdTxt = document.createTextNode(chart[i].MissEnd[j]);
                            td.appendChild(tdTxt);
                            tr.appendChild(td);
                        }
                    }
                    documentFragment.appendChild(tr);
                }

                if (this.tbody != null) {
                    for (var i = this.tbody.childNodes.length - 1; i >= 0 ; i--) {
                        this.tbody.removeChild(this.tbody.childNodes[i]);
                    }
                }
                this.tbody.appendChild(documentFragment);
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
                    for (var i = 0; i < tds.length; i++) {
                        if (tds.eq(i).hasClass(_this.RedResultCls)) {
                            tds.eq(i).html(resultArr[0].split(',')[redtmp]);
                            redtmp++;
                        }
                        if (tds.eq(i).hasClass(_this.BlueResultCls)) {
                            tds.eq(i).html(resultArr[1].split(',')[bluetmp]);
                            bluetmp++;
                        }
                    }
                });
            }
            else  //号码定位走势
            {

            }
        }
        this.Parse();
    }
    Base.prototype.ClearBody = function () {
        this.BodyContent = "";
        if (this._canvas != "") {
            $("#" + this._canvas).html("");
        }

        if (navigator.userAgent.indexOf("MSIE") > -1) {
            for (var i = this.tbody.childNodes.length - 1; i >= 0 ; i--) {
                this.tbody.removeChild(this.tbody.childNodes[i]);
            }
        }
        else {
            this.tbody.innerHTML = this.BodyContent;
        }
        var distributeBody = document.getElementById(this.tdistributeId);
        if (distributeBody != null) {
            this.table.removeChild(distributeBody);
        }
    };

    /*创建遗漏统计
	colSpan:所占列数
	*/
    Base.prototype.CreateDistribute = function (colSpan) {
        if (this.NumLotteryData != null && this.NumLotteryData.stat != null) {
            if (this.NumLotteryData.stat.OutCount.front != null) {
                this.OutCountRate();
                /*******************上期遗漏******************/
                var cTr = this.CreateBodyTr("countTr", "");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>出现次数</span><span class='questionMark_icon' myaction='tjsm' mykey='CXCS'></span></span>", cTr, [{ name: "vAlign", value: "bottom" }]);
                if (this.ShowLotteryResult) {
                    this.CreateCount(null, cTr, "&nbsp;");
                }
                if (this.NumLotteryData.stat.OutCount.front != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.front, cTr);
                }
                if (this.NumLotteryData.stat.OutCount.end != null) {
                    this.CreateCount(this.NumLotteryData.stat.OutCount.end, cTr);
                }


                /*******************平均遗漏******************/
                var aTr = this.CreateBodyTr("avDistributeTr", "");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>平均遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='PJYL'></span></span>", aTr);
                if (this.ShowLotteryResult) {
                    this.CreateCount(null, aTr, "&nbsp;");
                }
                if (this.NumLotteryData.stat.MissAvg.front != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.front, aTr);
                }
                if (this.NumLotteryData.stat.MissAvg.end != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissAvg.end, aTr);
                }


                /*********************最大遗漏*****************/
                var mTr = this.CreateBodyTr("maxDistributeTr", "");
                this.CreateBodyTd("", "", colSpan, "", "<span class='questionMark'><span class='questionMark_text'>最大遗漏</span><span class='questionMark_icon' myaction='tjsm' mykey='ZDYL'></span></span>", mTr);
                if (this.ShowLotteryResult) {
                    this.CreateCount(null, mTr, "&nbsp;");
                }
                if (this.NumLotteryData.stat.MissMax.front != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.front, mTr);
                }
                if (this.NumLotteryData.stat.MissMax.end != null) {
                    this.CreateMissData(this.NumLotteryData.stat.MissMax.end, mTr);
                }
            }
            this.tDistribute.appendChild(cTr);
            this.tDistribute.appendChild(aTr);
            this.tDistribute.appendChild(mTr);
            var t = this.tbody.rows;
            var lDistribute = document.getElementById("countTr");
            var avDistribute = document.getElementById("avDistributeTr");
            var maxDistributeTr = document.getElementById("maxDistributeTr");
            if (lDistribute != null && lDistribute.cells.length > 0) {
                var leftCount = t[0].cells.length - lDistribute.cells.length;
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
                if (leftCount > 0) {
                    for (var i = 0; i < leftCount; i++) {
                        var td = document.createElement("td");
                        td.innerHTML = "&nbsp;";
                        maxDistributeTr.appendChild(td);
                    }
                }
            }
            //this.table.innerHTML+=countTr+lDistributeTr+avDistributeTr+maxDistributeTr;
            //this.table.appendChild(tbody);	

        }
    }
    /* 设置 出现次数 百分比值*/
    Base.prototype.OutCountRate = function () {
        if (this.NumLotteryData != null) {
            if (this.NumLotteryData.stat.TotalCount == 50) {
                this.CountRate = 3;
            } else if (this.NumLotteryData.stat.TotalCount == 100) {
                this.CountRate = 2;
            } else {
                this.CountRate = 5;
            }
        }
    };
    /***************************************辅助方法列表***************************************/
    /*划线方法
	className:需要连线的元素样式
	lineWidth:划线宽度
	lineColor:划线颜色
	canvas:显示区域
	*/
    Base.prototype.DrawLine = function (className, lineWidth, lineColor, canvas) {
        var objArr = CpMao.getClass("td", className);
        this._Line(objArr, lineWidth, lineColor, canvas);
    };
    /*清除划线*/
    Base.prototype.ClearLine = function () {
        $("#" + this._canvas).html("");
    };
    /*遗漏分层方法
	在table的指定范围内 
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	showflag: true显示 false隐藏
	*/
    Base.prototype.DisplayOrnot = function (begincol, endcol, beginclum, endclum, showflag) {
        var vtable = this.table;
        var isBall = new Array();
        isBall.push(this.BlueResultCls);
        isBall.push(this.RedResultCls);
        isBall.push(this.SumCls);
        isBall.push(this.LargeCls);//"大"样式
        isBall.push(this.SmallCls);//"小"样式
        isBall.push(this.OddCls);//"奇"样式
        isBall.push(this.OCls);//"偶"样式

        isBall.push(this.ChongHaoCls);//重号样式
        isBall.push(this.BianHaoCls);//边号样式


        var isBallStr = isBall.join(',');
        var isSort = this._IsSort();//获取是否进行过排序操作
        if (!isSort) {
            if (showflag) {
                for (var j = begincol; j < endcol; j++) {
                    for (var i = beginclum; i > endclum; i--) {
                        if (vtable.rows[i] == null || vtable.rows[i].parentElement == this.thead) {
                            continue;
                        }
                        var cell = vtable.rows[i].cells[j];
                        if (cell == null) {
                            break;
                        }
                        if (cell.className != "" && isBall.contains(cell.className.split(' ').length > 1 ? (cell.className.split(' ')[0] + " " + cell.className.split(' ')[1]) : cell.className)) {
                            if (cell.innerHTML != "")
                                break;
                        }
                        else {
                            if (cell.innerHTML != "&nbsp;") {
                                $(cell).addClass(this.YiLouFenChenCls);
                            }
                        }
                    }
                }
            }
            else {
                for (var i = beginclum; i > endclum; i--) {
                    for (var j = begincol; j < endcol; j++) {
                        if (vtable.rows[i] == null) {
                            continue;
                        }
                        var cell = vtable.rows[i].cells[j];
                        $(cell).removeClass(this.YiLouFenChenCls);
                    }
                }
            }
        }
        else {
            if (showflag) {
                var dataRows = this.tbody.rows;
                for (var j = begincol; j < endcol; j++) {
                    for (var i = 0; i < dataRows.length; i++) {
                        if (dataRows[i] == null) {
                            continue;
                        }
                        var cell = dataRows[i].cells[j];
                        if (cell == null) {
                            break;
                        }
                        if (cell.className != "" && isBall.contains(cell.className.split(' ').length > 1 ? (cell.className.split(' ')[0] + " " + cell.className.split(' ')[1]) : cell.className)) {
                            if (cell.innerHTML != "")
                                break;
                        }
                        else {
                            if (cell.innerHTML != "&nbsp;") {
                                $(cell).addClass(this.YiLouFenChenCls);
                            }
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < this.tbody.rows.length; i++) {
                    for (var j = begincol; j < endcol; j++) {
                        if (this.tbody.rows[i] != null && this.tbody.rows[i].cells[j] != null) {
                            if ($(this.tbody.rows[i].cells[j]).hasClass(this.YiLouFenChenCls)) {
                                $(this.tbody.rows[i].cells[j]).removeClass(this.YiLouFenChenCls);
                            }
                        }
                    }
                }
            }
        }

    };
    /*遗漏分层集合
    displayOrnotArr:遗漏分层元素集合  格式 {begincol:1,endcol:1,beginclum:1,endclum:1,showflag:true}
    */
    Base.prototype.DisplayOrnotArr = function (displayOrnotArr) {
        if (displayOrnotArr != null && displayOrnotArr.length > 0) {
            try {
                for (var i = 0; i < displayOrnotArr.length; i++) {
                    this.DisplayOrnot(displayOrnotArr[i].begincol, displayOrnotArr[i].endcol, displayOrnotArr[i].beginclum, displayOrnotArr[i].endclum, displayOrnotArr[i].showflag);
                }
            }
            catch (e) {
            }
        }
    };
    /*遗漏筛选方法
	在table的指定范围内 
	begincol:开始列
	endcol:结束列
	beginclum:开始行
	endclum:结束行
	showflag: true显示 false隐藏
	*/
    Base.prototype.Ornot = function (begincol, endcol, beginclum, endclum, showflag, index) {
        var isBall = new Array();
        isBall.push(this.BlueResultCls);
        isBall.push(this.RedResultCls);
        isBall.push(this.RedResultCls2);
        isBall.push(this.SumCls);
        isBall.push(this.LargeCls);
        isBall.push(this.SmallCls);//"小"样式

        //isBall.push(this.OddCls);//"奇"样式
        //isBall.push(this.OCls);//"偶"样式
        //isBall.push(this.ZhiCls);//"质"样式
        //isBall.push(this.HeCls);//"合"样式
      
        isBall.push(this.BianHaoCls);//样式
        isBall.push(this.ChongHaoCls);//样式
       
        isBall.push(this.BlueResultCls + " " + this.BianHaoCls);//样式
        isBall.push(this.BlueResultCls + " " + this.ChongHaoCls);//样式
        isBall.push(this.RedResultCls + " " + this.BianHaoCls);//样式
        isBall.push(this.RedResultCls + " " + this.ChongHaoCls);//样式

        var isBallStr = isBall.join(',');
        var vtable = this.table;
        var k = 0;
        if (index == undefined) index = 0;
        if (!showflag) {
            this._DistributeArr[index] = new Array();
        }

        for (var i = beginclum; i < endclum; i++) {
            for (var j = begincol; j < endcol; j++) {
                var cell = vtable.rows[i].cells[j];
                if (cell == null) {
                    break;
                }
                var tdClassName = cell.className;
                if (tdClassName.split(' ').length > 0) {
                    tdClassName = tdClassName.split(' ')[0] + " " + tdClassName.split(' ')[1];
                }
                if (cell.className != "" && isBall.contains(tdClassName)) {
                    continue;
                }
                else {
                    k++;
                    if (showflag) {
                        cell.innerHTML = cell.getAttribute("data");
                    }
                    else {
                        this._DistributeArr[index][k] = cell.innerHTML;
                        cell.setAttribute("data", cell.innerHTML);
                        cell.innerHTML = " ";
                    }
                }
            }
        }

    };
    /*遗漏筛选方法--集合
    ornotArr:遗漏集合 格式{begincol:1,endcol:1,beginclum:1,endclum:1,showflag:true}
    */
    Base.prototype.OrnotArr = function (ornotArr) {
        if (ornotArr != null && ornotArr.length > 0) {
            try {
                for (var i = 0; i < ornotArr.length; i++) {
                    this.Ornot(ornotArr[i].begincol, ornotArr[i].endcol, ornotArr[i].beginclum, ornotArr[i].endclum, ornotArr[i].showflag, i);
                }
            }
            catch (e) {
            }
        }
    };
    //是否显示划线
    Base.prototype.ShowLine = function (showflag) {
        if (showflag) {
            $("#" + this._canvas).show();
        }
        else {
            $("#" + this._canvas).hide();
        }

    };
    /*边号筛选方法
	在table的指定范围内 
	begincol:开始列
	endcol:结束列
	showflag: true显示 false隐藏
	*/
    Base.prototype.ShowBianhao = function (begincol, endcol, showflag) {
        var t = this.tbody.rows;
        var s = new Array();
        var m = new Array();
        s[0] = begincol;
        m[0] = endcol;
        var l = this._KeyTable;
        if (showflag) {
            for (var n = 0; n < s.length; n++) {
                for (var p = 0; p < l.length - 1; p++) {
                    for (var o = parseInt(s[n]) ; o <= parseInt(m[n]) ; o++) {
                        //if (o == parseInt(m[n]) - 1) {
                        //    break;
                        //}
                        if (l[p][o] && "key" == l[p][o].key) {
                            if (o < parseInt(m[n])) {
                                if (l[p + 1][o + 1] && l[p + 1][o + 1].key == "key" && (l[p + 1][o + 1].value == l[p][o].value + 1 || l[p + 1][o + 1].value == l[p][o].value - 1) && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[p + 1].cells[o + 1].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p + 1].cells[o + 1].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {

                                    t[p].cells[o].className += " " + this.BianHaoCls;
                                    t[p + 1].cells[o + 1].className += " " + this.BianHaoCls;
                                    this._ReverCls(t[p].cells[o]);
                                    this._ReverCls(t[p + 1].cells[o + 1]);
                                }
                                else {
                                    if (l[p + 2] == undefined) {
                                        //continue;
                                    }
                                    if (l[p + 1][o + 1] == undefined && l[p + 2][o + 1] && l[p + 2][o + 1].key == "key" && (l[p + 2][o + 1].value == l[p][o].value + 1 || l[p + 2][o + 1].value == l[p][o].value - 1) && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[p + 2].cells[o + 1].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p + 2].cells[o + 1].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {
                                        t[p].cells[o].className += " " + this.BianHaoCls;
                                        t[p + 2].cells[o + 1].className += " " + this.BianHaoCls;
                                        this._ReverCls(t[p].cells[o]);
                                        this._ReverCls(t[p + 2].cells[o + 1]);
                                    }
                                }
                            }
                            if (o > parseInt(s[n])) {
                                if (l[p + 1][o - 1] && l[p + 1][o - 1].key == "key" && (l[p + 1][o - 1].value == l[p][o].value + 1 || l[p + 1][o - 1].value == l[p][o].value - 1) && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[p + 1].cells[o - 1].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p + 1].cells[o - 1].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {
                                    t[p].cells[o].className += " " + this.BianHaoCls;
                                    t[p + 1].cells[o - 1].className += " " + this.BianHaoCls;
                                    this._ReverCls(t[p].cells[o]);
                                    this._ReverCls(t[p + 1].cells[o - 1]);
                                }
                                else {
                                    if (l[p + 2] == undefined) {
                                        //continue;
                                    }
                                    if (l[p + 1][o - 1] == undefined && l[p + 2][o - 1] && l[p + 2][o - 1].key == "key" && (l[p + 2][o - 1].value == l[p][o].value + 1 || l[p + 2][o - 1].value == l[p][o].value - 1) && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p].cells[o].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[p + 2].cells[o - 1].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[p + 2].cells[o - 1].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {
                                        t[p].cells[o].className += " " + this.BianHaoCls;
                                        t[p + 2].cells[o - 1].className += " " + this.BianHaoCls;
                                        this._ReverCls(t[p].cells[o]);
                                        this._ReverCls(t[p + 2].cells[o - 1]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            for (var p = 0; p < l.length; p++) {
                for (var o = 0; o < l[p].length; o++) {
                    if (t[p].cells[o].className.indexOf(this.BianHaoCls) > -1) {
                        $(t[p].cells[o]).removeClass(this.BianHaoCls);
                        var va = t[p].cells[o].innerHTML.match(/\d+(\.\d+)?/g);
                        //t[p].cells[o].className=t[p].cells[o].className.split(" "+this.BianHaoCls).join("");
                        l[p][o] = { key: "key", value: parseInt(va, 10) };
                    }
                }
            }
        }

    };
    /*重号筛选方法
	在table的指定范围内 
	begincol:开始列
	endcol:结束列
	showflag: true显示 false隐藏
	*/
    Base.prototype.ShowChonghao = function (begincol, endcol, showflag) {
        var t = this.tbody.rows;
        var q = new Array();
        var o = new Array();
        q[0] = begincol;
        o[0] = endcol;
        var l = this._KeyTable;
        if (showflag) {
            for (var y = 0; y < q.length; y++) {
                for (var B = 0; B < l.length - 1; B++) {
                    for (var z = parseInt(q[y]) ; z < parseInt(o[y]) ; z++) {
                        if (l[B][z] && "key" == l[B][z].key) {
                            if (l[B + 1][z] && l[B + 1][z].key == "key" && l[B][z] != undefined) {
                                var r = true;
                                for (var v = B + 1; v < B + 1; v++) {
                                    if (l[v][z].key == "key") {
                                        r = false;
                                        break;
                                    }
                                }
                                if (r) {
                                    if (l[B + 1][z].value == l[B][z].value && t[B].cells[z].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[B].cells[z].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[B+1].cells[z].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[B+1].cells[z].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {
                                        t[B].cells[z].className += " " + this.ChongHaoCls;
                                        t[B + 1].cells[z].className += " " + this.ChongHaoCls;
                                        this._ReverCls(t[B].cells[z]);
                                        this._ReverCls(t[B + 1].cells[z]);
                                        var a = t[B + 1].cells[z].className;
                                    }
                                }
                            }
                            else {
                                if ((l[B + 1][z] == undefined || (l[B][z] == undefined && l[B + 1][z] == 0)) && l[B + 2][z].key == "key") {
                                    var r = true;
                                    for (var v = B + 1; v < B + 2; v++) {
                                        if (l[v][z] == "key") {
                                            r = false;
                                            break;
                                        }
                                    }
                                    if (r) {
                                        if (l[B + 1][z].value == l[B + 2][z].value && t[B].cells[z].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[B].cells[z].className.indexOf("web_colorSpeedBackGroundRedFont") == -1 && t[B + 2].cells[z].className.indexOf("web_colorSpeedBackGroundBlueFont") == -1 && t[B + 2].cells[z].className.indexOf("web_colorSpeedBackGroundRedFont") == -1) {
                                            t[B].cells[z].className += " " + this.ChongHaoCls;
                                            t[B + 2].cells[z].className += " " + this.ChongHaoCls;
                                            this._ReverCls(t[B].cells[z]);
                                            this._ReverCls(t[B + 2].cells[z]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            for (var B = 0; B < l.length; B++) {
                for (var z = 0; z < l[B].length; z++) {
                    if (t[B].cells[z].className.indexOf(this.ChongHaoCls) > -1) {
                        $(t[B].cells[z]).removeClass(this.ChongHaoCls);
                        //t[B].cells[z].className=t[B].cells[z].className.split(" "+this.ChongHaoCls).join("");
                        var va = t[B].cells[z].innerHTML.match(/\d+(\.\d+)?/g);
                        l[B][z] = { key: "key", value: parseInt(va, 10) };
                    }
                }
            }
        }
    };
    /*表格排序方法*/
    Base.prototype.Sort = function () {
        var t = this.tbody;
        var u = t.rows;;
        var n = new Array();
        for (var i = 0; i < u.length; i++) {
            //if (u[i].className.indexOf(this.IssueNoEndCls) > -1) {
            //    u[i].className = "";
            //}
            n[u.length - 1 - i] = u[i];
        }
        if (n != null && n.length > 0) {
            var l = document.createDocumentFragment();
            for (var p = 0; p < n.length; p++) {
                //if (p % this.IssueNoEndIndex + 1 == this.IssueNoEndIndex) {
                //    n[p].className = this.IssueNoEndCls;
                //}
                l.appendChild(n[p]);
            }
            t.appendChild(l);
        }
        this._Clear();
        this.Parse();
    };


    /**************************************私有方法************************************/
    /*解析数据*/
    Base.prototype.Parse = function () {
        /******************************************解析对应KEY数据***********************************************/
        var isBall = new Array();
        isBall.push(this.BlueResultCls);
        isBall.push(this.RedResultCls);
        isBall.push(this.SumCls);

        var isBallStr = isBall.join(',');
        var g = this.tbody.rows;
        if (g[0] == null) return;
        var a = g[0].cells.length;
        this._KeyTable = [];
        for (var i = 0; i < g.length; i++) {
            this._KeyTable[i] = [];
            for (var j = 0; j < a; j++) {
                if (td = g[i].cells[j]) {
                    var tdClassName = td.className;
                    if (tdClassName.split(' ').length > 0) {
                        tdClassName = tdClassName.split(' ')[0];
                    }
                    if (tdClassName != "" && true==isBall.contains(tdClassName)) {
                        var va = td.innerHTML.match(/\d+(\.\d+)?/g);
                        this._KeyTable[i][j] = { key: "key", value: parseInt(va, 10) };
                    }
                    else {
                        this._KeyTable[i][j] = { key: 0 };
                    }
                }
            }
        }
    };
    /*解析历史数据*/
    Base.prototype.ParseHistory = function () {
        /******************************************解析对应KEY数据***********************************************/
        var isBall = new Array();
        isBall.push(this.BlueResultCls);
        isBall.push(this.RedResultCls);
        isBall.push(this.LargeCls);//"大"样式
        isBall.push(this.SmallCls);//"小"样式
        isBall.push(this.OddCls);//"奇"样式
        isBall.push(this.OCls);//"偶"样式
        isBall.push(this.ZhiCls);//"质"样式
        isBall.push(this.HeCls);//"合"样式
        isBall.push(this.DefaultGray);//默认灰色样式

        var isBallStr = isBall.join(',');
        var g = this.tbody.rows;
        this._HistoryKeyTable = [];
        if (g.length > 0) {
            var a = g[0].cells.length;
            for (var i = 0; i < g.length; i++) {
                this._HistoryKeyTable[i] = [];
                for (var j = 0; j < a; j++) {
                    if (td = g[i].cells[j]) {
                        if (td.className != "" && true == isBallStr.contains(td.className)) {
                            this._HistoryKeyTable[i][j] = { key: parseInt(td.innerHTML, 10) };
                        }
                        else {
                            this._HistoryKeyTable[i][j] = 0;
                        }
                    }
                }
            }
        }
    };
    //反转元素样式规则 边号>重号>连号
    Base.prototype._ReverCls = function (obj) {
        var existbianHao = false;
        var existchongHao = false;
        var existlianHao = false;
        if ($(obj).hasClass(this.BianHaoCls)) {
            $(obj).removeClass(this.BianHaoCls);
            existbianHao = true;
        }
        if ($(obj).hasClass(this.ChongHaoCls)) {
            $(obj).removeClass(this.ChongHaoCls);
            existchongHao = true;
        }
        if ($(obj).hasClass(this.LianHaoCls)) {
            $(obj).removeClass(this.LianHaoCls);
            existlianHao = true;
        }
        if (existlianHao) {
            $(obj).addClass(this.LianHaoCls);
        }
        if (existchongHao) {
            $(obj).addClass(this.ChongHaoCls);
        }
        if (existbianHao) {
            $(obj).addClass(this.BianHaoCls);
        }
    };
    //历史反转元素样式规则 边号>重号>连号
    Base.prototype._ReverHistoryCls = function (obj) {
        var existbianHao = false;
        var existchongHao = false;
        var existlianHao = false;
        if ($(obj).hasClass(this.HistoryBianHaoCls)) {
            $(obj).removeClass(this.HistoryBianHaoCls);
            existbianHao = true;
        }
        if ($(obj).hasClass(this.HistoryChongHaoCls)) {
            $(obj).removeClass(this.HistoryChongHaoCls);
            existchongHao = true;
        }
        if ($(obj).hasClass(this.HistoryLianHaoCls)) {
            $(obj).removeClass(this.HistoryLianHaoCls);
            existlianHao = true;
        }
        if (existlianHao) {
            $(obj).addClass(this.HistoryLianHaoCls);
        }
        if (existchongHao) {
            $(obj).addClass(this.HistoryChongHaoCls);
        }
        if (existbianHao) {
            $(obj).addClass(this.HistoryBianHaoCls);
        }
    };
    /*划线私有方法
    objArr:连线数组
    lineWidth:划线宽度
    lineColor:划线颜色
    canvas:划线容器
	*/
    Base.prototype._Line = function (objArr, lineWidth, lineColor, canvas) {
        var _this = this;
        _this._canvas = canvas;
        _this.wrap = document.getElementById(_this.container);
        _this.wrap.style.position = 'relative';
        for (var index = 0; index < objArr.length - 1; index++) {

            if (_this.IsIE(8)) {
                var a = this._PositionFF(objArr[index], _this.wrap);
                var b = this._PositionFF(objArr[index + 1], _this.wrap);
                this._IELine(a.x, a.y, b.x, b.y, lineWidth, lineColor);
            }
            else {
                var a = this._PositionFF(objArr[index], _this.wrap);
                var b = this._PositionFF(objArr[index + 1], _this.wrap);
                this._FFLine(a.x, a.y, b.x, b.y, lineWidth, lineColor);
            }
        }
        document.getElementById(canvas).appendChild(this._TmpDom);
    };
    /*清除元素重绘方法*/
    Base.prototype._Clear = function () {
        this.ClearLine();
        this._KeyTable = [];
        var t = this.tbody.rows;
        for (var i = 0; i < t.length; i++) {
            for (var j = 0; j < t[i].cells.length; j++) {
                if (t[i].cells[j].style.backgroundColor != "") {
                    t[i].cells[j].style.backgroundColor = "";
                }

            }
        }
    };
    /*获取元素绝对位置*/
    Base.prototype._PositionIE = function (obj, wrap) {
        var pos = { x: 0, y: 0 }, a = obj;
        var k = obj;
        pos.y = obj.offsetTop + obj.height / 2 - $("#container").position().top;
        pos.x = obj.offsetLeft + obj.width / 2 - $("#container").position().left - 10;
        return pos;
    };
    Base.prototype._PositionFF = function (obj, wrap) {
        if (obj.nodeType == undefined) return obj;
        var pos = { x: 0, y: 0 }, a = obj;
        var k = obj;
        for (; a; a = a.offsetParent) { pos.x += a.offsetLeft; pos.y += a.offsetTop; if (wrap && a.offsetParent == wrap) break; };
        pos.x += parseInt(obj.offsetWidth / 2);
        pos.y += parseInt(obj.offsetHeight / 2);
        return pos;
    };
    /*IE划线*/
    Base.prototype._IELine = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (8 * 2) && x1 == x2) return;//自动确定同列的是否连线
        var np = this._NPos(x1, y1, x2, y2, 8);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var pOffset = { left: 0, top: 0 }; //$("#container").offset();
        var line = document.createElement("<v:line></v:line>");
        line.from = (x1 - pOffset.left) + "," + (y1 - pOffset.top);
        line.to = (x2 - pOffset.left) + "," + (y2 - pOffset.top);
        line.strokeColor = lineColor;
        line.strokeWeight = lineWidth + "px";
        line.style.cssText = "position:absolute;z-index:999;top:0;left:0";
        line.coordOrigin = "0,0";
        
        this._Lines.push(line);
        this._TmpDom.appendChild(line);
    };
    /*其他浏览器划线*/
    Base.prototype._FFLine = function (x1, y1, x2, y2, lineWidth, lineColor) {
        if (Math.abs(y1 - y2) < (6 * 2) && x1 == x2) return;//自动确定同列的是否连线   
        var np = this._NPos(x1, y1, x2, y2, 6);//两端缩减函数（防止覆盖球）
        x1 = np[0]; y1 = np[1]; x2 = np[2]; y2 = np[3];
        var cvs = document.createElement("canvas");
        cvs.style.position = "absolute";
        cvs.style.visibility = "visible";
        cvs.width = Math.abs(x1 - x2) || lineWidth;
        cvs.height = Math.abs(y1 - y2) || lineWidth;
        var newY = Math.min(y1, y2);
        var newX = Math.min(x1, x2);
        cvs.style.top = newY + "px";
        cvs.style.left = (newX) + "px";
        var FG = cvs.getContext("2d");
        FG.save();//缓存历史设置
        FG.strokeStyle = lineColor;
        FG.lineWidth = lineWidth;
        //FG.globalAlpha=0.5;//透明度；    
        FG.beginPath();
        FG.moveTo(x1 - newX, y1 - newY);
        FG.lineTo(x2 - newX, y2 - newY);
        FG.closePath();
        FG.stroke();
        FG.restore();//恢复历史设置
        this._Lines.push(cvs);
        this._TmpDom.appendChild(cvs);
    };
    Base.prototype._OLine = function (x0, y0, x1, y1, nLineWidth, lineColor) {
        var oOffset = $("#container").offset();
        x0 = x0 - oOffset.left;
        y0 = y0 - oOffset.top;
        x1 = x1 - oOffset.left;
        y1 = y1 - oOffset.top;
        var minX = x0;
        var minY = y0;
        if (x1 < x0) {
            minX = x1;
        }
        if (y1 < y0) {
            minY = y1;
        }
        var w = Math.abs(x0 - x1);
        var h = Math.abs(y0 - y1);
        if (w == 0) {
            w = nLineWidth;
        }
        if (h == 0) h = nLineWidth;
        var canvas = document.createElement("canvas");
        document.getElementById(this._canvas).appendChild(canvas);
        var context = canvas.getContext("2d");
        $(canvas).attr("class", "cvs");
        $(canvas).css("left", minX + "px");
        $(canvas).css("top", minY + "px");
        $(canvas).attr("width", w);
        $(canvas).attr("height", h);
        context.strokeStyle = lineColor;
        context.lineWidth = nLineWidth;
        context.beginPath();
        var to_x0 = 0;
        var to_y0 = 0;
        var to_x1 = 0;
        var to_y1 = 0;
        var rate = (x1 - x0) / (y1 - y0);
        var diff = rate > 1 ? (rate - 1) * 1.5 / rate : 0;
        var dis = 5.5 + diff;
        if (x0 < x1) { //从左向右
            to_x0 = dis;
            to_y0 = dis / rate;
            to_x1 = w - dis;
            to_y1 = h - dis / rate;
        }
        else if (x0 > x1) { //从右向左
            to_x0 = w - dis;
            to_y0 = -dis / rate;
            to_x1 = dis;
            to_y1 = h + dis / rate;
        } else {
            to_x0 = 0;
            to_y0 = 7;
            to_x1 = 0;
            to_y1 = h - 7;
        }
        context.moveTo(to_x0, to_y0);
        context.lineTo(to_x1, to_y1);
        context.stroke();
    };
    /*两端缩减函数（防止覆盖球）*/
    Base.prototype._NPos = function (x1, y1, x2, y2, r) {
        var a = x1 - x2, b = y1 - y2;
        var c = Math.round(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
        var x3, y3, x4, y4;
        var _a = Math.round((a * r) / c);
        var _b = Math.round((b * r) / c);
        return [x2 + _a, y2 + _b, x1 - _a, y1 - _b];
    };
    /*判断当前排序情况*/
    Base.prototype._IsSort = function () {
        var issueObj = document.getElementById(this.issnunoId);
        if (issueObj != undefined) {
            if (issueObj.childNodes[0].className.indexOf("iconJT") > -1) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    Base.prototype.Class = function () {
        return Class;
    };
    module.exports = Base;
});