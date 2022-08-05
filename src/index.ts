import express, { Application } from 'express';
import { https } from 'firebase-functions';

const app: Application = express();

app.get('/helloWorld', (req, res) => {
  res.send('Hello World');
});

export const api = https.onRequest(app);
