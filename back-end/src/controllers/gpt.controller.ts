import { Request, Response } from "express"
import { Openai, openIAConfig } from "../config";

export const generateChat = async (req: Request, res: Response) => {
    const { prompt } = req.body;

    try {
        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required" })
        }
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
        if (error.response) {
            return res.status(error.response.status).json({ errors: [{ message: error.response.data }] })
            // error.response.data
        }
        if (error.request) {
            return res.status(502).json({ errors: [{ message: "No response form OpenAI" }] })
        }
        return res.status(500).json({ errors: [{ message: `An internal server ${error}` }] })
    }
}

