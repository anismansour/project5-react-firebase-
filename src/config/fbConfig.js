import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-jQsD29VgU5GwzRvqs7O-zfepm32KvO8",
  authDomain: "project5ga.firebaseapp.com",
  databaseURL: "https://project5ga.firebaseio.com",
  projectId: "project5ga",
  storageBucket: "project5ga.appspot.com",
  messagingSenderId: "926436259013",
  appId: "1:926436259013:web:688843cf91a765d2"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fire, db };
