// var webpack = require('webpack');

module.exports = {

    //source maps
    devtool: "enval-source-map",

    //入口文件
    entry: __dirname + "/src/main.js",

    //输出目录
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        //loaders:
        loaders: [{
                test: /\.(js|jsx)$/, //regex匹配js&jsx
                exclude: /node_modules/, //排除文件&文件夹
                loader: "babel" //loader名称*
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                exclude: /node_modules/, 
                loader: 'url-loader?limit=10000',
            }, , {
                test: /\.(mp4|ogg|svg)$/,
                exclude: /node_modules/, 
                loader: 'file-loader'
            }, {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            },

        ]
    },

    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()//热模块替换插件
    // ],

    devServer: {
        contentBase: "./build/", //为build文件夹下的内容配置服务器,默认是根目录
        colors: true,
        historyApiFallback: true,
        inline: true, //源文件改变,自动刷新
        port: 8111,
        process: true, //显示进度
    }

};

//__dirname是node.js中的一个全局变量，当前执行脚本所在的目录