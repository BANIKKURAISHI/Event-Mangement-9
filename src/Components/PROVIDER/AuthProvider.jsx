import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../FireBase/Firebase.config";

 export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider()
//--------Log in with google ------------------------------------------------------------------
    const googleButton=()=>{
                return signInWithPopup(auth, googleProvider)
    }
//---------------------------registration with email and password------------------------------
const registrationButton=(email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
//---------------------------Login with email and password ------------------------------------
 const singInButton=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }
 ////--------------------------onAuth ----------------------------------------------------------
 useEffect(()=>{
     const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)})

        return()=>{unsubscribe()}
 },[])
  
//--------------------props ----------------------------------------------------------------------
    const value={user,googleButton, registrationButton,singInButton}
    return (
        <AuthContext.Provider value={value}  >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;