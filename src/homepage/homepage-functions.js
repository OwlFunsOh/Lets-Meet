import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

var EVENTLIST = [];
var SCHEDULEARRAY = [];

//get calendar schedule for the user in the database
async function getScheudles(){
  for (const scheduleId of SCHEDULEARRAY) {
    const scheduleDocRef = doc(db, "schedules", scheduleId);
    const scheduleDocSnap = await getDoc(scheduleDocRef);

    if (scheduleDocSnap.exists()) {
      const scheduleData = scheduleDocSnap.data();
      EVENTLIST.push({
        title: scheduleData.title,
        start: scheduleData.start_date,
        end: scheduleData.end_date
      });
    } else {
      console.log("Schedule not found:", scheduleId);
    }
  }

  // Initialize FullCalendar after fetching all data
  $(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek'
      },
      events: EVENTLIST
    });
  });
}

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


  // Alfonso: add joined group buttons, use #group-button css


//adding greeting
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    const userDocRef = doc(db, "users", userId);

    getDoc(userDocRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        SCHEDULEARRAY = userData.schedule;
        const userName = userData.name;

        //display greeting
        document.getElementById("greeting").textContent = "Hello, " + userName;

        getScheudles();
        console.log("Schedules retrieved");
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