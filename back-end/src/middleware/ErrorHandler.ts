import { Request, Response, NextFunction } from "express"

export const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
    if (err){
        console.error(err.stack)
        return res.status(500).json({ error: `An internal server error: ${err}` })    
    }
    return next()
}