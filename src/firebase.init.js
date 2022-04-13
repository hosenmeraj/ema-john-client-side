// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBc4yl6fAvvCxn6d0Ui5MFGLG1noCpwx0M",
    authDomain: "ema-jon-firebase-auth.firebaseapp.com",
    projectId: "ema-jon-firebase-auth",
    storageBucket: "ema-jon-firebase-auth.appspot.com",
    messagingSenderId: "158950239386",
    appId: "1:158950239386:web:003b5603f0ab4780bc8323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;