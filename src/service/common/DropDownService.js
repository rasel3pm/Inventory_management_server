const DropDownService =async (req,DataModel,projection)=>{
    try {
        let userEmail= req.headers['email']
        let data = await DataModel.aggregate([
            {$match:{userEmail:userEmail}},
            {$project:projection}
        ])
        return {status:"success",data:data}
    } catch (error) {
        return {status:"fail",data:error.toString()}
    }
}
module.exports = DropDownService