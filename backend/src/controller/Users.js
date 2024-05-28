import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res)=> {
    try {
        const users = await Users.findAll({
            attributes: ['id','username','email','image']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    const {body} = req;
    try {
        const user = await Users.findAll({
            where:{
                username: body.username
            }
        });
        const match = await bcrypt.compare(body.password, user[0].password);
        if(!match) return res.status(400).json({message:"Wrong Password"});
        const userId = user[0].id;
        const username = user[0].username;
        const fullname = user[0].fullname;

        const accessToken = jwt.sign({userId,username,email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId,username,email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '86400s'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id:userId
            }
        })
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            //secure: true
        });
        res.json({accessToken});
    } catch (error) {
        res.status(404).json({message:"Username Not Found"});
    }
}

export const Register = async(req, res)=>{
    const {username, email, fullname, password, confPassword} = req.body;
    if(password != confPassword) return res.status(400).json({message: "Password & Confirm password not the same"});
    const user = await Users.findOne({
        where:{
            username: username
        }
    });
    if(user !== null) return res.status(400).json({message: "Username Exist"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            fullname: fullname,
            password: hashPassword
        })
        res.status(201).json({message: "Register success", data: req.body})
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}