// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const PORT = process.env.PORT || 3001;
const GEMINI_MODEL = 'gemini-2.5-flash'; // change here to swap models later

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is missing in .env');
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'BEUGram Gemini Campus Copilot' });
});

app.post('/api/gemini', async (req, res) => {
  const message = req.body?.message;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server is missing Gemini configuration.' });
  }

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: message.trim(),
    });

    return res.json({ reply: response.text });
  } catch (error) {
    console.error('Gemini API error:', error?.message || error);
    return res.status(502).json({ error: 'Failed to get a response from Gemini.' });
  }
});

app.listen(PORT, () => {
  console.log(`BeUgram Gemini Campus Copilot server running on http://localhost:${PORT}`);
  console.log(`GEMINI_API_KEY present: ${Boolean(GEMINI_API_KEY)}`);
});
