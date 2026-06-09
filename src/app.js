const express = require("express")
const cookiesParser = require("cookie-parser");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://ai-resume-analyzer-n9kkjozsm-23053132-glitchs-projects.vercel.app"
    ],
    credentials: true
}))

const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;