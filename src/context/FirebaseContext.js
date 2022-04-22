import { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, getDoc, doc } from "firebase/firestore";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const getDB = (dbName, dbTarget) => {
        return getDoc(doc(db, dbName, dbTarget))
    }

    const setDB = (dbName, dbTarget, dbValue) => {
        return setDoc(doc(db, dbName, dbTarget), dbValue)
    }

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        });

        return unsubscribe;
    },[])

    const value = {
        currentUser, 
        setCurrentUser,
        signup,
        signin,
        signout,
        getDB,
        setDB
    }

    return (
        <FirebaseContext.Provider value={value}>
            {!loading && children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext