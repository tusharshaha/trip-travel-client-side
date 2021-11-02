import { useEffect, useState } from 'react'
import initializeFirebase from "../Firebase/firebase.init"
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut,onAuthStateChanged } from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        setIsLoading(false)
    }, [auth])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        }).finally(()=> setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        googleSignIn,
        logOut
    }
}
export default useFirebase;