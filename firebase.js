import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmGrbYjkHZQGMI61EIhsTlIqR1qrebiwg",
    authDomain: "chatreactnative-eb87f.firebaseapp.com",
    projectId: "chatreactnative-eb87f",
    storageBucket: "chatreactnative-eb87f.appspot.com",
    messagingSenderId: "971667743297",
    appId: "1:971667743297:web:56be7e8bf7c4a6d26e5cc0"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);

} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };