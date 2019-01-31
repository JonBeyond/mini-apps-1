module.exports = {
    entry: __dirname + '/client/src/index.jsx', //tells webpack where to start
    module: {
      rules: [
        { //for every file with a .jsx extension, run the babel compiler
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
    output: { //tells webpack where to place the bundle of dependencies
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
      }
  };
