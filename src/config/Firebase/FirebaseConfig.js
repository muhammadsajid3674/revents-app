import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAWsEbZgYePztqCpu5JyWPgbOhyyf4udyI",
    authDomain: "revents-375612.firebaseapp.com",
    projectId: "revents-375612",
    storageBucket: "revents-375612.appspot.com",
    messagingSenderId: "96556211047",
    appId: "1:96556211047:web:30083b0a62eb563424adc2",
    measurementId: "G-N12JQ0LVLR"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase;
