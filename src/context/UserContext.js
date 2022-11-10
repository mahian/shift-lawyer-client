import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../config/firebase.config';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const GithubProvider = new GithubAuthProvider();
export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, GithubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
    }, []);

    const authInfo = { signUpWithEmail, signInWithEmail, signInWithGoogle, signInWithFacebook, signInWithGithub, user, logOut, loading }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;