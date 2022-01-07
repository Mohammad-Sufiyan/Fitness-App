const mongoose = require("mongoose");
var conn=mongoose.Collection;
var forumPostSchema=new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    txt_msg:{
        type:String
    },
   post_img:[{
        type:String
    }]
},
{ timestamps: true }
);

var ForumPost=mongoose.model('Post',forumPostSchema);
module.exports=ForumPost;