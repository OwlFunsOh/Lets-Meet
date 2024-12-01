import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// Join a group
function joinGroup() {
  const groupcode = document.querySelector("#group-code").value

  // program
}
document.querySelector("#join-button").addEventListener("click", () => {
  joinGroup();
})

// Create a group
async function createGroup() {
   // program
  
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