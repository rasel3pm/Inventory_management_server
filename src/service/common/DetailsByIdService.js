const mongoose = require("mongoose")
const DetailsByIdService =async (req,DataModel)=>{
    try {
        const userEmail= req.headers['email']
        const id = req.params.id
        const ObjectID = mongoose.Types.ObjectId
        const queryObject ={}
        queryObject['_id']= ObjectID(id)
        queryObject['userEmail']=userEmail

        let data = await DataModel.aggregate([
            {$match:queryObject}
        ])
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports = DetailsByIdService