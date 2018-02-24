var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: { // 入口文件配置
    app: './src/main.js'
  },
  output: { // 输出文件配置
    path: config.build.assetsRoot, // 输出目录的绝对路径
    filename: '[name].js', // 输出的文件的名称，name为对应entry的key
    publicPath: process.env.NODE_ENV === 'production' // 生产模式或开发模式下html、js等文件内部引用的公共路径(请求的静态资源绝对路径)
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: { // 文件解析配置，设置模块如何被解析
    extensions: ['.js', '.vue', '.json'],// 自动解析确定的拓展名,使导入模块时不带拓展名，即在require/import模块路径中自动补全文件后缀
    alias: { // 路径的别名，require/import模块路径中可以通过别名缩短路径字符串的长度，节省了大量时间去计算文件与文件之间的嵌套关系
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 图片文件后缀
        loader: 'url-loader',
        options: {
          limit: 10000, // 当图片大小小于10kb时，会生成一个base64串打包到编译后的js文件里，若超过10kb会单独生成一个文件
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 字体文件后缀
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
