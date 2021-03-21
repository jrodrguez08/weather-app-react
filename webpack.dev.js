import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const webpackConfig = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirname, 'build')
  },
});

export default webpackConfig;
