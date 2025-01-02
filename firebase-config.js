// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEN8HBtZJ0l6RGOVl3Trj0439qXCuK93c",
  authDomain: "lively-bb345.firebaseapp.com",
  projectId: "lively-bb345",
  storageBucket: "lively-bb345.firebasestorage.app",
  messagingSenderId: "872299395533",
  appId: "1:872299395533:web:5b515dab372b4a0458ec84",
  measurementId: "G-WMJ3EMPP2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);