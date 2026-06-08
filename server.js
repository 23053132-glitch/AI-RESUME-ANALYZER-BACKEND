require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")
//const invokeGeminiAi = require("./src/services/ai.service")
const {resume,selfDescription ,jobDescription}= require("./src/services/temp")
const {generateInterviewReport} = require("./src/services/ai.service")
connectToDB();
app.listen(3000,()=>{
console.log("server is running on port 3000")
});
generateInterviewReport({resume,selfDescription,jobDescription})
    .then(() => console.log("Startup test report generation completed successfully."))
    .catch(err => console.error("Startup test report generation failed (API status):", err.message));