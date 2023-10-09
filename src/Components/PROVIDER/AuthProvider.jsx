import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../FireBase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  //--------Log in with google ------------------------------------------------------------------
  const googleButton = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //---------------------------registration with email and password------------------------------
  const registrationButton = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //---------------------------Login with email and password ------------------------------------
  const singInButton = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  ////--------------------------onAuth ----------------------------------------------------------
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    
    return () => {
      unSubscribe();
    };
  }, []);
  ///-----------------------logout ---------------------------------------------------------------
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //--------------------props ----------------------------------------------------------------------
  const value = {
    user,
    googleButton,
    registrationButton,
    singInButton,
    logOut,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
