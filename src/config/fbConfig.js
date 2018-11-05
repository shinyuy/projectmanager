import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAzH3db0Ky4bqq19KON4IoSbIaFHT05C_s",
    authDomain: "projectmanager-d2db4.firebaseapp.com",
    databaseURL: "https://projectmanager-d2db4.firebaseio.com",
    projectId: "projectmanager-d2db4",
    storageBucket: "projectmanager-d2db4.appspot.com",
    messagingSenderId: "625692349590"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;