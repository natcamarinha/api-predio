import express from 'express';
import cors from 'cors';
import residentRouter from './src/routes/ResidentRouter';
import error from './src/middlewares/error';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/', residentRouter);
app.use(error);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});