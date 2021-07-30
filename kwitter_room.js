
 const config = {
    apiKey: "AIzaSyDkdwKlfg0yMKSMcS9ficYf5FHSCUUJk9U",
    authDomain: "aayudb-3355f.firebaseapp.com",
    databaseURL: "https://aayudb-3355f.firebaseio.com",
    projectId: "aayudb-3355f",
    storageBucket: "aayudb-3355f.appspot.com",
    messagingSenderId: "174080532775",
    appId: "1:174080532775:web:66664258347b3954814902",
    measurementId: "G-LZ5YEF4FX4"};
  firebase.initializeApp(config);
username=localStorage.getItem("user_name");
document.getElementById("Username").innerHTML="welcome "+username;
function addroom(){
  var roomname=document.getElementById=("room_name").value;
  firebase.database().ref("/").child(roomname).update({
    purpose:"adding roomname"
});
localStorage.setItem("room_name",roomname);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
