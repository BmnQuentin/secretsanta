import { encryptText } from "./crypto";
import { ReceiverData } from "../types";

export async function generateAssignmentLink(giver: string, receiver: string, receiverHint?: string, instructions?: string) {
  // Use the base URL from Vite config (import.meta.env.BASE_URL)
  // BASE_URL is always defined by Vite and includes the base path from vite.config.ts
  // It always ends with a slash (e.g., '/secretsanta/' or '/')
  const basePath = import.meta.env.BASE_URL || '/';
  // Remove trailing slash for cleaner URL construction
  const basePathClean = basePath === '/' ? '' : basePath.replace(/\/$/, '');
  const baseUrl = `${window.location.origin}${basePathClean}`;

  // If there's a hint, encrypt a JSON object
  const dataToEncrypt = receiverHint
    ? JSON.stringify({ name: receiver, hint: receiverHint } as ReceiverData)
    : receiver;

  const encryptedReceiver = await encryptText(dataToEncrypt);
  const params = new URLSearchParams({
    from: giver,
    to: encryptedReceiver,
  });

  if (instructions?.trim()) {
    params.set('info', instructions.trim());
  }

  return `${baseUrl}/pairing?${params.toString()}`;
}

export function generateCSV(assignments: [string, string][]) {
  const csvContent = assignments
    .map(([giver, receiver]) => `${giver}\t${receiver}`)
    .join('\n');
  return `Giver\tReceiver\n${csvContent}`;
} 