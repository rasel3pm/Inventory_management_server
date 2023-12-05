const CreateToken = require("../../utility/CreateToken")

const UserLoginService=async(req,UserModel)=>{
    try {
        let data = await UserModel.aggregate([{$match:req.body},{$project:{_id:0}}])
        if(data.length > 0){
            let token = await CreateToken(data[0]['email'])
            return {status:"success",token:token, data:data[0]}
        }else{
            return {status:"Unauthorized"}
        }
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports=UserLoginService