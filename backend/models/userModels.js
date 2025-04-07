const { default: mongoose, Schema  } = require("mongoose");
const userSchema=new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    otp:{
        type:String
    },
    isverify:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model("Usercollection",userSchema)