import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import pkg from "dynamoose";
const { aws, Table, model } = pkg;

//import routes from './routes'; --- IGNORE ---
import courseRoutes from './routes/courseRoutes.ts';


dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  aws.ddb.local();   // ✅ use named import, not dynamoose.aws.ddb.local()
}

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;

if (!isProduction) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}