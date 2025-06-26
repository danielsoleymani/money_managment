const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true, "Please enter a name"]
    },
    email : {
        type: String,
        required : [true, "Please enter a email"],
        unique : [true, "Email already in use"]
    },
    password : {
        type: String,
        required : [true, "Please enter a password"]
    },
    age : {
        type: Number,
        required : [true, "please enter an age"]
    },
    location : {
        type: String, 
        required : [true, "please enter an age"]
    },
    monthlyIncome : { 
        type: Number,
        required : [false]
    }
    }
)

module.exports = mongoose.model("Users", userSchema)