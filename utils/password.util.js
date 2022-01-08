const bcrypt=require('bcrypt');
const { restart } = require('nodemon');
exports.checkPassword = async (userPassword,dataBasePass) => {
    var checkingPass=await bcrypt.compare(userPassword,dataBasePass)
    console.log("checking pass"+checkingPass);
    return checkingPass
} 



exports.hashPassword = async (password) => {
    var encodeRegistPass=await bcrypt.hash(password,10);
    console.log("hashing password"+encodeRegistPass);

    return encodeRegistPass
    }
