// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANYlg_u76kfIPLUmGG9ma-hFHQVGK3hEk",
  authDomain: "shk-auth.firebaseapp.com",
  projectId: "shk-auth",
  storageBucket: "shk-auth.firebasestorage.app",
  messagingSenderId: "172002703579",
  appId: "1:172002703579:web:ea4943539bcca5f70074fe",
  measurementId: "G-W6YG77Q91B"
};


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
console.log("Firebase Auth Initialized", auth);
export const googleAuthProvider = new GoogleAuthProvider()