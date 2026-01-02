import path from "node:path";
import process from "node:process";
import { authenticate } from "@google-cloud/local-auth";
import { google } from "googleapis";

const SCOPES = ["https://mail.google.com/"];
const CREDENTIALS_PATH = "/media/shivamsaklani/Development/mcpserver/NeuroInbox/apps/mcpserver/credentials.json";

export let gmail: ReturnType<typeof google.gmail> | null = null;
let authPromise: Promise<ReturnType<typeof google.gmail>> | null = null;

export const  authorize = async () => {

  // already authorized → reuse
  if (gmail) return gmail;

  // authorization in progress → wait for it
  if (authPromise) return authPromise;

  // first time authorization
  authPromise = (async () => {
    const auth = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });

    gmail = google.gmail({ version: "v1", auth });
    return gmail;
  })();

  return authPromise;
};
