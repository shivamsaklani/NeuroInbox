import {getMcpClient } from "../src/client.ts";

async function main() {
  try {
    const client = await getMcpClient();

    console.log("Connected to MCP");

    const tools = await client.listTools();

    console.log("Available tools:");
    console.dir(tools, { depth: null });
  } catch (error) {
    console.error(error);
  }
}

main();