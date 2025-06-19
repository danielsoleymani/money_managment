const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/budget", require("./routes/budgetRoutes"))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
