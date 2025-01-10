import express from 'express'
import connectionDB from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
 import Router from './Router/routes.js';
 

const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use(Router)


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    connectionDB();
})