// 使用node的path模块
const path = require('path')

module.exports = {
  // 打包的入口
  entry: './src/main.js',
  // 打包的出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 打包规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:'file-loader',
            options:{}
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
}