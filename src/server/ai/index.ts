import { groq } from "@ai-sdk/groq";
import { MODELS } from "./models";

export function getDefaultModel() {
  return groq(MODELS.DEFAULT);
}

export function getFastModel() {
  return groq(MODELS.FAST);
}

export function getReasoningModel() {
  return groq(MODELS.REASONING);
}
