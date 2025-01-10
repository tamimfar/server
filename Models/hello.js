import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    hello: {
        type: String
    },
    
    
})

const userModel = mongoose.model('Users2', userSchema)

export default userModel