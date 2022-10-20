import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app =firebase.initializeApp({
    apiKey: "AIzaSyAyyKTejN1mJMadUNQRS0Wwo_TjSLwypis",
    authDomain: "auth-dev-c8cfc.firebaseapp.com",
    projectId: "auth-dev-c8cfc",
    storageBucket: "auth-dev-c8cfc.appspot.com",
    messagingSenderId: "975605683888",
    appId: "1:975605683888:web:72329e98c2fd4c08f44d75"
})
export const auth = app.auth()
export default app