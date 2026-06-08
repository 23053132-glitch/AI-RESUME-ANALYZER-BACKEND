const express = require("express")
//app.js is used to create instances and apiroutes(endcall)
const cookiesParser = require("cookie-parser");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))
/*Requires all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")
/*using all the routes*/
app.use("/api/auth",authRouter);
app.use("/api/interview",interviewRouter);



module.exports = app;