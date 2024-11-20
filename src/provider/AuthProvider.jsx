import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, updateProfile } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            setUser(user);
            alert("Google login successful:", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Google login failed:", errorCode, errorMessage);
          });
      };
      
      const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
      }

    console.log(user)


    const [serviceData, setServiceData] = useState(null)

    useEffect(() => {
        fetch('/careerCounselingData.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, []);

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

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

    }

    // observer
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });

        return ()=>{
            unsubscribe()
        }
    }, []) 

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;