import mongoose from "mongoose";

const privateConverstationSchema =new mongoose.Schema(
    {
        memebers:{
            type:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'User'
                }
            ]
        },
        messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Message'
            }
        ],
        lastMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message'
        }
    },
    { timestamps: true }
);

const PrivateConverstation = mongoose.model('PrivateConverstation',privateConverstationSchema);
export default PrivateConverstation