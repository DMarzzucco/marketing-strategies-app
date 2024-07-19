import React, { createContext, useContext } from "react";
export interface ContextProp {
    user?: string;
}
export interface ProviderProps { children: JSX.Element }
export const AuthContext = createContext<ContextProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) { throw new Error(`${Error}`) }
    return context;
}
const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    return (<AuthContext.Provider value={{}}>{children}</AuthContext.Provider>)
}
export default AuthProvider;