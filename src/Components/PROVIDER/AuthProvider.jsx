import { createContext } from "react";
import { PropTypes } from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../FireBase/Firebase.config";

 export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    
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

//--------------------props ----------------------------------------------------------------------
    const value={googleButton, registrationButton,singInButton}
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