var os = require('os');
var path = require('path');
var glob = require('glob');

const isDev = process.env.NODE_ENV === 'dev';
const isRelease = process.env.NODE_ENV === 'release';
const isPublish = process.env.NODE_ENV === 'production';

var port = isDev? 8080: 80;
var ip = isDev? getIp(): '';

//获取本机IP
function getIp(){
    var IPv4 = '127.0.0.1';
    // os.networkInterfaces().en0.forEach(function (item) {
    //     if(item.family=='IPv4'){
    //         IPv4 = item.address;
    //     }
    // });
    return IPv4;
};

//通过node-glob获取页面的路径
function getEntryHtml (globPath, opts) {
    var files = [];
    var excludeFiles = [];

    //获取所有不打包的页面路径数组
    opts.exclude.forEach(item => {
        excludeFiles = excludeFiles.concat(glob.sync(item));
    });
    console.log('test5')
    console.log(typeof(glob))
    glob.sync(globPath).forEach(filePath => {

        console.log('filePath:', filePath)

        var jsName, htmlName;
        htmlName = filePath;
        htmlName = htmlName.replace('src/view/','')
        //根据替换规则替换生成的html名称
        //Object.keys(opts.replaceHtml).forEach(replaceKey => {
        //    htmlName = htmlName.replace(replaceKey, opts.replaceHtml[replaceKey]);
        //});

        //根据映射规则指定自动注入的js文件名称
        //Object.keys(opts.mapJs).forEach(mapKey => {
        //    if(filePath.startsWith(mapKey)){
        //        jsName = opts.mapJs[mapKey];
        //        return;
        //    }
        //});

        //若js未匹配到映射规则,则默认使用与html同名的js
        // jsName = jsName || htmlName.replace(path.extname(htmlName), '');

        //若不需要打包的规则数组不包含filePath
        if(!excludeFiles.some(function(val){ return val === filePath})){
            files.push({
                path: '../' + filePath,
                htmlName: htmlName.replace(path.extname(htmlName), ''),
            });
        }
    });
    return files;
};

//通过node-glob获取JS路径
function getEntryJs (globPaths) {
    var entries = {};

    Object.keys(globPaths).forEach(globPath => {
        glob.sync(globPath).forEach(item => {
            var entry = {};
            //目录
            var dirname = path.dirname(item).replace(globPaths[globPath], '');
            //文件名
            var fileName = path.basename(item, path.extname(item));
            var filePath = path.join(dirname,  fileName);

            entries[filePath] = ['./' + item];
        });
    });
    return entries;
}

module.exports = {
    port: port,
    output: path.join(__dirname,'../output'),
    isDev: isDev,
    isRelease: isRelease,
    isPublish: isPublish,
    isOpen: true,
    publicPath: isPublish? 'https://www.caipiao.com/':(isRelease? '': 'http://'+ ip + ':'+ port +'/'),
    htmlDir: isDev? '': '',
    noop: function(){},
    getEntryJs: getEntryJs,
    getEntryHtml: getEntryHtml,
};