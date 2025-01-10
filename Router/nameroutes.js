import express from 'express'
import {creatName } from '../controller/nameController.js'
const Router1 = express.Router()

Router1.post('/name/:id',creatName)




export default Router1