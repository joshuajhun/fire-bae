import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAdelrMSwdEfu-RI-Mom5DJNrT8pVX8VYY",
    authDomain: "budgetly-e57bf.firebaseapp.com",
    databaseURL: "https://budgetly-e57bf.firebaseio.com",
    storageBucket: "budgetly-e57bf.appspot.com",
    messagingSenderId: "538836744372"
};

export default firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
