const express = require("express");
const router = express.Router();
const {getBudgets, createBudget, updateBudget, deleteBudget, getBudget} = require("../controllers/budgetController")
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken)
router.route("/").get(getBudgets).post(createBudget);

router.route("/:id").put(updateBudget).delete(deleteBudget).get(getBudget);



module.exports = router