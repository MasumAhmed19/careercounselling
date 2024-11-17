import { createContext, useState } from "react";
// firebase
// Auth

export const AuthContext = createContext()
// auth

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const authData = {
        user,
        setUser,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;