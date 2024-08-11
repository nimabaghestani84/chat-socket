import mongoose from "mongoose";

const PrivateConverstationSchema =new mongoose.Schema(
    {
    
    },
    { timestamps: true }
);

const PrivateConverstation = mongoose.model('PrivateConverstation',PrivateConverstationSchema);
export default PrivateConverstation