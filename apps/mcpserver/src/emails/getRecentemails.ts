import { authorize } from "./mails.js";

 const gmail = await authorize();
  


const decodeBase64 = (data: string) =>
  Buffer.from(data, "base64").toString("utf-8");

const extractMailDetails = (message: any) => {
  const headers = message.payload.headers;

  const subject =
    headers.find((h: any) => h.name === "Subject")?.value || "No Subject";

  let body = "";

  // Case 1: simple email
  if (message.payload.body?.data) {
    body = decodeBase64(message.payload.body.data);
  }

  // Case 2: multipart email
  if (message.payload.parts) {
    const part = message.payload.parts.find(
      (p: any) => p.mimeType === "text/plain" || p.mimeType === "text/html"
    );

    if (part?.body?.data) {
      body = decodeBase64(part.body.data);
    }
  }

  return { subject, body };
};


const getDetailedMessage = async (id: string) => {
  const details = await gmail.users.messages.get({
    userId: "me",
    id,
    format: "full",
  });

  return extractMailDetails(details.data);
};




const getRecentMails = async () => {
 
  if(!gmail) return [];
  console.log(gmail);
  const mails = await gmail.users.messages.list({
    userId: "me",
    maxResults: 10,
  });

  const messages = mails.data.messages;
  console.log("Fetched messages:", messages);
  if (!messages || messages.length === 0) return [];

  const result = [];

  for (const msg of messages) {
    const mail = await getDetailedMessage(msg.id);
    result.push(mail);
  }

  console.log(result);
  return result;
};
export default getRecentMails;
