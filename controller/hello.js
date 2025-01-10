import userModel from "../Models/hello.js"


export const hello = async(req,res)=>{
    try {
       const data =   await  userModel.find()
       res.send({
        data
    })
    } catch (error) {
        res.send({
            error
        })
    }
 
}