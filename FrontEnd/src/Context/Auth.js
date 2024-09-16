import { useContext, createContext } from "react";



export const AuthContext = createContext({
    AuthUser: undefined,
    setUser: (userdata) => { }
})

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
    return useContext(AuthContext);
}