import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// Join a group
function joinGroup() {
  const groupcode = document.querySelector("#group-code").value

  if (groupcode.exists()){
    //join group
  } else{
    alert("Group code does not exist");
  }
}
document.querySelector("#join-button").addEventListener("click", () => {
  joinGroup();
})

// Create a group
async function createGroup() {
   const groupname = document.querySelector("#group-title").value
  if (groupname.length >= 3){
    alert("Group name is too short");
  }else if (groupnamename.length <= 20) {
    alert("Group name is too long");
  }else{
    //create group
    //join group
  }
}
document.querySelector("#create-button").addEventListener("click", () => {
  createGroup();
})

// Return to homepage
async function returnHomepage() {
  window.location.href = "/src/homepage/homepage.html";
}
document.querySelector("#show-back").addEventListener("click", () => {
  returnHomepage();
})