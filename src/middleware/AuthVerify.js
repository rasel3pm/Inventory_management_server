const jwt = require("jsonwebtoken");
const Authentication = async (req, res, next) => {
  let token = req.headers['token'];
  await jwt.verify(token,process.env.JWT_SECRATE_KEY,(err,decoded)=>{
    if(err){
        res.status(401).json({status:false,message:"unauthorized"})
    }else{
        let email = decoded['data']
        req.headers.email=email
        next()
    }
  })
};
module.exports= Authentication
