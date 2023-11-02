import UserModel from "../../../user/models/user-schema.js";


export const registerService = {
    async registerUser(userObject) {
        try {
            const doc = await UserModel.create(userObject);
            return doc;
        }
        catch(err){
            throw err;
        }
    }
}