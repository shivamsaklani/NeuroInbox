import express from "express";
import mails from "./routes/Emails/mails.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/mails",mails);
app.get("/",(req, res)=>{
    return res.status(200).send("Server Running");
})
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
}); 