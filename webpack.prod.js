import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const webpackConfig = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contentHash].js',
    path: path.resolve(dirname, 'dist')
  },
});

export default webpackConfig;
