import express from 'express';
import {
    creatusercontroller,
    getusercontroller,
    loginusercontroller
} from '../controller/userController.js';
const Router = express.Router()
Router.get('/',(req,res)=>{
 res.json({name:"my name is tamim"})
})
//get all-user
Router.get('/all-user', getusercontroller)

//register user
Router.post('/register', creatusercontroller)


//login user
Router.post('/login', loginusercontroller)


export {
    Router
}