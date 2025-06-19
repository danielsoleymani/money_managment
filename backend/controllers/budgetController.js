const asyncHandler = require("express-async-handler")

const getBudgets = asyncHandler(async (req, res)=>{
    res.status(200).json({message : "Get all user budgets"})
})

const createBudget = asyncHandler(async (req, res)=>{
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }
    res.status(201).json({message : "Create budget"})
})

const updateBudget = asyncHandler(async (req, res)=>{
    res.status(200).json({message : `Update budget for ${request.params.id}`})
})
 
const deleteBudget = asyncHandler( async (req, res)=>{
    res.status(200).json({message :`Delete budget for ${request.params.id}`})
})

const getBudget = asyncHandler(async (req, res)=>{
    res.status(200).json({message :`Get budget for ${request.params.id}`})
})



module.exports = {
    getBudgets, 
    createBudget, 
    updateBudget, 
    deleteBudget, 
    getBudget
};