import axios from "axios"
import instance from "./instance"

export const gptResponse = (prompt:string) => {
    return instance.post('/gpt',{prompt})
        .then(response => {
            return response.data
        })
        .catch((error) => {
            if (axios.isAxiosError(error) && error.response){
                const resError = error.response.data
                throw {response: {data:resError, status:error.response.status}}
            }
            throw new Error(`${error}`)
        })
}