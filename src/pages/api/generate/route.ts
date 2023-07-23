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
      prompt: generatePrompt(topic, grade),
      temperature: 0.8,
      max_tokens:3500
    });

    response.status(200).json({ result: completion.data.choices[0].text });
  } catch (error: any) {
    console.error(error);
    response.status(500).json({ error: error.message })
  }
}

const generatePrompt=(topic:string, grade:string)=>{
  return (
    `You are a teacher preparing a lesson plan for the topic of "${topic}" for grade "${grade}".Please provide detailed explanations for the following subtopics along with estimated timestamps for each segment:

1. Introduction to the topic - [00:00 - 05:00]
    Explain the fundamental concepts and importance of "${topic}". Provide a brief overview to capture students' interest.

2. Key concepts and definitions - [05:01 - 10:00]
    Present the core ideas, definitions, and essential terms related to "${topic}". Offer clear and concise explanations to build a solid foundation.

3. Examples and applications - [10:01 - 15:00]
    Provide practical examples, use cases, and real-life applications of "${topic}". Show how these concepts are relevant and valuable in various scenarios.

4. Related exercises and practice - [15:01 - 20:00]
    Design a series of interactive exercises and practice problems to reinforce learning. Encourage students to engage actively with the material.

5. Summary and conclusion - [20:01 - 25:00]
    Summarize the main points covered in the lesson and emphasize the key takeaways. Conclude with a thought-provoking question or a call-to-action to inspire further exploration.

Please ensure that the explanations are age-appropriate and tailored to the academic level of the "${grade}" students. The more detailed and organized the lesson plan, the better prepared our assistant will be to support you effectively.
`)
}