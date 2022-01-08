const express = require("express");
const router = express.Router();
var { dietPlan } = require('../controllers/dietController')

router.get("/dietplan",dietPlan);

router.get("/test",(req,res,next)=>{
console.log("request reaches");
res.status(200).json({msg:"Diet Plan API"})
})
module.exports = router;