process.env.NODE_ENV = 'dev';
var fs = require('fs');
var os = require('os');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var exec = require('child_process').exec;
var config = require('./webpack.config.js');
var _config = require('./config.js');

//清空生成的目录
exec('rm -rf output/', function(err) {
    if (!err) {
        execWebpack(function(_err){
            if(!_err && _config.isOpen){
                exec('open "'+ _config.publicPath +'"');
            }
        });
    }
});

for (var i in config.entry) {
    config.entry[i].unshift('webpack-dev-server/client?' + _config.publicPath, "webpack/hot/only-dev-server")
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());



// var compiler = webpack(config);
var server = new WebpackDevServer(webpack(config), {
    //publicPath: _config.publicPath,
    //contentBase:'output/',
    hot: true,
    inline: true,
    historyApiFallback: true,
    quiet: true,
    stats: { colors: true },
    proxy: {
        "/home/*": {
            "target": {
                "host": "120.76.188.66",
                // "host": "10.3.208.224",
                "protocol": 'http:',
                "port": 8080
                //"port": 8035
            },
            changeOrigin: true,
            secure: false
        },
        "/shishicai/*": {
            "target": {
                "host": "120.76.188.66",
                "protocol": 'http:',
                "port": 8080
            },
            changeOrigin: true,
            secure: false
        },
        // "/pk10/*": {
        //     "target": {
        //         "host": "120.76.188.66",
        //         "protocol": 'http:',
        //         "port": 8080
        //     },
        //     changeOrigin: true,
        //     secure: false
        // },
        "/gdkl10/*": {
            "target": {
                "host": "120.76.188.66",
                "protocol": 'http:',
                "port": 8080
            },
            changeOrigin: true,
            secure: false
        },
        "/*/ajax": {
            "target": {
                "host": "120.76.188.66",
                "protocol": 'http:',
                "port": 8080
            },
            changeOrigin: true,
            secure: false
        },
    }
});

server.listen(_config.port, function() {
    console.log('server was start on ' + _config.publicPath + '\n');
});

fs.watch('src/', function() {
    execWebpack();
});

function execWebpack(cb){
    exec('webpack --config webpack/webpack.config.js --progress --profile --colors --display-error-details --display-modules', function(err, stdout, stderr) {
        if (err) {
            console.error('!!!!!!!!!!!!!!!!!!webpack run error!', stderr);
        } else {
            console.log('____________webpack was runing!');
        }
        //cb&cb(err);
    });
}
