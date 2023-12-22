import  { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile } from "firebase/auth";
import { auth } from '../firebase-config';
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
   
    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // signin user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // to sign out user
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
    setLoading(false)
       });
        return () => {
            unSubscribe()
        }
    }, [])


    const authentication = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;