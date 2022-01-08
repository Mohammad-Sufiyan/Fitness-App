const express = require("express");
const {uploadProfile}=require("../middleware/profileUpload");
const router = express.Router();
const {
  createNewUser,
  login,
  getUserProfile,
  updateProfile
} = require("../controllers/userController");


router.post("/register", createNewUser);
router.post("/login", login);
router.get("/profile/:userID",getUserProfile)
router.post("/profile/update",uploadProfile,updateProfile)



router.get("/test",(req,res,next)=>{
console.log("request reaches");
res.status(200).json({msg:"Hello boys"})
})
module.exports = router;