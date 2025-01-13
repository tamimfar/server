import userModel from "../Models/hello.js"


export const hello = async(req,res)=>{
    try {
       const data =   await  userModel.find()
        return res.send({
        data
    })
    } catch (error) {
       return res.send({
            error,mas:"hello"
        })
    }
 
}