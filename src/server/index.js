import path from 'path';
import express from 'express';

import htmlMiddleware from './middlewares/html';
import renderMiddleware from './middlewares/render';
import s3 from './services/s3/s3';

const publicPath = path.join(__dirname, '/public');
const app = express();

app.use(express.static(publicPath));
app.use("/s3", s3());
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
