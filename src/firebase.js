import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJH8taDYzM0jVlcjTZEYDqQ7KwcEZAqF4",
  authDomain: "challenge-23f4b.firebaseapp.com",
  databaseURL: "https://challenge-23f4b.firebaseio.com",
  projectId: "challenge-23f4b",
  storageBucket: "challenge-23f4b.appspot.com",
  messagingSenderId: "479246942110",
  appId: "1:479246942110:web:27580217273ec08f73608f",
  measurementId: "G-ZRQQ13CBZT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
