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

var ReservationDB = firebase.database().ref("Reservations")

document.getElementById('reservationForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault(); 

  var name = document.getElementById('name').value
  var vehicletype = document.getElementById('vehicletype').value
  var pickup = document.getElementById('pickup').value
  var dropoff = document.getElementById('dropoff').value
  var extension = document.getElementById('extension').value

// console.log(name, vehicletype, pickup, dropoff, extension); 
}

