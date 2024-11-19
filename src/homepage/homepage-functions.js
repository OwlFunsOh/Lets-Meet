import { auth } from '/src/firebase.js';

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
