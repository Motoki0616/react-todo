import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBdESljHQXMD98zhMQ0v0w3OpU8FG32N7g",
    authDomain: "motoki-todo-app.firebaseapp.com",
    databaseURL: "https://motoki-todo-app.firebaseio.com",
    storageBucket: "motoki-todo-app.appspot.com",
    messagingSenderId: "229657876962"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Motoki',
        age: 25
    }
});

// firebaseRef.update({
//     isRunning: false,
//     'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//     name: 'Todo Application'
// });

// firebaseRef.child('app').once('value').then((snapshot)=>{
//     console.log('Got entire database',snapshot.val());
// },(e)=>{
//     console.log('unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot)=>{
//     console.log('Got value', snapshot.val());
// });

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});
todosRef.push({
    text: 'Todo 2'
});
