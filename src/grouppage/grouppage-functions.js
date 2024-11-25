import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

//function to join a group
function signIn() {
  const groupcode = document.querySelector("#group-code").value

}

// Return to homepage
async function back_button() {
  window.location.href = "/src/homepage/homepage.html";
}
document.querySelector("#show-back").addEventListener("click", () => {
  back_button();
})