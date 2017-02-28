var fs = require('fs');
var path = require('path');
var htmlmin = require('html-minifier');
var _config = require('./config.js');

//var _REGEX_STRING = /(<%%|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)/;
var _REGEX_STRING = /(<%=|=%>)/;
var _BOM = /^\uFEFF/;


function webpackIncludePlugin(options) {
    // Configure your plugin with options...
}

webpackIncludePlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            htmlPluginData.html = include(htmlPluginData.html);

            //压缩HTML  API参考https://github.com/kangax/html-minifier
            if(!_config.isDev){
                htmlPluginData.html = htmlmin.minify(htmlPluginData.html, {
                    collapseWhitespace: true
                });
            }
            callback(null, htmlPluginData);
        });
    });
};


//从ejs提取出来的核心代码,分离include用
function include(html){
    var html, include, matches, htmlArr, ioHtml;
    matches = parseTemplateText(html);
    console.log('matches:',matches);
    htmlArr = matches.concat();
    matches.forEach(function (line, index) {
        if ((include = line.match(/^\s*include\s+(\S+)/))) {
            ioHtml = readFile(include[1]);
            if(ioHtml){
                htmlArr[index - 1] = '';
                htmlArr[index] = ioHtml;

                if(htmlArr.length > index + 1){
                    htmlArr[index + 1] = '';
                }
            }
        }
    });
    return htmlArr.join('');
}

//读取公共模版文件-缓存控制,优化性能
function readFile(url){
    var html;
    try {
        html = fs.readFileSync(path.join(__dirname, "../" + url)).toString().replace(_BOM, '');
    } catch (e) {
        //html = '';
    }
    console.log('url:', path.join(__dirname, "../" + url))
    console.log('readFile html', html)
    return html;
}

//对HTML使用正则表达式分割
function parseTemplateText(html) {
    var str = html
        , result = _REGEX_STRING.exec(str)
        , arr = []
        , firstPos
        , lastPos;

    //Slurp spaces and tabs before <%_ and after _%>
    str = str.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');
    while (result) {
        firstPos = result.index;
        lastPos = _REGEX_STRING.lastIndex;

        if (firstPos !== 0) {
            arr.push(str.substring(0, firstPos));
            str = str.slice(firstPos);
        }

        arr.push(result[0]);
        str = str.slice(result[0].length);
        result = _REGEX_STRING.exec(str);
    }

    if (str) {
        arr.push(str);
    }

    return arr;
}

module.exports = webpackIncludePlugin;