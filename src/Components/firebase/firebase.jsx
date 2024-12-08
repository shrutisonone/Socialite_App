 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDSvy7e-boGcYM0YJ3gUdZT7n-MVqx-Sqg",
    authDomain: "socialite-29673.firebaseapp.com",
    projectId: "socialite-29673",
    storageBucket: "socialite-29673.firebasestorage.app",
    messagingSenderId: "242738334097",
    appId: "1:242738334097:web:654dea8e1db7baa4f4f230",
    measurementId: "G-92FBEXNXSL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
