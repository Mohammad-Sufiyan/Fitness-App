const express = require('express')
const exercise = require('express')
const router = express.Router()
const exerciseData = require('../data/exerciseData')
const User = require('../api/models/userModel')
const Contest = require('../api/models/contestModel')
const mongoose = require('mongoose')

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

router.get('/streak/:id', async(req,res)=>{
    User.findOneAndUpdate(
        {"_id" : mongoose.Types.ObjectId(req.session.userInfo._id)},{
            $inc : {streak: +1}
        },(err,status) => {
            if(err) {
                console.log(err)
            }else{
                console.log(status)
            }
        }
    )
    res.redirect('/contest')
})


module.exports = router;