const User = require("../models/userModel");
const crypto=require('crypto');
const { checkPassword, hashPassword } = require("../../utils/password.util");

// --------------------- create new user ---------------------------------

exports.createNewUser = async (req, res, next) => {
  try {
    let { name,contact,email,password } = req.body;

    // check duplicate phone Number
    const userExist = await User.findOne({email:email });

    if (userExist) {

      res.status(200).send({ status: 400, message: "User already exist!!!" });
      return;
    }

    // create new user
    const createUser = new User({
     name:name,
     contact:contact,
     email:email,
     password:await hashPassword(password)
    });

    // save user

    const user = await createUser.save();
    res.status(200).send({ status: 200, message: "User Registered Successfully" });
      return;

  } catch (error) {
    next(error);
  }
};



// ------------ login with phone otp ----------------------------------

exports.login = async(req, res, next) => {
  try {

    const { email,password } = req.body;
    const user = await User.findOne({email:email});
 
    if(email==user.email && await checkPassword(password,user.password)){
    res.status(201).json({
        type: "login success",
        message: "User login successfully",
        data: {
          user:user
        },
      });
    }else{
      res.status(200).send({ status: 400, message: "User not found pls retry !!!"});

    }
    // res.status(201).json({
    //   type: "success",
    //   message: "OTP sended to your registered phone number",
    //   data: {
    //     userId: user._id,
    //   },
    // });

    // // generate otp
    // const otp = generateOTP(6);
    // // save otp to user collection
    // user.phoneOtp = otp;
    // user.isAccountVerified = true;
    // await user.save();
    // send otp to phone number
    // await fast2sms(
    //   {
    //     message: `Your OTP is ${otp}`,
    //     contactNumber: user.phone,
    //   },
    //   next
    // );
  } catch (error) {
    next(error.response.data);
  }
};

