const mongoose = require("mongoose");
var conn=mongoose.Collection;
var replySchema=new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    postID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"forumPostModel"
    },
    txt_msg:{
        type:String
    }
},
{ timestamps: true }
);

var Reply=mongoose.model('Reply',replySchema);
module.exports=Reply;