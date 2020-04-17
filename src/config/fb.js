import firebase from 'firebase'
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyC2CV-Jx-kV4z99iu7GyyPSO58JdgyEsck",
    authDomain: "project-i-d1f64.firebaseapp.com",
    databaseURL: "https://project-i-d1f64.firebaseio.com",
    projectId: "project-i-d1f64",
    storageBucket: "project-i-d1f64.appspot.com",
    messagingSenderId: "1027131702150",
    appId: "1:1027131702150:web:36ce48c91ccfa066854a07",
    measurementId: "G-J93ZWZFLW4"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);