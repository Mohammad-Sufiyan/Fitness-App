var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    console.log(req.session.userInfo);
res.render('index');
});

module.exports = router;