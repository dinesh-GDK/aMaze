const path = require('path');

module.exports = {
  entry: [
    './global/js/aMaze.js',
    './global/style/style.scss'
  ],
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'aMaze.bundle.js'
  },
  watch: true,
  resolve : {
      extensions: [
          '.js', '.scss'
      ]
  },
  mode: 'production',
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
              options: {name: 'aMaze.bundle.css'}
            },
            'sass-loader'
        ]
      }
   ]
  },
}
