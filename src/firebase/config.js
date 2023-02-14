// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA53h_nc1e25Q2a5LVrMbBN91A-PM2oVfE",
    authDomain: "rj-app-1.firebaseapp.com",
    projectId: "rj-app-1",
    storageBucket: "rj-app-1.appspot.com",
    messagingSenderId: "843295719",
    appId: "1:843295719:web:69516a2eed6b4e32ee2b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()