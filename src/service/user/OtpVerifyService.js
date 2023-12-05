
const OtpVerifyService=async(req,dataModel)=>{
    try {
        let email = req.params.email
        let otpCode = req.params.otp
        let status = 0
        let updateStatus = 1

        let countOTP = await dataModel.aggregate([
            {$match:{email:email,otp:otpCode,status:status}},
            {$count:"total"}
        ])
        if(countOTP.length > 0){
            let otpUpdate = await dataModel.updateOne({email:email,otp:otpCode,status:status},{email:email,otp:otpCode,status:updateStatus})

            return {status:"success",data:otpUpdate}
        }else{
            return {status:"fail",message:"Invalid otp"}
        }
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}

module.exports = OtpVerifyService