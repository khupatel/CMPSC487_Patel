const firebaseConfig = {
    apiKey: "AIzaSyDVxKbhPpruILcuIBXE5K0FFZsVcieTH-s",
    authDomain: "cmpsc487-assignment1.firebaseapp.com",
    databaseURL: "https://cmpsc487-assignment1-default-rtdb.firebaseio.com",
    projectId: "cmpsc487-assignment1",
    storageBucket: "cmpsc487-assignment1.appspot.com",
    messagingSenderId: "1085370581836",
    appId: "1:1085370581836:web:e56f95ca5e66c1a5ce85e9"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

database.ref("Reservations").once('value', function(snapshot){
  if(snapshot.exists()){
    console.log("trying to print"); 
      var content = '';
      snapshot.forEach(function(data){
          var val = data.val();
          content +='<tr>';
          content += '<td>' + val.name + '</td>';
          content += '<td>' + val.vehicletype + '</td>';
          content += '<td>' + val.pickup + '</td>';
          content += '<td>' + val.dropoff + '</td>';
          content += '<td>' + val.extension + '</td>';
          content += '</tr>';
      });
     
      document.getElementById('reservationTable').innerHTML += content;
  }
});
