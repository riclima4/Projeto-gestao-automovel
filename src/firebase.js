// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRrySKI8GjQuzxWpjbnjr41LOOWkabG3M",
    authDomain: "fir-carctrl.firebaseapp.com",
    projectId: "fir-carctrl",
    storageBucket: "fir-carctrl.appspot.com",
    messagingSenderId: "278644957498",
    appId: "1:278644957498:web:687999382267a16d913003",
    measurementId: "G-PHR7JPGVXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app