// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzj95_sUS5F1P-ISfBbMmodxmeoIjFPRY",
    authDomain: "wildverse-clientside-c92cf.firebaseapp.com",
    projectId: "wildverse-clientside-c92cf",
    storageBucket: "wildverse-clientside-c92cf.appspot.com",
    messagingSenderId: "627537343585",
    appId: "1:627537343585:web:e86559fc802c29a1b56620"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;