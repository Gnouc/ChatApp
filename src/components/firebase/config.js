import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRsySpveKdvLTJvSiyeNyKg6aRBqqw-AY",
    authDomain: "chatapp-833f7.firebaseapp.com",
    projectId: "chatapp-833f7",
    storageBucket: "chatapp-833f7.appspot.com",
    messagingSenderId: "86233585584",
    appId: "1:86233585584:web:f155c7fcc2ecd50fbda875",
    measurementId: "G-S93VS1EX7C"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
// export const db = firebase.database(app);
export {db}
export const authentication = getAuth(app)