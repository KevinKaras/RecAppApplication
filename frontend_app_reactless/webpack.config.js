const path = require('path');
// REREAD THROUGH THIS MAKE SURE YOU CAN RECITE THIS THROUGH CONCEPTUAL UNDERSTANDING AND NOT MEMORIZATION.
module.exports = {
  context: __dirname,
  // your entry file is the single js file from which all others will be accessed, think of it like a root node. 
  entry: path.resolve(__dirname, './src/index.js'),
  // once packed by Webpack, the resulting "bundle" will be a single, publicly accessible file.
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  // Webpack will run a development server through which your files will be viewable in the browser. The server will find your application's JS bundle in ./public.
  devServer: {
    static: path.resolve(__dirname, './public'),
  },
  module: {
    // we must tell Webpack how to read the various JS files we create. since React uses a special flavor of JS we know as JSX, it must be translated into the most basic JS syntax. This is true of some features of newer JS versions as well such as ES2021^. 
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          },
        },
      },
      // as mentioned earlier, css files will need to be bundled via our style loaders.
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // resolve the file extensions we will use in this application.
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
};