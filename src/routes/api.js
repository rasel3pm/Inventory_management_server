const router = require("express").Router();
const userController = require("../controllers/userController");
const brandController = require("../controllers/brandController")
const categoryController = require("../controllers/categoryController")
const supplierController = require("../controllers/supplierController")
const Authentication = require("../middleware/AuthVerify");

//user
router.post("/signup", userController.UserSignup);
router.post("/login",userController.UserLogin)
router.get("/user-details",Authentication,userController.UserDetails)
router.post("/user-profile-update",Authentication,userController.UserProfileUpdate)
router.get("/recoverVerify/:email",userController.RecoverVerify)
router.get("/recoverVerifyOTP/:email/:otp",userController.RecoverVerifyOTP)
router.get("/reset-password",userController.PasswordReset)

//brand
router.post("/create-brand",Authentication,brandController.CreateBrand)
router.post("/update-brand/:id",Authentication,brandController.UpdateBrand)
router.get("/brand-list/:pageNo/:perPage/:searchKeyword",Authentication,brandController.ListBrand)
router.get("/dropdown",Authentication,brandController.DropdownBrand)
router.delete("/delete-brand/:id",Authentication,brandController.DeleteBrand)
router.get("/brand-details/:id",Authentication,brandController.BrandDetailsById)

//Category
router.post("/create-category",Authentication,categoryController.CreateCategory)
router.post("/update-category/:id",Authentication,categoryController.UpdateCategory)
router.get("/category-list/:pageNo/:perPage/:searchKeyword",Authentication,categoryController.ListCategory)
router.get("/dropdown",Authentication,categoryController.DropdownCategory)
router.delete("/delete-category/:id",Authentication,categoryController.DeleteCategory)
router.get("/category-details/:id",Authentication,categoryController.CategoryDetailsById)

//Supplier
router.post("/create-supplier",Authentication,supplierController.CreateSupplier)
router.post("/update-supplier/:id",Authentication,supplierController.UpdateSupplier)
router.get("/supplier-list/:pageNo/:perPage/:searchKeyword",Authentication,supplierController.ListSupplier)
router.get("/dropdown",Authentication,supplierController.DropdownSupplier)
router.delete("/delete-supplier/:id",Authentication,supplierController.DeleteSupplier)
router.get("/supplier-details/:id",Authentication,supplierController.SupplierDetailsById)


module.exports = router;
