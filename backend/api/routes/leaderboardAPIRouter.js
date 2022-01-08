const express = require('express')
const router = express.Router()

const {leaderboardDetail} = require('../controllers/leaderboardController')


//Learderboard GET Route

router.get("/",leaderboardDetail)


// Testing Route
router.get("/test",(req,res,next)=> {
    console.log('great')
})


module.exports = router;