import { Configuration, OpenAIApi } from "openai";
import { validateInput } from "../lib/validators";
import { formatCSV } from "../lib/csvFormatter";
import { CRS_API_URL, CRS_API_KEY } from "../lib/constants";
import axios from "axios";

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}));

const client = axios.create({
  baseURL: CRS_API_URL,
  headers: { Authorization: Bearer  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  try {
    const { prompt, format } = req.body;
    validateInput(prompt);

    const raw = (await client.post('/query', { query: prompt })).data;
    const chat = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });
    const result = chat.data.choices[0].message.content;

    if (format -eq "csv") {
      return res.status(200).send(formatCSV(result));
    }
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
