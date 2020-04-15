import path from 'path';
import express from 'express';

import htmlMiddleware from './middlewares/html';
import renderMiddleware from './middlewares/render';
import fetchMiddleware from "./middlewares/fetch";
import s3 from './api/s3/s3';
import requestInformation from './api/request-information/request-information';
import posts from './api/posts/posts';

const publicPath = path.join(__dirname, '/public');
const app = express();

app.use(express.static(publicPath));

//TODO: what is this
app.use('/s3', s3());

app.use('/api', posts);
app.use('/api', requestInformation);

app.use(fetchMiddleware());
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
