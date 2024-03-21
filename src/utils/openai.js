import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_SECRET
});

delete configuration.baseOptions.headers["User-Agent"];
const openai = new OpenAIApi(configuration);

export const generateMessage = async (prompt) => {
  const response = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p:1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.data.choices[0].text;

};
    


