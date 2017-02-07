var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
       "index":[__dirname+'/src/js/index.js'
           ,'webpack-dev-server/client?http://127.0.0.1:8080'],
    },  
    //入口文件输出配置
    output: {
        path: __dirname+'/webapp/js/',
        publicPath: "http://127.0.0.1:8080",
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // { test: /\.js$/, loader: 'jsx-loader?harmony' },
            // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.js$/, loader: 'babel',query:{compact:true} },
            {test:/\.vue$/,loader:"babel!vue", exclude: "/node_modules/"}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'D:/webpackDev/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js',
             vue: 'vue/dist/vue.js'
        }
    },
     plugins:[
        new HtmlWebpackPlugin({
           // filename: __dirname+'/src/webapp/index.html',//目标文件
            filename:"index.html",
             template: __dirname+'/src/html/app.html',//模板文件
            inject:'body',
            hash:true,
            chunks:["index"]
        }),
    ]
};