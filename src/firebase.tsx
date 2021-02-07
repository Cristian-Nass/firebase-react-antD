import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOJgkbpTyG5unaIbnm1FCRG5moU9tp0yU",
    authDomain: "react-firbase-b6937.firebaseapp.com",
    projectId: "react-firbase-b6937",
    storageBucket: "react-firbase-b6937.appspot.com",
    messagingSenderId: "751696633184",
    appId: "1:751696633184:web:406eee94c4b8ed2c0ad205"
});

export const db = firebaseApp.firestore();