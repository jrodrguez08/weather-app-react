import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const webpackConfig = {
  entry: path.resolve(dirname, './src/entry'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirname, 'build')
  },
  plugins: 
  [],
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/imgs'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(dirname, './src/components'),
      styles: path.resolve(dirname, './src/styles'),
    },
    extensions: ['.js', '.jsx', '.scss',]
  },
}

export default webpackConfig;
