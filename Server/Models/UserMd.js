import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username is unique'],
        required:[true,'username is required']
    },
    phone:{
        type:String,
        unique:[true,'phone is unique'],
        required:[true,'phone is required']
    },
    avatar:{
        type:[String],
    },
    contact:{
        type:[contactSchema],
        default:[]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
