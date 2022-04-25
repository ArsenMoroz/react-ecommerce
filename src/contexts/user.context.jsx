import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

//actual value that you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};


    useEffect( () =>{
        // Centralized sign out and sign in into the Listener callback
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        // The moment that the listener mounts it will check the authentication state 
        // automatically when you initializa the listener
        // The moment you initialize it it will run the callback once.
        // Any future runs of this callback will be directly tied to the changes in auth state

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}