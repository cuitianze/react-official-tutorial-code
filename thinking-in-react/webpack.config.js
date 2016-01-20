module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
  loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}