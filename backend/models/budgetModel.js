const mongoose = require ('mongoose')

const budgetSchema = mongoose.Schema({
        user_id : {
            type: String,
            required : [true, "Please enter a user Id"]
        },
        income : {
            type: Number,
            required : [true, "Please enter an income amount"]
        },
        totalBudget : {
            type : Number,
            required : [true, "Please enter a budget amount"] 
        },
        amountUsed:{
            type: Number,
            required : [true, "Please enter amount used "]
        }  
    },
    {
        timestamps: true, 
    }
)

module.exports = mongoose.model("Budget", budgetSchema)