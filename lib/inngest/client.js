import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "AIspire", // Unique app ID
  name: "AIspire",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
