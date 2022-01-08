const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
router.get('/',(req,res,next)=>{
    res.render('leaderBoard');
    });

module.exports = router;