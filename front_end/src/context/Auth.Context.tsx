import React, { ChangeEvent, createContext, useContext } from "react";
import { ContextProp, ProviderProps } from "../interface/interface";

export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error(`${Error}`) }
    return context;
}
const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.value
    }
    const handler = (op: "submit" | "input") => (e: React.FormEvent<HTMLFormElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (op === "submit") {
            e.preventDefault()
            return null;
        }
        const target = e.target as HTMLTextAreaElement;
        const value = target.value;
        return value
    }
    return (
        <AuthContext.Provider value={{ handleInput, handleSubmit, handler }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;