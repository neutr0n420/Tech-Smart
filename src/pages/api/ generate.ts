import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Generate the funny joke for the name: ";

const generateAction = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Run first prompt
    console.log(`API: ${basePromptPrefix}kakashi`);

    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}${req.body.userInput}`,
      temperature: 0.7,
      max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices?.[0]?.text || '';

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};

export default generateAction;
