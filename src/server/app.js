/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.set('view engine', 'pug');
app.set('views', path.join(dirname, 'templates'));
app.use(express.static(path.join(dirname, '../../build')));

console.log(dirname)

app.get('/', (req, res) => {
  res.render('main');
});

app.listen(process.env.PORT || 3001, () => console.log('Server up'));
