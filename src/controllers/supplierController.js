const supplierModel = require("../models/SupplierModel")
const CheckRelatedService = require("../service/common/CheckRelatedService")
const CreateService = require("../service/common/CreateService")
const DropDownService = require("../service/common/DropDownService")
const ListService = require("../service/common/ListService")
const UpdateService = require("../service/common/UpdateService")
const mongoose = require("mongoose")
const DeleteService = require("../service/common/DeleteService")
const DetailsByIdService = require("../service/common/DetailsByIdService")

exports.CreateSupplier = async(req,res)=>{
    let result = await CreateService(req,supplierModel)
    res.status(200).json(result)
}
exports.UpdateSupplier = async(req,res)=>{
    let result = await UpdateService(req,supplierModel)
    res.status(200).json(result)
}
exports.ListSupplier = async(req,res)=>{
    let keyword = req.params.keyword
    let searchRgex= {"$regex":keyword,"$options":"i"}
    let searchArray = [{name:searchRgex}]
    let result = await ListService(req,supplierModel,searchArray)
    res.status(200).json(result)
}
exports.DropdownSupplier = async(req,res)=>{
    let result = await DropDownService(req,supplierModel,{_id:1,name:1})
    res.status(200).json(result)
}
exports.DeleteSupplier = async(req,res)=>{
    let id = req.params.id
    let ObjectID = mongoose.Types.ObjectId
    let CheckRelated = await CheckRelatedService({brandID:ObjectID(id),supplierModel})
    if(CheckRelated){
        res.status(200).json({status: "associate", data: "Associate with Product"})
    }
    else{
        let Result= await DeleteService(req,supplierModel);
        res.status(200).json(Result)
    }
}
exports.SupplierDetailsById = async(req,res)=>{
    let result = await DetailsByIdService(req,supplierModel)
    res.status(200).json(result)
}