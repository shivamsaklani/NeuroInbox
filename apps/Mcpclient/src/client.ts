import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

let client: Client | null = null;

export async function getMcpClient() {
  if (client) {
    return client;
  }

  const transport = new StreamableHTTPClientTransport(
    new URL("http://localhost:3001/mcp")
  );

  client = new Client({
    name: "neuroinbox-chat-agent",
    version: "1.0.0",
  });

  await client.connect(transport);

  console.log("✅ MCP Client Connected");

  return client;
}