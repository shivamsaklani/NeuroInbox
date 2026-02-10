import express, { type Request, type Response } from "express";
const mails = express.Router();

mails.get("/",(req:Request,res:Response)=>{
    return res.status(200).send("ok");
});

// ask from user you access the email , read , write and delete permission keep the access token with you only for 1 hours.
// For saftey of the user don't copy his/her access tokens in database. 
//Database will only contain the user info, His previous chat history, settings only.

export default mails;