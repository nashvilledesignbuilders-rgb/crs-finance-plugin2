# CRS Finance Plugin

Serverless ChatGPT plugin to fetch CRS tax records, summarize via GPT-4, and export as CSV or JSON.

## Setup

1. Clone or import this repo.
2. Add env vars in Vercel:
   - OPENAI_API_KEY
   - CRS_API_KEY
3. Deploy on Vercel.
4. Register plugin in ChatGPT using ai-plugin.json.

## Usage

POST to /api/generateReport with:
\\\json
{
  "prompt": "Generate a Profit and Loss report for Q2 2025",
  "format": "csv"
}
\\\
