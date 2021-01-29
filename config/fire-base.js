import firebase from 'firebase'

const firebaseConfiguration = {
    apiKey: "AIzaSyBcxXbRb5xeeFGGNk0gM4BtYW5gDq6A1AA",
    authDomain: "fir-project-6916e.firebaseapp.com",
    databaseURL: "https://fir-project-6916e-default-rtdb.firebaseio.com",
    projectId: "fir-project-6916e",
    storageBucket: "fir-project-6916e.appspot.com",
    messagingSenderId: "981832921573",
    appId: "1:981832921573:web:8b7615590a8b67b566bf0c"
}
  
try {
    firebase.initializeApp(firebaseConfiguration);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}

const database =  firebase.database()
export default database