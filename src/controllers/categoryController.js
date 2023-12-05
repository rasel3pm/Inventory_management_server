const categoryModel = require("../models/CategoryModel")
const CheckRelatedService = require("../service/common/CheckRelatedService")
const CreateService = require("../service/common/CreateService")
const DropDownService = require("../service/common/DropDownService")
const ListService = require("../service/common/ListService")
const UpdateService = require("../service/common/UpdateService")
const mongoose = require("mongoose")
const DeleteService = require("../service/common/DeleteService")
const DetailsByIdService = require("../service/common/DetailsByIdService")

exports.CreateCategory = async(req,res)=>{
    let result = await CreateService(req,categoryModel)
    res.status(200).json(result)
}
exports.UpdateCategory = async(req,res)=>{
    let result = await UpdateService(req,categoryModel)
    res.status(200).json(result)
}
exports.ListCategory = async(req,res)=>{
    let keyword = req.params.keyword
    let searchRgex= {"$regex":keyword,"$options":"i"}
    let searchArray = [{name:searchRgex}]
    let result = await ListService(req,categoryModel,searchArray)
    res.status(200).json(result)
}
exports.DropdownCategory = async(req,res)=>{
    let result = await DropDownService(req,categoryModel,{_id:1,name:1})
    res.status(200).json(result)
}
exports.DeleteCategory = async(req,res)=>{
    let id = req.params.id
    let ObjectID = mongoose.Types.ObjectId
    let CheckRelated = await CheckRelatedService({brandID:ObjectID(id),categoryModel})
    if(CheckRelated){
        res.status(200).json({status: "associate", data: "Associate with Product"})
    }
    else{
        let Result= await DeleteService(req,categoryModel);
        res.status(200).json(Result)
    }
}
exports.CategoryDetailsById = async(req,res)=>{
    let result = await DetailsByIdService(req,categoryModel)
    res.status(200).json(result)
}