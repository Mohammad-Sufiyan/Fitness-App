const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
router.get('/',(req,res,next)=>{
    axios.get(process.env.BASE_URL+'/api/leaderboard')
    .then((response)=>{
            console.log("response receive");
            console.log(response.data);
            res.render('leaderBoard',{leaderData:response.data});
    })
    .catch((error)=>{
        console.log(error)
    })
    });

module.exports = router;