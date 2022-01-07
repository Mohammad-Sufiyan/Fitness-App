const mongoose = require("mongoose");
var conn=mongoose.Collection;
var ContestSchema=new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    month:{
        type:String
    },
    day:{
        type:String
    },
    streak:{
        type:String
    }
  
},
{ timestamps: true }
);

var Contest=mongoose.model('Contest',ContestSchema);
module.exports=Contest;