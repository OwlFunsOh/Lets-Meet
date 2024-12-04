import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

var EVENTLIST = [];
var SCHEDULEARRAY = [];
var USERID = "";

function showHomepage(){
  document.querySelector("#calendar-container").classList.add("show");
  document.querySelector("#groups-container").classList.add("show");
  document.querySelector("#greeting").classList.add("show");
  document.querySelector("#logout").classList.add("show");
  document.querySelector("#event-popup").classList.add("hide");
  document.querySelector("#event-popup").classList.remove("show");
}

function showPopup(){
  document.querySelector("#calendar-container").classList.remove("show");
  document.querySelector("#groups-container").classList.remove("show");
  document.querySelector("#greeting").classList.remove("show");
  document.querySelector("#logout").classList.remove("show");
  document.querySelector("#event-popup").classList.remove("hide");

  document.querySelector("#calendar-container").classList.add("fade");
  document.querySelector("#groups-container").classList.add("fade");
  document.querySelector("#greeting").classList.add("fade");
  document.querySelector("#logout").classList.add("fade");
  document.querySelector("#event-popup").classList.add("show");
}

//get calendar schedule for the user in the database
async function getSchedules(){
  if(SCHEDULEARRAY[0] != ""){
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
    USERID = user.uid;
    const userDocRef = doc(db, "users", USERID);

    getDoc(userDocRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        SCHEDULEARRAY = userData.schedule;
        const userName = userData.name;

        //display greeting
        document.getElementById("greeting").textContent = "Hello, " + userName;

        getSchedules();
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

  showHomepage();
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

document.querySelector("#add-event-button").addEventListener("click", () => {
  showPopup();
})

document.getElementById('add-event-button').addEventListener('click', () => {
  document.getElementById('event-popup').style.display = 'block';
})

document.getElementById('to-homepage').addEventListener('click', () => {
  showHomepage();
})

document.getElementById('add-event').addEventListener('click', () => {
  const eventName = document.getElementById('event-name');
  const eventStart = document.getElementById('start-date-time');
  const eventEnd = document.getElementById('end-date-time');

  register_schedule_to_db(eventName.value, eventStart.value, eventEnd.value);
})


async function register_schedule_to_db(eventName, eventStart, eventEnd) {
  var docRef;
  try{
      docRef = await addDoc(collection(db, "schedules"), {
          start_date: eventStart,
          end_date: eventEnd,
          title: eventName
      });
      console.log("Document written to schedules with ID: ", docRef.id);
  } catch (error) {
      console.log("Error adding document: ", error);
  }

  //update the array
  try{
      const userDocRef = doc(db, "users", USERID);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const scheduleField = userData["schedule"];

          if(scheduleField[0] == ""){
            //append document
            await updateDoc(userDocRef, {
              ["schedule"]: arrayUnion(docRef.id)
            });
            
            //remove first document
            await updateDoc(userDocRef, {
              ["schedule"]: arrayRemove(scheduleField[0])
            });
            console.log("schedule replaced")
          }else{
            //append new element
            await updateDoc(userDocRef, {
              ["schedule"]: arrayUnion(docRef.id)
            });
            console.log("schedule appended")
          }
          //alert the user that the schedule has been added
          alert("Schedule added to your calendar!");
          window.location.href = "/src/homepage/homepage.html";
      }
      
  } catch (error) {
      console.log("Error updating document: ", error);
  }

  //check if the first element is empty
}

