import { createContext, useState } from "react";

export const LoginContext= createContext()

export function LoginContextProvider({children}){
    const [loginText, setLoginText] = useState("로그인!")
    
    return <LoginContext.Provider value={{
        loginText,
        setLoginText
    }}>{children}</LoginContext.Provider>
}