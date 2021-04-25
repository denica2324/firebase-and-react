import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCnrR4Yy0bXrJ94yNmI1UODJbiT9sPtbI0",
    authDomain: "login-7ace1.firebaseapp.com",
    databaseURL: "https://login-7ace1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "login-7ace1",
    storageBucket: "login-7ace1.appspot.com",
    messagingSenderId: "950362401203",
    appId: "1:950362401203:web:a9b614a1bd100b074743c6"
};

firebase.initializeApp(firebaseConfig);
export default firebase;