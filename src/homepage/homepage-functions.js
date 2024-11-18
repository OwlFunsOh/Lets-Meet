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
  const calendarGrid = document.getElementById('calendar-grid');

  const rows = 5;
  const cols = 7;

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-column');
    
    for (let row = 0; row < rows; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('grid-item');
      rowDiv.textContent = 'Row ${row + 1}';
      column.appendChild(rowDiv);
    }
    calendarGrid.appendChild(column);
  }
});