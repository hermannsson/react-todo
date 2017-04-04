import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyAtpWwhLynSaaDvZetJSbHmLMuQUECgxAs",
      authDomain: "ingvi-todo-app.firebaseapp.com",
      databaseURL: "https://ingvi-todo-app.firebaseio.com",
      projectId: "ingvi-todo-app",
      storageBucket: "ingvi-todo-app.appspot.com",
      messagingSenderId: "182315805360"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
