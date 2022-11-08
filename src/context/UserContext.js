import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const signUpWithEmail = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const authInfo = {signUpWithEmail}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;