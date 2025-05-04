// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDE4lHDKiyLqeLThDwRhFKlnOdvsu7wVRg",
    authDomain: "thedragonnews-a0035.firebaseapp.com",
    projectId: "thedragonnews-a0035",
    storageBucket: "thedragonnews-a0035.firebasestorage.app",
    messagingSenderId: "589202836777",
    appId: "1:589202836777:web:e1c3e00058bae0224dbb38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;