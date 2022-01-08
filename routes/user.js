const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

router.get('/login',(req,res,next)=>{
res.render('login',{loginData:''});
});
router.post('/login',(req,res,next)=>{
    console.log(req.body)
    axios.post(process.env.BASE_URL+'/api/user/login',req.body)
    .then((response)=>{
        if(response.data.status==200){
            req.session.userInfo=response.data.data
            res.redirect('/')
        }else{
            res.render('login',{loginData:response.data})
        }
    })
    .catch((error)=>{
        console.log(error)
    })
});

router.get('/register',(req,res,next)=>{
res.render('register',{registerData:''});
});
router.post('/register',(req,res,next)=>{
    axios.post(process.env.BASE_URL+'/api/user/register',req.body)
    .then((response)=>{
        console.log(response.data);
        res.render('register',{registerData:response.data});

    })
    .catch((error)=>{
        console.log(error)
    })
});

router.get('/profile',(req,res,next)=>{
res.render('profile');
});


router.get('/logout',(req,res,next)=>{
req.session.destroy()
res.redirect('/user/login')
});

module.exports = router;