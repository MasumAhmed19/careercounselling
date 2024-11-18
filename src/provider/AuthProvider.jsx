import { createContext, useEffect, useState } from "react";
// firebase
// Auth

export const AuthContext = createContext()
// auth

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const [serviceData, setServiceData] = useState(null)

    useEffect(() => {
        fetch('/careerCounselingData.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, []);

    console.log(serviceData)

    const authData = {
        user,
        setUser,
        serviceData,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;