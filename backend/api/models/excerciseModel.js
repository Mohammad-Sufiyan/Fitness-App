const mongoose = require("mongoose");
var conn=mongoose.Collection;
var excerciseSchema=new mongoose.Schema({
    name:{
        type:String
    },
  
},
{ timestamps: true }
);

var excercise=mongoose.model('Excercise',excerciseSchema);
module.exports=excercise;