import { Request, Response } from "express"
import { Openai, openIAConfig } from "../config";

export const generateChat = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    try {
        const completion = await Openai.chat.completions.create({
            messages: [
                { role: "system", content: "Your are a helpful assistant specfialize in marketing strategies." },
                { role: "user", content: prompt }
            ],
            ...openIAConfig
        });
        return res.status(200).json({ result: completion.choices[0].message.content })

    } catch (error: any) {
        console.error(`Full ${error}`)
        return res.status(500).json({ error: `An internal server ${error}` })
    }
}