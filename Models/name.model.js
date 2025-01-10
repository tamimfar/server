import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name: String,
     
}) 

const nameModel = mongoose.model('Name',nameSchema)
export default nameModel