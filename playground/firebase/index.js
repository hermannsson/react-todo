import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAtpWwhLynSaaDvZetJSbHmLMuQUECgxAs",
    authDomain: "ingvi-todo-app.firebaseapp.com",
    databaseURL: "https://ingvi-todo-app.firebaseio.com",
    projectId: "ingvi-todo-app",
    storageBucket: "ingvi-todo-app.appspot.com",
    messagingSenderId: "182315805360"
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
    name: 'Ingvi',
    age: 24
  }
});

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
