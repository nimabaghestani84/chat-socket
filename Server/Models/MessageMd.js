import mongoose from "mongoose";

const messageSchema =new mongoose.Schema(
    {
        content:{
            type:String,
            required:[true,'content is required']
        },
        attachment:{
            type:String,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        reply:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message'
        }
    },
    { timestamps: true }
);

const Message = mongoose.model('Message',messageSchema);
export default Message