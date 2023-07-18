const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // ...
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets',
            to: 'assets',
            globOptions: {
              ignore: ['**/images/**']
            }
          }
        ]
      })
    ]
  }
}