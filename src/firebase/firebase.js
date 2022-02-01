// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxF7b-xL2AkMY7VnCcWBXnG8QzFQ3mxc",
  authDomain: "neumacar-1afc5.firebaseapp.com",
  projectId: "neumacar-1afc5",
  storageBucket: "neumacar-1afc5.appspot.com",
  messagingSenderId: "731625226804",
  appId: "1:731625226804:web:0851d19809ae0016d48061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app
}