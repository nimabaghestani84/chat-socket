import mongoose from "mongoose";

const ChannelConversationSchema =new mongoose.Schema(
    {
    
    },
    { timestamps: true }
);

const ChannelConversation = mongoose.model('ChannelConversation',ChannelConversationSchema);
export default ChannelConversation