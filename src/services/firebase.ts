import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAlXAJaT7vUe8JrcA-ZzjoZqopTt_TlwF0",
    authDomain: "cursoinstar.firebaseapp.com",
    databaseURL: "https://cursoinstar.firebaseio.com",
    projectId: "cursoinstar",
    storageBucket: "cursoinstar.appspot.com",
    messagingSenderId: "737469640065",
    appId: "1:737469640065:web:98e70b2e71368f614fcc80",
    measurementId: "G-GFBG0F30N2"
};
// Initialize Firebase
firebase.initializeApp( config );

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();