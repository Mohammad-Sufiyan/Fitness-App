const Post=require('../api/models/forumPostModel')
const { response } = require('express');
var express = require('express');
var router = express.Router();
router.get('/',async(req,res,next)=>{
let args = {
    query: [
        {
            $lookup: {
                from: "users",
                localField: "userID",
                foreignField: "_id",
                as: "UserData"
            }
        },
        { $unwind: "$UserData" },

        {
            $project: {
              txt_msg:1,
              createdAt:1,
              name:"$UserData.name",
              profile_image:"$UserData.profile_image",
             
            }
        }
       
       
    ],
}
await Post.aggregate(args.query)
.then((data) => {
    console.log(data);
    res.render('discussion',{postData:data})

    })
      .catch((error) => {
         console.log(error) 
      })

    });
router.post('/',(req,res,next)=>{
   
    var insertPost=new Post({
        userID:req.body.userID,
        txt_msg:req.body.msg 
    });
    insertPost.save((err,data)=>{
        console.log(data)
        res.redirect('/discussion')
    });

//<|========================= inserting Category Data {END}======================|>


    });
    
module.exports = router;