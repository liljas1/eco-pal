import firebase from 'firebase/app';
import 'firebase/database';

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBOYoM5jiObmEOT3qVepAUxqeP6r3-YeWU",
    authDomain: "eco-pal.firebaseapp.com",
    databaseURL: "https://eco-pal.firebaseio.com",
    projectId: "eco-pal",
    storageBucket: "eco-pal.appspot.com",
    messagingSenderId: "894217536709",
    appId: "1:894217536709:web:1fbb8a574cc3e6ab4c9cac",
    measurementId: "G-KCWE176Z13"
  })
  .database()

  // export const addressRef = db.ref('addresses')
  export const markerRef = db.ref('markers')