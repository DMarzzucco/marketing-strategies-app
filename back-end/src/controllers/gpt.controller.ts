import { Request, Response } from "express"
import { openai } from "../config/openIA";
import { openIAConfig } from "../config/openia.config";

export const generateChat = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Your are a helpful assistant specfialize in marketing strategies." },
                { role: "user", content: prompt }
            ],
            ...openIAConfig
            // model: "gpt-4o-mini",
            // max_tokens: 500,
        });

        res.status(200).json({ result: completion.choices[0].message.content })
    } catch (error) {
        res.status(500).json({ error: `An ${error}` })
    }
}