// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq_1PqtgqabZ6b2l-g80k7wJNV__saqC4",
    authDomain: "doctor-medical-473fa.firebaseapp.com",
    projectId: "doctor-medical-473fa",
    storageBucket: "doctor-medical-473fa.appspot.com",
    messagingSenderId: "937564757255",
    appId: "1:937564757255:web:b83f1358ebbc684b2039a2",
    measurementId: "G-QX2T8F05MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;