import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCJFPdwCVWsJI1CUfWkcXTZAqfmH7aYgoM",
    authDomain: "t-service-5642f.firebaseapp.com",
    databaseURL: "https://t-service-5642f.firebaseio.com",
    projectId: "t-service-5642f",
    storageBucket: "t-service-5642f.appspot.com",
    messagingSenderId: "680282860419",
    appId: "1:680282860419:web:4a34ae6915b5163f17e4b6",
    measurementId: "G-ZMEWC6G6DE"
  };
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();