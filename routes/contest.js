const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
const exerciseData = require('../data/exerciseData')

router.get('/',(req,res,next)=>{

    //console.log(exerciseData.module)
    res.render('contest',{status:200,exerciseData:exerciseData.module});
});

module.exports = router;