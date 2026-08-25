// server/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { BEUGRAM_KNOWLEDGE } from './knowledge.js';

dotenv.config();

const PORT = process.env.PORT || 3001;
const GEMINI_MODEL = 'gemini-3.6-flash';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is missing in .env');
}

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY
});

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ]
}));

app.use(express.json());


// ===============================
// HEALTH CHECK
// ===============================

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'BeUGram Gemini Campus Copilot'
  });
});


// ===============================
// GEMINI CAMPUS COPILOT
// ===============================

app.post('/api/gemini', async (req, res) => {
  const message = req.body?.message;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      error: 'Message is required.'
    });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({
      error: 'Server is missing Gemini configuration.'
    });
  }

  try {

    // Give Gemini the BeUGram knowledge
    // together with the user's question.
    const prompt = `
${BEUGRAM_KNOWLEDGE}

========================
USER QUESTION
========================

${message.trim()}

========================
INSTRUCTIONS
========================

Answer the user's question using the BeUGram knowledge provided above.

If the question is specifically about BeUGram:
- Use the provided BeUGram information.
- Do not invent BeUGram features or rules.
- If the information is not available in the knowledge, say that the information is not currently available.

Keep the answer clear, useful and reasonably concise.
`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
    });

    return res.json({
      reply: response.text
    });

  } catch (error) {

    console.error(
      'Gemini API error:',
      error?.message || error
    );

    return res.status(502).json({
      error: 'Failed to get a response from Gemini.'
    });
  }
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

  console.log(
    `BeUGram Gemini Campus Copilot server running on http://localhost:${PORT}`
  );

  console.log(
    `GEMINI_API_KEY present: ${Boolean(GEMINI_API_KEY)}`
  );

  console.log(
    'BeUGram knowledge base loaded successfully.'
  );
});