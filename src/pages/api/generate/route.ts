import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export default async function POST(req: Request) {
  if (!config.apiKey) {
    return new Response('OpenAI API key is not configured', { status: 500 });
  }

  const body = await req.json();
  const topic = body.topic
  const grade = body.grade

  if (!topic || !grade) {
    return new Response('Please enter valid topic and grade.', { status: 422 })
  }
}
