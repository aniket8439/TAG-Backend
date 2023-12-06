import mongoose from 'mongoose';
const {ObjectId} = mongoose.Schema.Types;
import { AppConstants } from '../../../shared/utils/app-constants.js';
const schemaName =  AppConstants.SCHEMA.USER_SCHEMA;
const mediaSchema = new mongoose.Schema({
    type: {type: String, enum: ['image', 'video'], required: false},
    url: {type: String, required: true}
})

const postSchema = new mongoose.Schema({
media: [mediaSchema],
description: {
    type: String
},
userId: {
    type: ObjectId,
     required: true,
      ref: schemaName
    },
likeCount: {
    type: Number,
     default: 0
    },
commentCount: {
    type: Number,
     default: 0
    },
},{timestamps: true})

const PostModel = mongoose.model("Post", postSchema);
export default PostModel;