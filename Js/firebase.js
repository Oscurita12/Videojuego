// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzBNyTBjcEaVphsLHPye-9XQ8RnQ9MFuw",
  authDomain: "thestarvingvideojuego.firebaseapp.com",
  projectId: "thestarvingvideojuego",
  storageBucket: "thestarvingvideojuego.appspot.com",
  messagingSenderId: "181797662705",
  appId: "1:181797662705:web:b087fa232914a2029e9e50",
  measurementId: "G-ZH4FPGWXDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);