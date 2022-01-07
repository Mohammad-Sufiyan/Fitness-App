const express = require("express");
const router = express.Router();
const {
  createNewUser,
  login
} = require("../controllers/userController");


router.post("/register", createNewUser);
router.post("/login", login);

router.get("/test",(req,res,next)=>{
console.log("request reaches");
res.status(200).json({msg:"Hello boys"})
})
module.exports = router;