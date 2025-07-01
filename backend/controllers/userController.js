const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, age, location, monthlyIncome} = req.body
    if (!name || !email || !password || !age || !location || !monthlyIncome){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const userTaken = await User.findOne({email})
    if (userTaken){
        res.status(400)
        throw new Error("Email already in use")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        name, 
        email, 
        password : hashedPassword, 
        age, 
        location, 
        monthlyIncome
    })

    if (user){
        res.status(201).json({id: user.id})
    }
    else{
        res.status(400)
        throw new Error("User data is not valid")
    }
})

const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body
    if (!email || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({email})
    if (user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user : {
                id : user.id,
                name : user.name, 
                email : user.email,
                age : user.age, 
                location : user.location, 
                monthlyIncome : user.monthlyIncome
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "60m"}
    )
        res.status(200).json({accessToken})
    } else{
        res.status(401)
        throw new Error("Email or password not valid")
    }
})

const getCurrentUser = asyncHandler(async(req, res)=>{
    res.json(req.user)
})

module.exports = {registerUser, loginUser, getCurrentUser}