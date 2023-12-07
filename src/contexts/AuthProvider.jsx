import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { Navigate } from 'react-router-dom';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(false);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        
      
    }

    const signUpWithGmail = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider)
    }

    const login = (email,password) => {
        // setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        // setLoading(false);
       return signOut(auth);
    }

    const updateuserProfile = (name,photoURL) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
             setUser(currentUser);
             setLoading(false);
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
          });
          return ()=>{
            return unsubscribe();
          }
    },[])
    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateuserProfile,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider