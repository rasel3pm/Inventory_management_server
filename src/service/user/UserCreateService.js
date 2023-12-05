const UserCreateService = async(req,UserModel)=>{
    try {
        let reqBody = req.body 
        let data = await UserModel.create(reqBody)
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports=UserCreateService