var os = require('os');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackIncludePlugin = require('./webpack-include-plugin.js');
var _config = require('./config.js');

console.log('当前配置如下:', _config);

var config = {
    entry: {
        // 'js/index' : [path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        path: _config.output,
        publicPath: _config.publicPath,
        filename: '[name]-[hash:8].js',
        chunkFilename: 'js/[id]-[hash:8].chunk.js'
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {compact: false}},
            { test: /\.css$/,loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            { test: /\.scss$/,loader: ExtractTextPlugin.extract('style-loader', "css-loader!autoprefixer-loader!sass-loader")},
            { test: /\.(png|jpg|gif|bmp)$/, loader: 'url-loader?limit=8192&name=images/[name]-[hash:8].[ext]'},
            { test: /\.(woff|woff2|eot|ttf|svg)(\??.*$|$)/, loader: 'url-loader?limit=100&name=fonts/[name]-[hash:8].[ext]'},
            { test: /\.(html)$/, loader: 'html?-minimize' },
        ],
    },
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
        new webpackIncludePlugin(),
        _config.isDev? _config.noop: new webpack.optimize.UglifyJsPlugin({   //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new CopyWebpackPlugin([{
            from: (path.resolve(__dirname, '../src/script')),
            to: (path.resolve(__dirname, '../output/script'))
        }]),
        new CopyWebpackPlugin([{
            from: (path.resolve(__dirname, '../src/style')),
            to: (path.resolve(__dirname, '../output/style'))
        }]),
        new CopyWebpackPlugin([{
            from: (path.resolve(__dirname, '../src/images')),
            to: (path.resolve(__dirname, '../output/images'))
        }]),
        //new HtmlWebpackPlugin({
        //    filename: _config.htmlDir + 'view/index.html',    //生成的html存放路径
        //    template: '../src/view/index.html',    //html模板路径
        //    // chunks : ['js/index'],
        //    inject: true,
        //})
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        //require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.web.js', '.js', '.json'],
    },
    //webpack不合并,需要外部单独引入<script src="vue"></script>
    externals: {

    }
};

//注入普通页面
function injectPage (config, opts) {
    opts = Object.assign({
        src: [],
        exclude: [],
        replaceHtml: {},
        mapJs: {}
    }, opts);
    if(!Array.isArray(opts.src)){
        opts.src = Array.of(opts.src);
    }
    if(!Array.isArray(opts.exclude)){
        opts.exclude = Array.of(opts.exclude);
    }
    opts.src.forEach(globPath => {
        console.log('test4', globPath)
        _config.getEntryHtml(globPath, opts).forEach(function(item) {
            console.log('>html开始注入:模块名:%s, html路径:%s;', item.htmlName, item.path);

            //html自动注入js\css, 自动注入[common-apply.js、apply/index.js、apply/index.css]
            //config.plugins.push(new HtmlWebpackPlugin({
            //    filename: _config.htmlDir + item.htmlName + '.html',    //生成的html存放路径
            //    template: item.path,    //html模板路径
            //    chunks : ['common-apply', item.jsName]
            //}));
            config.plugins.push(new HtmlWebpackPlugin({
                filename: _config.htmlDir + item.htmlName + '.html',    //生成的html存放路径
                template: item.path,    //html模板路径
                inject: true,
            }));
        });
});
}


//注入HTML页面
injectPage(config, {
    //需要打包的页面
    src: [
        'src/view/*.html',
        'src/view/**/*.html',
        'src/view/**/**/*.html',
    ],
    //排除不需要打包的页面
    exclude: [
        'src/view/common/*.html'
    ]
    //ouput输出目录:生成的html名称[替换]规则
    //replaceHtml: {'view/singlepage/apply-credit/html/': 'apply-credit/', 'view/page/': 'page/'},
    //html中自动注入js[映射]规则
    //mapJs: {'view/singlepage/apply-credit/html/': 'apply-credit/index'}
});

module.exports = config;