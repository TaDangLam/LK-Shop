import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

import { User } from "../model/userModel.js";

const userController = {
    // Register User
    registerUser: async(req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // create new user in database
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            // save to DB
            const user = await newUser.save();
            res.status(StatusCodes.CREATED).json(user);
        } catch(err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    // login
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            // check user in database
            if(!user){
                res.status(StatusCodes.NOT_FOUND).json("Username does not exist");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );

            // check validPassword
            if(!validPassword){
                res.status(StatusCodes.NOT_FOUND).json("Incorrect password");
            }

            // check user and validPassword
            if(user && validPassword){
                // sign(Payload kiểu  object, secrect, option)
                const accessToken = jwt.sign({
                    id: user.id,
                    role: user.role
                },
                process.env.JWT_ACCESS_KEY,
                {
                    expiresIn: "15s"
                });
                res.status(StatusCodes.ACCEPTED).json({user, accessToken});
            }
        } catch(err){
            res.status(StatusCodes.BAD_REQUEST).json(err);
        }
    },
    
    //Get All User
    getAllUser: async(req, res) => {
        try {
            const userData = await User.find();
            res.status(StatusCodes.OK).json(userData);
        } catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },

    //delete User
    deleteUser: async(req, res) => {
        try {
            const userID = req.params.id;
            const userData = await User.findByIdAndDelete(userID);
            res.status(StatusCodes.OK).json("User is Deleted");
        } catch(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    },


}

export default userController;
