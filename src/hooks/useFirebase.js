import { getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged,updateProfile,GoogleAuthProvider , signInWithPopup   } from "firebase/auth";
import { useEffect, useState } from "react";

import authInit from "../firebase/firebase.init";

authInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    const signUpWithPass = () => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
        
    }

    const signInWithPass = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password) 
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName:name
        })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth,user => {
            if(user) {
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed ;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(error => console.error(error.message))
        .finally(() => setIsLoading(false))
    }

    return {
    signUpWithPass, setEmail, setPassword, user, logOut, signInWithPass,setName, updateUserName,googleSignIn,setIsLoading,isLoading
}

}

export default useFirebase