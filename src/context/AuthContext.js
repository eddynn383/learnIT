import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [currentRole, setCurrentRole] = useState(null)

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
        signup,
        signin,
        signout,
        setCurrentRole,
        currentRole
    }
    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthContext
