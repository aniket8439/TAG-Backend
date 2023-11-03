import express from 'express';
import { USER_ROUTES } from '../../../../shared/utils/app-constants.js';
import loginController from '../controllers/login-controller.js';


const loginRoutes = express();

loginRoutes.post(USER_ROUTES.LOGIN, loginController.login);
loginRoutes.get(USER_ROUTES.LOGOUT, loginController.logout);

export default loginRoutes;