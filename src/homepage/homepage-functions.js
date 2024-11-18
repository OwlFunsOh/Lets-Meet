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
    gridItem.textContent = `Item ${i + 1}`; // Optional: Add text to each cell
    calendarGrid.appendChild(gridItem); // Append the cell to the grid container
  }
});
