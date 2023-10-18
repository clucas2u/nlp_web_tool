const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',  // Your entry point file
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
      },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Inject styles into DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader'   // Compiles Sass to CSS
        ],
      },
    ],
  },
};
