import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
     blogs: [{

            type: mongoose.Types.ObjectId,
            rel: 'Name'
        }

    ]
})

const userModel = mongoose.model('Users2', userSchema)

export default userModel