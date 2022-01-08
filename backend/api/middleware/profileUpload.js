const multer=require('multer');
var pathToCreate = "./images/profile/";
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
  
 exports.uploadProfile = multer({
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
