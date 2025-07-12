import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    function logout() {
        setIsLogged(false);
        localStorage.removeItem('sis@biblioteca');
        location.href = '/';
    }

    useEffect(() => {
        if(localStorage.getItem('sis@biblioteca')) {
            setIsLogged(true);
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{ isLogged, setIsLogged, user, setUser, loading, setLoading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}   