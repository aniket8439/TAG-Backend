import jwt from 'jsonwebtoken';
//const { validationResult } = require(expressJwt);
import expressJwt from 'express-jwt';
import { STATUS_CODES } from '../../../../shared/utils/app-constants.js';
import { registerService } from '../services/register-services.js';


const registerController = {

    async registerUser(request, response) {
        // const errors = validationResult(request);

        // if (!errors.isEmpty()) {
        //     return response.status(422).json({
        //         error: errors.array()[0].msg
        //     });
        // }

        const userBody = request.body;
        console.log("user controller ka data....", userBody);
        try {
            const doc = await registerService.registerUser(userBody);
            if (doc && doc.email) {
                response.status(STATUS_CODES.SUCCESS).json({ message: 'User Added Successfully' });
            } else {
                response.status(STATUS_CODES.RESOURCE_NOT_FOUND).json({ message: 'Not Able to Add a User' });
            }
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'Error while adding the data' });
            console.log(err);
        }
    }
}

export default registerController;