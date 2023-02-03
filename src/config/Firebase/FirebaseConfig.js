import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/storage';
// import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAWsEbZgYePztqCpu5JyWPgbOhyyf4udyI",
    authDomain: "revents-375612.firebaseapp.com",
    projectId: "revents-375612",
    storageBucket: "revents-375612.appspot.com",
    messagingSenderId: "96556211047",
    appId: "1:96556211047:web:30083b0a62eb563424adc2",
    measurementId: "G-N12JQ0LVLR"
};

const app = initializeApp(firebaseConfig)

export default app;
