import { body } from "express-validator"
export const validatePromt = [
    body('prompt')
        .if(body('prompt').exists())
        .isString().withMessage('Prompt must be a string')
        .notEmpty().withMessage('Prompt cannot be empty')
        .trim()
        .escape()
        .isLength({ min: 5, max: 500 }).withMessage('Prompt must be between and 500 characters')
]