// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAnw9xWGB-vbTNCd5xFTYP9kkdGYaqc40",
    authDomain: "pantry-management-app-8bf87.firebaseapp.com",
    projectId: "pantry-management-app-8bf87",
    storageBucket: "pantry-management-app-8bf87.appspot.com",
    messagingSenderId: "442077395156",
    appId: "1:442077395156:web:10febad527494aa0482341",
    measurementId: "G-WFYB7JGW5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase Analytics if it's required and available
let analytics;
if (typeof window !== "undefined") {  // Ensures Analytics is only initialized client-side
  analytics = getAnalytics(app);
}

// Export the Firebase app and any services that might be used externally
export { app, db, auth, analytics };
