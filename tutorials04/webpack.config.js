module.exports = {
  entry: './entry.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test:/\.css$/,
        loader: 'style!css' // 用!去链式调用loader
      }
    ]
  }
};
