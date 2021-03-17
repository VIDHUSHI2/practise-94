var firebaseConfig = {
    apiKey: "AIzaSyCmPFJMLW3-kXnbsYRQQnfOBq_gtNSxOGA",
    authDomain: "kwitter-37070.firebaseapp.com",
    databaseURL: "https://kwitter-37070-default-rtdb.firebaseio.com",
    projectId: "kwitter-37070",
    storageBucket: "kwitter-37070.appspot.com",
    messagingSenderId: "638548907409",
    appId: "1:638548907409:web:4a70e293ad396b57cc3630"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});

}