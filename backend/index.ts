import express from 'express';
import cors from 'cors';
import residentRouter from './src/routes/ResidentRouter';
import error from './src/middlewares/error';
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.MYSQLPORT || 3000;

app.use('/', residentRouter);
app.use(error);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});