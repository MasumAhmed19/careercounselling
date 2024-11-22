import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const loginGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                alert("Google login successful!");
            })
            .catch((error) => {
                alert(`Google login failed: ${error.message}`);
            })
    };

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // update data
    const updateUserProfileData = (updatedData) => {

        return updateProfile(auth.currentUser, updatedData)
        .then(() => {
            setUser((prevUser) => ({
                ...prevUser,
                ...updatedData,
            }));
        });
    };

    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        fetch("/careerCounselingData.json")
            .then((res) => {
                // if (!res.ok) throw new Error("Failed to load data");
                return res.json();
            })
            .then((data) => setServiceData(data))
            .catch((error) => {
                alert("Failed to fetch service data");
                console.error(error);
            });
    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        user,
        setUser,
        serviceData,
        createNewUser,
        logOut,
        userLogin,
        loginGoogle,
        loading,
        updateUserProfile,
        updateUserProfileData,
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
