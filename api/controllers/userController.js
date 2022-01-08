const User = require("../models/userModel");
const crypto=require('crypto');
const mongoose=require("mongoose")
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
        status: 200,
        message: "User login successfully",
        data: {
          user:user
        },
      });
    }else{
      res.status(200).send({ status: 400, message: "Invalid Username/Password!!!"});

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

exports.getUserProfile=async(req,res,next)=>{
  let matchObj = {};
      matchObj['_id'] = mongoose.Types.ObjectId(req.params.userID);
  let args = {
      query: [
          {
              $match: { ...matchObj },
          },
          {
              $lookup: {
                  from: "Post",
                  localField: "_id",
                  foreignField: "userID",
                  as: "PostData"
              }
          },
          {
              $lookup: {
                  from: "Reply",
                  localField: "_id",
                  foreignField: "userID",
                  as: "ReplyData"
              }
          },
          {
              $project: {
                name: 1,
                contact: 1,
                profile_image: 1,
                email: 1,
                streak:1,
                totalPost: { $cond: { if: { $isArray: "$PostData" }, then: { $size: "$PostData" }, else: "NA"} },
                totalReply: { $cond: { if: { $isArray: "$ReplyData" }, then: { $size: "$ReplyData" }, else: "NA"} },
              }
          }
      ],
  }
  console.log(args.query)
  await User.aggregate(args.query)
  .then((data) => {
          if (data) {
            return res.status(200).send({data:data})
        }
        return res.status(200).send({data:"data not found"})
        })
        .catch((error) => {
           console.log(error) 
        })
 

}

exports.updateProfile=async(req,res,next)=>{
var {userID,name,contact,password}=req.body
console.log(req.file);
console.log(req.body)
  var findingAndUpdatingProfile= User.findOneAndUpdate({_id:userID},{
    name:name,
    contact:contact,
    password:await hashPassword(password),
    profile_image:req.file.path

    });
    findingAndUpdatingProfile.exec((err,singleData)=>{  
  res.status(200).send({msg:"Profile Updated Successfully!!!"});
});
}