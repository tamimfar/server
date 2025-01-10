import  express from "express";
import { hello } from "../controller/hello.js";
const Router = express.Router()


Router.get("/hello", hello)

export default Router