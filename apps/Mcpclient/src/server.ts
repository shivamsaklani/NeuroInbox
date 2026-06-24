import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getMcpClient } from "./client.js";
import { GoogleGenAI } from "@google/genai";
dotenv.config();
const API_KEY = process.env.GOOGLE_GEMINI_API;
const app = express();
const ai = new GoogleGenAI({apiKey: API_KEY});
app.use(express.json());
app.use(cors({
  origin: process.env['FRONTEND_URL'],
  credentials: true
}));


app.post("/api/chat", async (req, res) => {
  try {
    const client = await getMcpClient();
    const result = await client.listTools();
    const interaction = await ai.interactions.create({
      model: "gemini-flash-latest",
      input: "Explain how AI works in a few words",
    });

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