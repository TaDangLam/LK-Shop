import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

const middlewareController = {
    // verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token){
            // Bearer 123123123
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY,(err, user) => {
                if(err){
                    return res.status(StatusCodes.FORBIDDEN).json("Token is not valid");
                }
                // req.user từ user gửi req ên , user bên phải là của database;
                req.user = user;
                next();
            });
        }
        else{
            return res.status(StatusCodes.UNAUTHORIZED).json("You are not Authenticated");
        }
    }
}

export default middlewareController;
