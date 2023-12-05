const brandModel = require("../models/BrandModel")
const CheckRelatedService = require("../service/common/CheckRelatedService")
const CreateService = require("../service/common/CreateService")
const DropDownService = require("../service/common/DropDownService")
const ListService = require("../service/common/ListService")
const UpdateService = require("../service/common/UpdateService")
const mongoose = require("mongoose")
const ProductModel = require("../models/ProductsModel")
const DeleteService = require("../service/common/DeleteService")
const DetailsByIdService = require("../service/common/DetailsByIdService")

exports.CreateBrand = async(req,res)=>{
    let result = await CreateService(req,brandModel)
    res.status(200).json(result)
}
exports.UpdateBrand = async(req,res)=>{
    let result = await UpdateService(req,brandModel)
    res.status(200).json(result)
}
exports.ListBrand = async(req,res)=>{
    let keyword = req.params.keyword
    let searchRgex= {"$regex":keyword,"$options":"i"}
    let searchArray = [{name:searchRgex}]
    let result = await ListService(req,brandModel,searchArray)
    res.status(200).json(result)
}
exports.DropdownBrand = async(req,res)=>{
    let result = await DropDownService(req,brandModel,{_id:1,name:1})
    res.status(200).json(result)
}
exports.DeleteBrand = async(req,res)=>{
    let id = req.params.id
    let ObjectID = mongoose.Types.ObjectId
    let CheckRelated = await CheckRelatedService({brandID:ObjectID(id),ProductModel})
    if(CheckRelated){
        res.status(200).json({status: "associate", data: "Associate with Product"})
    }
    else{
        let Result= await DeleteService(req,brandModel);
        res.status(200).json(Result)
    }
}
exports.BrandDetailsById = async(req,res)=>{
    let result = await DetailsByIdService(req,brandModel)
    res.status(200).json(result)
}