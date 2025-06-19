const getBudgets = (req, res)=>{
    res.status(200).json({message : "Get all user budgets"})
}

const createBudget = (req, res)=>{
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }
    res.status(201).json({message : "Create budget"})
}

const updateBudget = (req, res)=>{
    res.status(200).json({message : `Update budget for ${request.params.id}`})
}
 
const deleteBudget = (req, res)=>{
    res.status(200).json({message :`Delete budget for ${request.params.id}`})
}

const getBudget = (req, res)=>{
    res.status(200).json({message :`Get budget for ${request.params.id}`})
}



module.exports = {
    getBudgets, 
    createBudget, 
    updateBudget, 
    deleteBudget, 
    getBudget
};