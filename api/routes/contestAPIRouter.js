const express = require("express");
const router = express.Router();
const { contestDetails } = require('../controllers/contestController')

// GET contest Data 
router.get("/",contestDetails)

// Test
router.get("/test",(req,res,next)=>{
console.log("request reaches");
res.status(200).json({msg:"Contest Details"})
})
module.exports = router;