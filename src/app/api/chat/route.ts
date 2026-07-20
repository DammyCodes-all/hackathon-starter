import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { headers } from "next/headers";
import { getDefaultModel } from "@/server/ai";
import { SYSTEM_PROMPTS } from "@/server/ai/prompts";
import { auth } from "@/server/auth";

export const maxDuration = 30;

const MAX_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 10000;

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { messages } = body as { messages: UIMessage[] };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return new Response("messages array is required", { status: 400 });
  }

  if (messages.length > MAX_MESSAGES) {
    return new Response(`Too many messages (max ${MAX_MESSAGES})`, {
      status: 400,
    });
  }

  for (const msg of messages) {
    if (
      typeof msg.content === "string" &&
      msg.content.length > MAX_MESSAGE_LENGTH
    ) {
      return new Response(
        `Message too long (max ${MAX_MESSAGE_LENGTH} characters)`,
        { status: 400 },
      );
    }
  }

  const result = streamText({
    model: getDefaultModel(),
    instructions: SYSTEM_PROMPTS.default,
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
