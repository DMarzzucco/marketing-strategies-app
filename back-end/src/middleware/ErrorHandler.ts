import { Request, Response } from "express"

export const errorHandler = (err: any, _req: Request, res: Response,) => {
    console.error(err.stack)
    if (err.response) {
        const { status, data } = err.response;
        switch (status) {
            case 429:
                return res.status(429).json({ message: "cuota expirada" })
            case 404:
                return res.status(429).json({ message: "modelo no encontrado" })
            default:
                return res.status(status).json({ message: `${data.error.message || 'Uknow error'}` })
        }
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({ error: `Validation error ${err.message}` })
    }
    if (err.name === "NotFoundError") {
        return res.status(404).json({ error: 'Resource not found' })
    }

    return res.status(500).json({ error: `An internal error ${err.message || 'Uknown error'}` })
}