import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC69RJEaLdJxkoyG4XSJPtOToCeTlO-6uk",
    authDomain: "goalcoach-79e9f.firebaseapp.com",
    databaseURL: "https://goalcoach-79e9f.firebaseio.com",
    projectId: "goalcoach-79e9f",
    storageBucket: "",
    messagingSenderId: "502260299335"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');