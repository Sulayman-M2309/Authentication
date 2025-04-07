const { default: mongoose } = require("mongoose");

function dbConnect(){
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log(`${process.env.MONGODB_URL}`);
        
    }).catch((err) => {
        console.log(err);
    });
}
module.exports=dbConnect