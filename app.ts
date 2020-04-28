import { postRouter } from './routes/Post';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.use(postRouter);

app.listen(8080);