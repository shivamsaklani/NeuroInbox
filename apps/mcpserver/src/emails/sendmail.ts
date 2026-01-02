import { authorize } from "./mails.js";

 const gmail = await authorize();
  
const encodeMessage = (message) =>
  Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

const CreateDraft = async ({To,subject,message}:{
  To:string,
  subject:string,
  message:string,
}) => {
  const finalmessage = [
    `To:${To}`,
    `Subject:${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    `${message}`,
  ].join("\n");

  const raw = encodeMessage(finalmessage);
  console.log(raw);
  console.log(gmail);
  const draft = await gmail?.users.drafts.create({
    userId: "me",
    requestBody: {
      message: {
        raw,
      },
    },
  });
  console.log(draft);

  return draft?.data.id;
};

const SendMail = async () => {
  const draftId = await CreateDraft();
  console.log("DraftId "+draftId);
  await gmail?.users.drafts.send({
    userId: "me",
    requestBody: {
      id: draftId,
    },
  });
};


export { CreateDraft, SendMail };
