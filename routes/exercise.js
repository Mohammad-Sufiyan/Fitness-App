const express = require('express')
const exercise = require('express')
const router = express.Router()
const exerciseData = require('../data/exerciseData')
const User = require('../api/models/userModel')
router.get("/contest/:id",(req,res)=> {
    const id = req.params.id;
    let itemYouWant = null;
    exerciseData.module.forEach((item) => {
        if (item.id == id) {
        itemYouWant = item;
    }
    });
    res.render('exercise',{status:200,data:itemYouWant});
})

router.get('/streak',(req,res)=>{
    console.log('got it')
})


module.exports = router;