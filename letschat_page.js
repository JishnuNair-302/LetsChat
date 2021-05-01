var firebaseConfig = {
    apiKey: "AIzaSyBUTWPsdhUaCmQTT_0DN0wiWDxD8vFngeY",
    authDomain: "letschat-9d1a2.firebaseapp.com",
    databaseURL: "https://letschat-9d1a2.firebaseio.com",
    projectId: "letschat-9d1a2",
    storageBucket: "letschat-9d1a2.appspot.com",
    messagingSenderId: "1056534532095",
    appId: "1:1056534532095:web:e4eb28b27580978314e1ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code 
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name']
message=message_data['message'];    
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4>"+message;+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(with.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
    } });  }); }
getData();
function updateLike(message_id)
{
console.log("clicked on like button-"+message_id)
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}