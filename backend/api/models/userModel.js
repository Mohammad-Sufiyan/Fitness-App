const mongoose = require("mongoose");
var conn=mongoose.Collection;
var UsersSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    contact:{
        type:String
    },
    profile_image:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    streak:{
        type:Number
    }
},
{ timestamps: true }
);

var Users=mongoose.model('User',UsersSchema);
module.exports=Users;