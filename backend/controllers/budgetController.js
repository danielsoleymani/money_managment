const asyncHandler = require("express-async-handler")
const Budget = require("../models/budgetModel")

const getBudgets = asyncHandler(async (req, res)=>{
    const budgets = await Budget.find({user_id: req.user.id})
    res.status(200).json(budgets)
})

const createBudget = asyncHandler(async (req, res)=>{
    const {income,totalBudget,amountUsed} = req.body;
    if (!income || !totalBudget || !amountUsed){
        res.status(400);
        throw new Error("All fields are required")
    }
    const budget = await Budget.create({
        income,
        totalBudget,
        amountUsed,
        user_id : req.user.id
    })
    res.status(201).json(budget)
})

const updateBudget = asyncHandler(async (req, res)=>{
    const budget = await Budget.findById(req.params.id)
    if (!budget){
        res.status(404)
        throw new Error("Budget not found")
    }
    if (budget.user_id.toString() != req.user.id){
        res.status(403)
        throw new Error("User doesn't have permission to update other users contacts")
    }

    const updatedBudget = await Budget.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedBudget)
})
 
const deleteBudget = asyncHandler( async (req, res)=>{
    const budget = await Budget.findById(req.params.id)
    if (!budget){
        res.status(404)
        throw new Error("Budget not found")
    }
    if (budget.user_id.toString() != req.user.id){
        res.status(403)
        throw new Error("User doesn't have permission to delete other users contacts")
    }
    await budget.deleteOne()
    res.status(200).json(budget)
})

const getBudget = asyncHandler(async (req, res)=>{
    const budget = await Budget.findById(req.params.id)
    if (!budget){
        res.status(404)
        throw new Error("Budget not found")
    }
    res.status(200).json(budget)
})



module.exports = {
    getBudgets, 
    createBudget, 
    updateBudget, 
    deleteBudget, 
    getBudget
};