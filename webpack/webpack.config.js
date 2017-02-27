var os = require('os');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var _config = require('./config.js');

console.log('当前配置如下:', _config);

module.exports = {
    entry: {
        //'js/index' : [path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        path: _config.output,
        publicPath: _config.publicPath,
        filename: '[name]-[hash:8].js',
        chunkFilename: 'js/[id]-[hash:8].chunk.js'
    },
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
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
            from: (path.resolve(__dirname, '../src')),
            to: (path.resolve(__dirname, '../output'))
        }]),
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