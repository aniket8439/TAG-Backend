import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import { STATUS_CODES } from '../../../../shared/utils/app-constants.js';
import loginService from '../services/login-services.js';

const loginController = {
    async login(request, response) {
        const { email, password } = request.body;
        const user = await loginService.login(email);

        try {
            if (!user) {
                return response.status(400).json({
                    error: "User email does not exist",
                });
            }

            const isPasswordValid = await user.validatePassword(password);

            if (!isPasswordValid) {
                return response.status(401).json({
                    error: "Email and password do not match",
                });
            }

            // Create token
            const token = jwt.sign({ _id: user._id }, process.env.SECRET);

            // Put token in cookie
            response.cookie("token", token, { expire: new Date() + 9999 });

            // Send response to front end
            const { _id, name, email, isGuide, phone, instagram, facebook } = user;
            return response.json({ token, user: { _id, name, email, isGuide, phone, instagram, facebook } });
        } catch (error) {
            // Handle any unexpected errors here
            console.error(error);
            return response.status(500).json({
                error: "Internal Server Error",
            });
        }
    },

    //LOGOUT CONTROLLER

    async logout(request, response) {
        await response.clearCookie("token");
        response.json({
            message: "User LogOut successfully.."
        });

    },


    //protected routes
      async isLogIn(){
        return expressJwt({
            secret: process.env.SECRET,
            userProperty: "auth"
        });
      } ,

//custom middlewares
       async isAuthenticated(request, response, next){
         let checker = await request.profile && request.auth && request.profile._id == request.auth._id;
        if (!checker) {
            return response.status(403).json({
                error: "ACCESS DENIED"
            });
        }
        next();
    },

    async isAdmin(request, response, next) {
        if (request.profile.isGuide === true) {
            return response.status(403).json({
                error: "You are not ADMIN, Access denied"
            });
        }
        next();
    }
}

export default loginController;
