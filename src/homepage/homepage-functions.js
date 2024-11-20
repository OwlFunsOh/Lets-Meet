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

  // Alfonso: add joined group buttons, use #group-button css



  // Specify the number of rows and columns
  const rows = 8; // Number of rows
  const cols = 7; // Number of columns

  // Populate the grid dynamically
  for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item"); // Add class for styling
    switch (i) {
      case 0:
        gridItem.textContent = "Sunday"
        break;
      case 1:
        gridItem.textContent = "Monday";
        break;
      case 2:
        gridItem.textContent = "Tuesday";
        break;
      case 3:
        gridItem.textContent = "Wednesday";
        break;
      case 4:
        gridItem.textContent = "Thursday";
        break;
      case 5:
        gridItem.textContent = "Friday";
        break;
      case 6:
        gridItem.textContent = "Saturday";
        break;
      default:
        gridItem.textContent = `Item ${i + 1}`; // Optional: Add text to each cell
        break;
    }
    calendarGrid.appendChild(gridItem); // Append the cell to the grid container
  }
});

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

