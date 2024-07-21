import instance from "./instance"

export const gptResponse = () => {
    return instance.post('/gpt')
        .then(response => {
            return response.data
        })
        .catch((error) => {
            throw new Error(`${error}`)
        })
}