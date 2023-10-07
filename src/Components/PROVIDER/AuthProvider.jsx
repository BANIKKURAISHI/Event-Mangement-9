import { createContext } from "react";


const AuthProvider = ({children}) => {
    const authContext=createContext(null)



  
    return (
        <authContext.Provider  >
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;