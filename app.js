import express  from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from 'morgan';
import taskRoute from './route/task.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(cookieParser());

app.use(morgan('combined'));
app.use('/',taskRoute);

export default app;