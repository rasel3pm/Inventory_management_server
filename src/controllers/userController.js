const UserModel = require("../models/UserModel");
const OtpVerifyService = require("../service/user/OtpVerifyService");
const ProfileUpdateService = require("../service/user/ProfileUpdateService");
const UserResetPassService = require("../service/user/ResetPasswordService");
const UserCreateService = require("../service/user/UserCreateService");
const UserDetailsService = require("../service/user/UserDetailsService");
const UserLoginService = require("../service/user/UserLoginService");
const UserVerifyService = require("../service/user/UserVerifyService");

exports.UserSignup = async (req, res) => {
  let result = await UserCreateService(req,UserModel)
  res.status(200).json(result)
};
exports.UserLogin = async (req,res)=>{
  let result = await UserLoginService(req,UserModel)
  res.status(200).json(result)
}
exports.UserDetails = async (req,res)=>{
  let result = await UserDetailsService(req,UserModel)
  res.status(200).json(result)
}
exports.UserProfileUpdate = async (req,res)=>{
  let result = await ProfileUpdateService(req,UserModel)
  res.status(200).json(result)
}
exports.RecoverVerify = async (req,res)=>{
  let result = await UserVerifyService(req,UserModel)
  res.status(200).json(result)
}
exports.RecoverVerifyOTP = async (req,res)=>{
  let result = await OtpVerifyService(req,UserModel)
  res.status(200).json(result)
}
exports.PasswordReset = async (req,res)=>{
  let result = await UserResetPassService(req,UserModel)
  res.status(200).json(result)
}



