import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    
    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}   