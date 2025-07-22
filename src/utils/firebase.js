// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBQf9_8uhdSyqfPXcuoigLFqSdnu6HSXok",

    authDomain: "netflix-gpt-9d9dc.firebaseapp.com",

    projectId: "netflix-gpt-9d9dc",

    storageBucket: "netflix-gpt-9d9dc.firebasestorage.app",

    messagingSenderId: "433356532030",

    appId: "1:433356532030:web:154d1913b3685df7c0646f",

    measurementId: "G-QTMYEWBMWK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();