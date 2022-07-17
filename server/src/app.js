const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/IncomeRoute");
const expenseRoute = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/accountStatsRoute/accountStatsRoute");
const app = express();

//env
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Expense Tracker API..." });
});

//users routes
app.use("/api/users", userRoute);

//account stats
app.use("/", accountStatsRoute);

//income routes
app.use("/api/income", incomeRoute);

//expenses routes
app.use("/api/expenses", expenseRoute);

//Error
app.use(notFound);
app.use(errorHandler);

//income
//expenses

module.exports = app;
