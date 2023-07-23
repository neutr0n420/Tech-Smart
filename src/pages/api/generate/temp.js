import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export default async function (req, res){
  if(!config.apiKey){
    res.status(500).json({
      error: "Open API key is not configured"
    })
    return
  }
  const topic = req.body.topic || " "
  const grade = req.body.grade || ""
  if(topic == "" || grade == ""){
    res.status(400).json({
      error: "Please enter the valid topic/grade"
    })
    return
  }
  try{
    const completion = openai.createChatCompletion({
      model: "text-davinci-300",
      prompt: generatePrompt(topic, grade),
      temperature:1 
    });
    console.log(completion)
   res.status(200).json({completion}) 
    
  }catch(error){
    console.log(error)
  }
}

const generatePrompt=(topic, grade) =>{
  return `Write the summary notes for the teacher for the topic of ${topic} for the grade of ${grade} to teach in the class.`
}