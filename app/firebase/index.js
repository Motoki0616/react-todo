import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBdESljHQXMD98zhMQ0v0w3OpU8FG32N7g",
        authDomain: "motoki-todo-app.firebaseapp.com",
        databaseURL: "https://motoki-todo-app.firebaseio.com",
        storageBucket: "motoki-todo-app.appspot.com",
        messagingSenderId: "229657876962"
      };

    firebase.initializeApp(config);
} catch(e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
