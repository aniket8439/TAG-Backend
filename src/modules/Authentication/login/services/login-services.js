import UserModel from "../../../user/models/user-schema.js";

const loginService = {
    async login(email){
        try{
            const doc = await UserModel.findOne({email});
            return doc;
        }
        catch(err){
            return err;
        }
    }
}

export default loginService;