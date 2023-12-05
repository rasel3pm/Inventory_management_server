const SendEmailUtility = require("../../utility/SendEmail")
const OtpModel = require("../../models/OtpModel")
const UserVerifyService=async(req,UserModel)=>{
    try {
        let email = req.params.email
        let code = Math.floor(100000 + Math.random() *900000)
        let dataFind = await UserModel.aggregate([
            {$match:{email:email}},
            {$count:"total"}
        ])
        if(dataFind.length > 0){
            await OtpModel.create({email:email,otp:code})
            let sendEmail = await SendEmailUtility(email,"Your pin code is "+code,"Pin verification Code")
            return {status:"success",data:sendEmail}
        }else{
            return {status:"fail",message:"No user found"}
        }
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports = UserVerifyService