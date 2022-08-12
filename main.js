// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD-Qk5OOGJnRSkU8xmqgmzcbsNtqOUBSew",

    authDomain: "nuxt-firebaseauth-cbed4.firebaseapp.com",

    projectId: "nuxt-firebaseauth-cbed4",

    storageBucket: "nuxt-firebaseauth-cbed4.appspot.com",

    messagingSenderId: "963698309433",

    appId: "1:963698309433:web:a2f727786bfe269c2090e8",

    measurementId: "G-2JN1VJLYX1",

    storageBucket: "gs://nuxt-firebaseauth-cbed4.appspot.com",

    databaseURL: "https://nuxt-firebaseauth-cbed4-default-rtdb.europe-west1.firebasedatabase.app/",

};

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


