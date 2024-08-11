import User from '../Models/UserMd.js'
import { sendAuthCode, verifyCode } from "../Utils/smsHandler.js";
import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";

export const auth = catchAsync(async (req, res, next) => {
    const { phone } = req.body;
    
    const smsData = await sendAuthCode(phone);
    if (!smsData.success) {
      return next(new HandleError(smsData.message, 500));
    }
    return res.status(200).json({
      success:true,
      message: "sms send",
    });
  });

export const checkCode = catchAsync(async (req, res, next) => {
    const {phone , code }=req.body;
    const user = await User.findOne(phone);
    const smsData = await verifyCode(phone, code);
    const { password, role = ""} = req.body;

    if (!smsData.success) {
        return next(new HandleError("invalid code", 404));
    }
    if (user) {
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
          ); 
    }else{
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET
          ); 
    }
});

export const getAllUser = catchAsync(async (req, res, next) => {});
