const { default: axios } = require('axios');
const { response } = require('express');
var express = require('express');
var router = express.Router();
var {getProfile}=require("../routes/middleware/commonMiddleware")
const multer=require('multer');
var pathToCreate = "./public/images/profile/";
var path = require('path');
var fs = require('fs');
//image upload code
var Storage = multer.diskStorage({
    destination:async function (req, file, cb) {
        console.log("Files From Disk :  ");     
          cb(null, pathToCreate);

      
    },
    filename: (req, file, cb) => {
        console.log(req.body);
        var userID=req.body.userID
        cb(null, "profile" + "_" + userID + path.extname(file.originalname));
    
    },
  });
  
 uploadProfile = multer({
    storage: Storage,
    fileFilter: function (req, files, callback) {
        var ext = path.extname(files.originalname);
        var extLower = ext.toLowerCase();
        if (extLower == '.jpeg' || extLower == '.png' || extLower == '.jpg') {
            callback(null, true)
        } else {
            callback({
                message: 'Invalid file Type. Only jpg, png and jpeg are allowed.'
            }, false);
  
        }
    },
    
  }).single("profile");


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

router.get('/profile/:userID',(req,res,next)=>{
    var userID=req.params.userID
    if(userID!="null"){
    axios.get(process.env.BASE_URL+'/api/user/profile/'+userID)
    .then((response)=>{
            console.log("response receive");
            console.log(response.data);
            res.render('profile',{profileData:response.data.data,msg:''});
        })
    .catch((error)=>{
        console.log(error)
    })
}else{
    res.render('profile',{profileData:'',msg:''});

}
});

router.post("/profile/update",uploadProfile,(req,res,next)=>{
    var mergedData={...req.body,...req.file} 
    axios.post(process.env.BASE_URL+'/api/user/profile/update',mergedData)
    .then(async(response)=>{
        console.log(response.data);
        profileData=await getProfile(response.data.data._id)
        console.log(profileData);
        res.render('profile',{profileData:profileData.data,msg:response.data.msg});

    })
    .catch((error)=>{
        console.log(error)
    })
})

router.get('/logout',(req,res,next)=>{
req.session.destroy()
res.redirect('/user/login')
});

module.exports = router;