import userModel from "../Models/use.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nameModel from "../Models/name.model.js";

//GET == user api
export const getusercontroller = async (req, res) => {
    try {
        const data = await userModel.find()
        res.send({
            data
        })
    } catch (error) {
        res.send({
            error
        })
    }
};
//||
//POST == creat user api
export const creatusercontroller = async (req, res) => {
    try {
        const {
            userName,
            email,
            password
        } = req.body
        if (!userName || !email || !password) {
            return res.status(404).send({
                message: 'please fill all fields',
                success: false
            })
        }
        const exisitinguser = await userModel.findOne({
            email
        })
        if (exisitinguser) {
            return res.status(404).send({
                message: 'you already exists',
                success: false
            })
        }
        const hashpassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            userName,
            email,
            password: hashpassword
        })
        
        await user.save()
        return res.status(200).send({
            message: 'user is creat',
            success: true,
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'intarnal error',
            success: false,
            error
        })

    }
};

//POST == login user api
export const loginusercontroller = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        if (!email || !password) {
            return res.status(404).send({
                message: 'please submit curect info',
                success: false
            })
        }
        const user = await userModel.findOne({
            email
        })
        if (!user) {
            return res.status(404).send({
                message: 'email is not found',
                success: false
            })
        }
        const isMatch =   bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).send({
                message:'invlid info',
                success:false
            })
        }
         const token = jwt.sign({
             userName:user.userName,
            email:user.email
         },'wwww')
        return res.status(200).send({
            message:'you are login',
            success:true,
            user ,
            token
        })
    } catch (error) {
        return res.status(500).send({
            message: 'inturnal error',
            success: false,
            error
        })
    }
}