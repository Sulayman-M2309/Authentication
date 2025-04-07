const express=require('express')
const { signupController, loginController,verifyotpController } = require('../../conrollers/authControllers')
const router=express.Router()

router.post("/signup",signupController)
router.post("/login",loginController)
router.post("/verifyotp",verifyotpController)
module.exports=router

