import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// Select the button by its ID
const logoutButton = document.getElementById('logout');

// Add a click event listener
logoutButton.addEventListener('click', () => {
  // You can add your logout logic here
  auth.signOut().then(() => {
    //sign out successful
    window.location.href = "/";
  }).catch((error) => {
    //an error happened
    const errorMessage = error.message;
    alert(errorMessage);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const calendarGrid = document.getElementById("calendar-grid");
});
  // Alfonso: add joined group buttons, use #group-button css


//adding greeting
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    const userDocRef = doc(db, "users", userId);

    getDoc(userDocRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const userName = userData.name;

        //display greeting
        document.getElementById("greeting").textContent = "Hello, " + userName;
      } else {
        console.log("User not found");
      }
    }).catch((error) => {
      console.error("Error getting document: ", error);
    })
  } else {
    console.log("User is not signed in");
  }
})

// Going to Add a group page
async function addgroup() {
  window.location.href = "/src/grouppage/grouppage.html";
}

document.querySelector("#add-group-button").addEventListener("click", () => {
  addgroup();
})

// Going to Settings page
async function settings() {
  window.location.href = "/src/settings/settings.html";
}

document.querySelector("#settings").addEventListener("click", () => {
  settings();
})


$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek'
    }
  });
});