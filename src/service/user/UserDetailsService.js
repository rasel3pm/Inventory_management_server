const UserDetailsService=async(req,UserModel)=>{
    try {
        let email = req.headers['email']
        let data = await UserModel.aggregate([{$match:{email:email}}])
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports = UserDetailsService