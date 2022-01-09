//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYgPxKv3f0jSVg4vMOLHJBzevjcK0pqnU",
    authDomain: "kwitter-44e84.firebaseapp.com",
    projectId: "kwitter-44e84",
    storageBucket: "kwitter-44e84.appspot.com",
    messagingSenderId: "269666749561",
    appId: "1:269666749561:web:1561f2ba648a577dcf98a8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
