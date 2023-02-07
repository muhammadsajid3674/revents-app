import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDK06WosBgEz2l983QCiWUkSwskaF5jpnA",
    authDomain: "revents-d91d4.firebaseapp.com",
    projectId: "revents-d91d4",
    storageBucket: "revents-d91d4.appspot.com",
    messagingSenderId: "832651898441",
    appId: "1:832651898441:web:fde03caf57af7716ec5998",
    measurementId: "G-X8B3KW3TM4"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase;
