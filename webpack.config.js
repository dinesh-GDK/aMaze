const path = require('path');

module.exports = {
  entry: [
    './global/js/aMaze.js',
    './global/style/style.scss'
  ],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve : {
      extensions: [
          '.js', '.scss'
      ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {
              loader: 'file-loader',
              options: {name: 'bundle.css'}
            },
            'sass-loader'
        ]
      }
   ]
  },
}
