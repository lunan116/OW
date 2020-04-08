const path = require('path')
// 新加入 VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        //contentBase: './dist'
        //host: "192.168.0.101",
        //port: 8080,
        contentBase: 'dist/'
        //historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },{
              test: /\.styl$/,
              use:['style-loader','css-loader']
          },{ 
              test: /\.css$/, 
              use: ['style-loader', 'css-loader']  //test是正则匹配标识符,表示匹配什么文件
            } ,{
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]'
            }
        ]
    },
    mode: 'production',
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
}