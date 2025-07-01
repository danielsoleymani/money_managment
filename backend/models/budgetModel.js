const mongoose = require ('mongoose')

const budgetSchema = mongoose.Schema({
        user_id : {
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "User"
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