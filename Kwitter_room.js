var firebaseConfig = {
    apiKey: "AIzaSyCsxU9v_TckSaMhX1gK_YP_yCPGKK6iE18",
    authDomain: "project94-2ad4f.firebaseapp.com",
    databaseURL: "https://project94-2ad4f-default-rtdb.firebaseio.com",
    projectId: "project94-2ad4f",
    storageBucket: "project94-2ad4f.appspot.com",
    messagingSenderId: "819045812116",
    appId: "1:819045812116:web:e4c916633df433e9417181",
    measurementId: "G-HRSH2BM9EY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = document.getElementById("user_name").value;
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "Kwitter_page.html";
}
  
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
  
  

//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Kwitter_page.html";
}

