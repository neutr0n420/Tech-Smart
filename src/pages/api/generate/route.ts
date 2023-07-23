import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// export const runtime = "edge"
const openai = new OpenAIApi(config);

export default async function POST(req: Request) {
  if (!config.apiKey) {
    return new Response("OpenAI API key is not configured", { status: 500 });
  }

  const body = await req.json();
  const topic: string = body.topic;
  const grade: string = body.grade;

  if (!topic || !grade) {
    return new Response("Please enter valid topic and grade.", { status: 422 });
  }
  try {
    const completion:any = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:`make summary notes for the teacher of ${topic} for the grade of ${grade}, with the time stamp`,  
      temperature: 0.8,
    });
    console.log("Hello from completion expression")
    return new Response(completion, { status: 200 });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}

// const generatePrompt:Function = (topic: string, grade: string) => {
//   return `Make summary notes for the teacher of ${topic} for the grade of ${grade}, with the time stamp.`;
// };
