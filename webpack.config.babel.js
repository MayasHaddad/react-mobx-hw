import 'webpack'

export default {
  devtool: 'cheap-module-source-map',
  entry: './main.js',
  output: {
    path: 'dist/',
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules|bin/,
      loader: 'babel'
    }]
  }
}
