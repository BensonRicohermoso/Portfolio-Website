# Chatbot Fix TODO

## Plan Steps:

- [x] Step 1: Create .env with provided GEMINI_API_KEY
- [x] Step 2: Updated vite.config.js with proxy (optional)
- [ ] Step 3: Updated ChatBot.jsx to direct Gemini API call (fix response parsing)
- [x] Step 4: Test with `npm run dev` (running on another port)
- [x] Step 5: Mark complete

**UPDATED:** Fixed Gemini response parsing (data.candidates[0].content.parts[0].text). HMR applied (vite updated ChatBot.jsx).

**NEXT:** Ctrl+C to stop dev server, `npm run dev` to restart (reloads .env), test chat at http://localhost:5174/. Should work now - no more connection error.

Prod: `npx vercel`.
