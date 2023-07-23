import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

interface RequestBody {
  topic: string;
  grade: string;
}

export default async function handler(request: any , response: any) {
  const { topic, grade } = request.body as RequestBody;

  if (!config.apiKey) {
    return { error: "OpenAI API key is not configured" };
  }

  if (!topic || !grade) {
    return { error: "Please enter valid topic and grade." };
  }

  try {
    const completion: any = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `make summary notes for the teacher of ${topic} for the grade of ${grade}, with the time stamp`,
      temperature: 0.8,
      max_tokens:1000
    });

    response.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    console.error(error);
    response.status(500).json({ error: error.message })
  }
}