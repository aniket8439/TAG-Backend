import express from 'express';
import { USER_ROUTES } from '../../../../shared/utils/app-constants.js';
import registerController from '../controllers/register-controller.js';

const registerRoutes = express();

registerRoutes.post(USER_ROUTES.REGISTER,registerController.registerUser);

export default registerRoutes;
