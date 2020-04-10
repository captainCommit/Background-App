import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDklK2oeLwNcuW1TUdt3LVnTMlpMlE90Yg",
    authDomain: "rating-machine.firebaseapp.com",
    databaseURL: "https://rating-machine.firebaseio.com",
    projectId: "rating-machine",
    storageBucket: "rating-machine.appspot.com",
    messagingSenderId: "57141101455",
    appId: "1:57141101455:web:a45be2ab525cb9d17a01fa",
    measurementId: "G-73N5Y913DG"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;