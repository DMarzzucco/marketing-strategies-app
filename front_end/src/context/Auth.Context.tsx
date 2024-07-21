import React, { ChangeEvent, createContext, useContext, useState } from "react";
import { ContextProp, ProviderProps, StringsParams } from "../interface/interface";
import { gptResponse } from "../api/api";
import { StringsProps } from "../components/bases/date";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error(`${Error}`) }
    return context;
}
const AuthProvider: React.FC<ProviderProps> = ({ children }) => {

    const [dataString, setDataString] = useState<StringsParams>(StringsProps)

    const handler = (op: "submit" | "input") => async (e: React.FormEvent<HTMLFormElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (op === "submit") {
            e.preventDefault()
            try {
                const response = await gptResponse()
                if (!response) {
                    console.log("no hay respuesta del servidor")
                    setDataString (prev => ({
                        ...prev,
                        error: prev.error = "No hay respuestas del servidor"
                    }))
                }
                if (response.status === 400){
                    setDataString(prev => ({
                        ...prev,
                        error:prev.error = `${prev} error en el modelo `
                    }))
                }
                setDataString(prev => ({
                    ...prev,
                    strategy: prev.strategy = response.data.result,
                    error: prev.error = ""
                }))
            } catch (error) {
                setDataString(prev => ({
                    ...prev,
                    error: prev.error = "Error generatiing marketin strategy"
                }))
            }
            return null;
        }
        const target = e.target as HTMLTextAreaElement;
        const value = target.value;
        setDataString(prev => ({
            ...prev,
            prompt: prev.prompt = value
        }))
    }
    return (
        <AuthContext.Provider value={{ handler, dataString }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;