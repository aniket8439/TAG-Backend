import mongoose from "mongoose";
import PostModel from "../models/post-schema.js";
const base_url = "http://localhost:3000/"
import { AppConstants } from "../../../shared/utils/app-constants.js";
const schemaName =  AppConstants.SCHEMA.USER_SCHEMA;


const postController = {
    async createPost(req, res) {
        try {
          // Ensure req.files is an array and not empty
          const files = req.files;
          if (!Array.isArray(files) || files.length === 0) {
            throw new Error("No files uploaded");
          }
    
          // Process each file and create media objects
          const media = files.map((file) => {
            return {
              type: file.mimetype.includes("video/") ? "video" : "image",
              url: base_url + file.filename,
            };
          });
    
          req.body.media = media;
    
          console.log(req.body);
          console.log(req.files);
    
          const result = await PostModel.create(req.body);
          res.send({
            data: result,
            status: true,
          });
        } catch (error) {
          console.error(error);
          res.status(403).json({ status: false, error: error.message });
        }
      },
    
    //  async fileUpload(req, res)  {
    
    //     console.log("req files", req.file)
    
    //     if (!req?.file) {
    //         res.status(403).json({ status: false, error: "please upload a file" })
    //         return;
    //     }
    
    //     console.log("req?.file", req?.file)
    
    //     let data = {}
    
    //     if (!!req?.file) {
    //         data = {
    //             url: req.file.location,
    //             type: req.file.mimetype
    //         }
    //     }
    //     try {
    //         res.send({
    //             data: data,
    //             status: true
    //         })
    //     } catch (error) {
    //         res.status(403).json({ status: false, error: error })
    //     }
    // },
    
     async allPosts(req, res) {
        console.log("all post", req.body);
        try{
            const result = await PostModel.find({})
            res.send({
                data: result,
                status: true
            })
        } catch(error){
            res.status(403).json({status:false, error: error})
        }
    }
}

export default postController;


