import express from 'express'
import connectionDB from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
import {
    Router
} from './Router/routes.js'
import Router1 from './Router/nameroutes.js';

const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use(Router)
app.use(Router1)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    connectionDB();
})