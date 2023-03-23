import { initializeApp } from 'firebase/app';
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWI4uaDEKhRBw8t56CAbTEvZRqECqS3QY",
    authDomain: "react-ecommerce-db-267ae.firebaseapp.com",
    projectId: "react-ecommerce-db-267ae",
    storageBucket: "react-ecommerce-db-267ae.appspot.com",
    messagingSenderId: "133116085531",
    appId: "1:133116085531:web:d354054cea029010853fbe"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);

  //export const signInWithGoogleRedirect = () =>
    //signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);

      objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
      });

      await batch.commit();
      console.log('done');
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  }
  
  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user',  error.message);
      }
    }
  
    return userDocRef;
  };
  
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection

    // if user data exists
    // return userDocRef

};

export const signOutUser = async () => await signOut(auth);

// auth keeps track of what user are signed in right now

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}

// onAuthStateChanged will call its callback whenever the authentication state of our 
// auth singleton changes. Ex: when the user signs in or signs out, the user is authenticated
// in or out and auth state changes. 
// onAuthStateChanged gives us bak an unsubscribe function

/*
{
  Observer stream is accessed by a listener with those 3 methods:
  next: callback,
  error: errorCallback,
  complete: completeCallback
}
*/




  