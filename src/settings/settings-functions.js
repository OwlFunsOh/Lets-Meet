import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// Return to homepage
async function back_button() {
  window.location.href = "/src/homepage/homepage.html";
}
document.querySelector("#show-back").addEventListener("click", () => {
  back_button();
})

async function changeName() {
  // program
}
document.querySelector("#name-button").addEventListener("click", () => {
  changeName();
})

async function changeEmail() {
  // program
}
document.querySelector("#email-button").addEventListener("click", () => {
  changeEmail();
})

async function changePassword() {
  // program
}
document.querySelector("#password-button").addEventListener("click", () => {
  changePassword();
})




//adding pre-input of the user name and email from our database
onAuthStateChanged(auth, (user) => {
  if (user) {
    const userId = user.uid;
    const userDocRef = doc(db, "users", userId);

    getDoc(userDocRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const userName = userData.name;
        const userEmail = userData.email;

        var input = document.getElementById('name');
        var user_name = userName;
        input.value = user_name;

        var input2 = document.getElementById("email")
        var user_email = userEmail;
        input2.value = user_email;

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


//forgot password stuff
function resetPassword(){
  const email = userData.email;
  sendPasswordResetEmail(auth, email)
  .then(() => {
      alert("Password reset email sent!")
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  });
}

document.querySelector("#forgot-password").addEventListener("click", () => {
  resetPassword()
})