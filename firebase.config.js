
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaj9ogczw0xEGZPlKnsZ9Y26tuSVIfh7o",
    authDomain: "inventory-app-9192f.firebaseapp.com",
    projectId: "inventory-app-9192f",
    storageBucket: "inventory-app-9192f.appspot.com",
    messagingSenderId: "544471089045",
    appId: "1:544471089045:web:38328225edcfb1e292009c",
    measurementId: "G-N632435NJY"
};

// Initialize Firebase
export const APP = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(APP);
export const STORAGE = getStorage(APP);
export const AUTH = getAuth(APP);

export const analytics = getAnalytics(APP);