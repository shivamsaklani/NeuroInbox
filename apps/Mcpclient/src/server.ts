import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getMcpClient } from "./client.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: process.env['FRONTEND_URL'],
  credentials: true
}));


app.post("/api/chat", async (req, res) => {
  try {
    const client = await getMcpClient();
    const result = await client.listTools();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Client is running on port ${process.env.PORT}`);
}); 