const firebaseConfig = {
    apiKey: "AIzaSyB1WAksyXgiG-xDELRxgjsEFUkzIOMGxBE",
    authDomain: "contact-form-edc80.firebaseapp.com",
    databaseURL: "https://contact-form-edc80-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-form-edc80",
    storageBucket: "contact-form-edc80.appspot.com",
    messagingSenderId: "895329841338",
    appId: "1:895329841338:web:eaa141865a80d4a7d4d283"
  };


document.querySelector("#con_for").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();

let fname = document.querySelector("#tfname").value;
let lname = document.querySelector("#tlname").value;
let email = document.querySelector("#tmail").value;
let phone = document.querySelector("#tphone").value;
let date = document.querySelector("#tdate").value;
let passw = document.querySelector("#tpwd").value;

  console.log(fname,lname, email,phone,date,passw);

  saveContactInfo(fname,lname, email,phone,date,passw);

  document.querySelector("#con_for").reset();
  alert('Response Submitted')
}
firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("information");

// Save infos to Firebase
function saveContactInfo(fname,lname, email,phone,date,passw) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    fname: fname,
    lname:lname,
    email: email,
    phone:phone,
    date:date,
    passw:passw
  });
}