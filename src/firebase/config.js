import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA-c_uwBDzitPTPc8oKl_DpUrdCdb0WgvM",
    authDomain: "rozgaarr-458c5.firebaseapp.com",
    databaseURL: "https://rozgaarr-458c5-default-rtdb.firebaseio.com",
    projectId: "rozgaarr-458c5",
    storageBucket: "rozgaarr-458c5.appspot.com",
    messagingSenderId: "1014051016979",
    appId: "1:1014051016979:web:8da49b5259e9feb62c0ae6"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();

