import { Request, Response } from "express"
import OpenAI from "openai"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateChat = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "Your are a helpful assistant specfialize in marketing strategies." }, { role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
            max_tokens: 500,
        });

        res.status(200).json({ result: completion.choices[0].message.content })
    } catch (error) {
        res.status(500).json({ error: `An ${error}` })
    }
}
