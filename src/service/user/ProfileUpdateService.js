const ProfileUpdateService=async(req,UserModel)=>{
    try {
        let email = req.headers['email']
        let data = await UserModel.updateOne({email:email},req.body)
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports=ProfileUpdateService