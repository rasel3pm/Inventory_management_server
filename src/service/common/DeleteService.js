const DeleteService= async (req, Model) => {
    try{
        let DeleteID=req.params.id;
        let userEmail=req.headers['email'];

        let QueryObject={};
        QueryObject['_id']=DeleteID;
        QueryObject[userEmail]=userEmail;

        let Delete=  await Model.deleteMany(QueryObject)
        return {status: "success",Delete:Delete}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DeleteService