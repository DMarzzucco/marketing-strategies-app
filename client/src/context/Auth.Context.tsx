import React, { ChangeEvent, createContext, useContext, useState } from "react";
import { ContextProp, StringsParams } from "../interface/interface";
import { gptResponse } from "../api/api";
import { StringsProps } from "../components/bases/date";
import axios from "axios";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

const AuthProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {

    const [dataString, setDataString] = useState<StringsParams>(StringsProps)

    const handler = (op: "submit" | "input") => async (e: React.FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>) => {
        if (op === "submit") {
            e.preventDefault()
            try {
                const result = await gptResponse(dataString.prompt)
                if (!result) {
                    setDataString(prev => ({
                        ...prev, error: "No hay respuestas del servidor"
                    }))
                }
                setDataString(prev => ({
                    ...prev,
                    strategy: result.data.result,
                    error: ""
                }))
                const timer = setTimeout(() => window.location.reload(), 500)
                return () => clearTimeout(timer)
            } catch (error: any) {
                if (axios.isAxiosError(error) && error.response) {
                    const resErr = error.response.data
                    setDataString(prev => ({
                        ...prev,
                        error: resErr.errors.map((err: any) => err.message).join(',')
                    }))
                }
            } finally {
                const timer = setTimeout(() => {
                    setDataString(prev => ({ ...prev, error: "" }))
                }, 1000);
                return () => clearTimeout(timer)
            }
        }
        const target = e.target as HTMLTextAreaElement;
        const value = target.value;
        setDataString(prev => ({ ...prev, prompt: value }))
    }
    return (
        <AuthContext.Provider value={{ handler, dataString }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error('AuthContext must be using') }
    return context;
}
