import mongoose from "mongoose";

const GroupConversationSchema =new mongoose.Schema(
    {
    
    },
    { timestamps: true }
);

const GroupConversation = mongoose.model('GroupConversation',GroupConversationSchema);
export default GroupConversation