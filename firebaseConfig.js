// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJra6aeC_Rh_oebzx-tadAp2BGD_59CC8",
  authDomain: "hitonoteproject.firebaseapp.com",
  projectId: "hitonoteproject",
  storageBucket: "hitonoteproject.appspot.com",
  messagingSenderId: "914293173594",
  appId: "1:914293173594:web:ac4725292a11151b4d5763",
  measurementId: "G-RHY11FJK8L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
