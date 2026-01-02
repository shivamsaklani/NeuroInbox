import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { authorize } from "./emails/mails.ts";
import getRecentMails from "./emails/getRecentemails.js";
// Create server instance
const NeuroInbox = new McpServer({
  name: "NeuroInbox",
  version: "1.0.0",
});

/* ---------------- AUTH TOOL ---------------- */
NeuroInbox.registerTool(
  "authorize_gmail",
  {
    description: "Get access token via Gmail OAuth",
    inputSchema: z.object({}),
  },
  async () => {
    await authorize();
    return [
      {
        type: "text",
        text: "Gmail OAuth authorization successful",
      },
    ];
  }
);

/* ---------------- GET RECENT MAILS TOOL ---------------- */
NeuroInbox.registerTool(
  "get_recent_mails",
  {
    description: "Fetch recent Gmail messages",
    inputSchema: z.object({}),
  },
  async () => {
    try {
      const mails = await getRecentMails();

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(mails, null, 2)
          },
        ],
      };

    } catch (error) {
      return [
        {
          type: "text",
          text: `Error fetching mails: ${error?.message || String(error)}`,
        },
      ];
    }
  }
);

NeuroInbox.registerTool("draftEmail",
  {
    description:"Create a Draft and Write mail",
    inputSchema:z.object({
      To:z.email().string().description("To whom you want to send the mail"),
      subject:z.string().description("Subject of the mail"),
      message:z.string().description("Write this message according to the user description")
    })
  },
  async ()=>{
    const {To,subject,message}= inputSchema;
    try{
      const createDraft = CreateDraft({
        To,subject,message
      });

      return {
        content:[
          {
            type:"text",
            text:"Draft Created"
          }
        ]
      }
    }
    catch(error){
        return [
        {
          type: "text",
          text: `Error fetching mails: ${error?.message || String(error)}`,
        },
      ];
    }

  }
)
/* ---------------- SERVER BOOT ---------------- */
async function main() {
  const transport = new StdioServerTransport();
  await NeuroInbox.connect(transport);
  console.error("NeuroInbox MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

export default NeuroInbox;
