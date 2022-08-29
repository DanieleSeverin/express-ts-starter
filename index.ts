import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
var login = require('./auth/login');
var signup = require('./auth/signup');

app.use(cors())

app.use('/api/login', login);
app.use('/api/signup', signup);

app.all('/', (req: Request, res: Response) => {
  res.send('No route match.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});