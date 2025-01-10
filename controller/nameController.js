import mongoose from "mongoose";
import nameModel from "../Models/name.model.js";
import userModel from "../Models/use.model.js";

export const creatName = async (req, res) => {
   const {
      name,
      user
   } = req.body
   const blog = new nameModel({
      name,
      user
   })
   const id = req.params.id
   const user0 = await userModel.findById(id)
   const session = await mongoose.startSession()
   session.startTransaction()
   await blog.save({
      session
   })
   user0.blogs.push(blog)
   await user0.save({
      session
   })
   await session.commitTransaction()
   await blog.save()
   console.log(blog);

   return res.status(200).send({
      massege: 'true',
      user0
   })
}