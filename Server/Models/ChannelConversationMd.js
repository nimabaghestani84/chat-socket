import mongoose from "mongoose";

const permissionSchima=new mongoose.Schema({
    addAdmin:{
        type:Boolean,
        default:false
    },
    removeAdmin:{
        type:Boolean,
        default:false
    },
    addOrRemoveMember:{
        type:Boolean,
        default:true
    }
})
const channelConversationSchema =new mongoose.Schema(
    {
        name:{
            name:String,
            required:[true,'name is required']
        },
        image:{
            type:String
        },
        memebers:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        messages:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message'
        }],
        lastMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message'
        },
        admins:[
            {
                userId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'User'
                },
                Permission:permissionSchima
            }
        ],
        isOwner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    },
    { timestamps: true }
);

const GroupConversation = mongoose.model('GroupConversation',channelConversationSchema);
export default GroupConversation