//module.exports = {
//    entry: './src/index.js',
//    output: {
//        filename: 'super.js'
//    }
//}

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
//    output: {
//        filename: 'super.js'
//    }
   devServer: {
     contentBase: './dist',
     hot: true,
//     port: 3001
    stats: {
 children: false,
 maxModules: 0
}
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: 'main.js',
    },
  };