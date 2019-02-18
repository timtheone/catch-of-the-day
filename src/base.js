import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDukgL2NtBNmIyHAU097_XQjLW1ZNbdg2g",
    authDomain: "catch-of-the-day-tim-3258d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tim-3258d.firebaseio.com",
    projectId: "catch-of-the-day-tim-3258d",
    storageBucket: "catch-of-the-day-tim-3258d.appspot.com",
    messagingSenderId: "586259322845"
});

// Firebase Realtime Database
// const base = Rebase.createClass(firebaseApp.database());

// Firebase Cloud Firestore
const fireStore = firebaseApp.firestore();
// timestampsInSnapshots will or already is a default
const settings = { timestampsInSnapshots: true };
fireStore.settings(settings);
const base = Rebase.createClass(fireStore);

export { firebaseApp };

export default base;
