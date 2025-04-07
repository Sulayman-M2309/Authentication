const { sendEmail } = require("../helpers/sendEmail");
const userModels = require("../models/userModels");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

async function signupController(req, res) {
  const { name, email, password, role } = req.body;
  // const otp = otpGenerator.generate(6, {
  //   upperCaseAlphabets: false,
  //   specialChars: false,
  // });
  const otp = aleaRNGFactory(Date.now()).uInt32().toString().substring(0, 6);

  try {
    const olduseremail = await userModels.findOne({ email });
    if (!olduseremail) {
      bcrypt.hash(password, 10, async function (err, hash) {
        const usercollect = new userModels({
          name,
          password:hash,
          email,
          role,
        });
        await usercollect.save();
        sendEmail(email,otp);
        usercollect.otp = otp;
        await usercollect.save();
        res
          .status(201)
          .json({
            msg: "signup crating Success",
            success: true,
            data: usercollect,
          });
      });
    
    } else {
      res
        .status(500)
        .json({ msg: "Alrady You have an a Account", success: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message ? error.message : message, success: false });
  }
}
async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    const existinguser = await userModels.findOne({ email });
    if(!existinguser){
      return res.status(404).json({ success: false, msg: "email not found" });
    }else{
      bcrypt.compare(password, existinguser.password,async function(err, result) {
        const user = await userModels.findOne({ email }).select("-password");
      if (result) {
        if(existinguser.role=="user"){
          const token = jwt.sign({ user }, process.env.JWT_Scret);
          return res
          .status(200)
          .json({ success: true, msg: "user Login Successfully",data:user,token:token});
        }else if(existinguser.role=="admin"){
          const token = jwt.sign({ user }, process.env.JWT_Scret,{ expiresIn: '1h' });
          return res
          .status(200)
          .json({ success: true, msg: "User Login Successfully",data:user ,token:token });
        }
    
      } else {
        return res
        .status(404)
        .json({ msg: "Invalid Password", success: false });
      }
    });
    }
 
  } catch (error) {
    res
    .status(500)
    .json({ error: error.message ? error.message : message, success: false });
  }
}
async function verifyotpController(req, res) {
  const { email, otp } = req.body;
  try {
    const existinguser = await userModels.findOne({ email });
    if (existinguser) {
      if (existinguser.otp == otp) {
        (existinguser.isverify = true), (existinguser.otp = null);
        await existinguser.save();
        res.status(200).json({ success: true, msg: "otp successful" });
      } else {
        res.status(404).json({ error: "otp invalid", success: false });
      }
    } else {
      res.status(404).json({ error: "user not found", success: false });
    }

  } catch (error) {
    res
    .status(500)
    .json({ error: error.message ? error.message : message, success: false });
    
  }
}
module.exports = { signupController, loginController,verifyotpController };
