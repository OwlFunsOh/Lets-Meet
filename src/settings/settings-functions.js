import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { getAuth, updateProfile, onAuthStateChanged, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

var USERID = "";
var EMAIL = "";

// Return to homepage
async function back_button() {
  window.location.href = "/src/homepage/homepage.html";
}
document.querySelector("#show-back").addEventListener("click", () => {
  back_button();
})

async function changeName(name) {
  try{
    const userDocRef = doc(db, "users", USERID);
    await updateDoc(userDocRef, {
      name: name
    });
    alert("Name successfully changed.");
  } catch (error) {
      console.log("Error adding document: ", error);
  }
}
document.querySelector("#name-button").addEventListener("click", () => {
  const name = document.getElementById('name').value;
  if (name == "") {
    alert("Please enter a name");
  }else{
    changeName(name);
  }
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
    USERID = user.uid;
    const userDocRef = doc(db, "users", USERID);

    getDoc(userDocRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        const userName = userData.name;
        EMAIL = userData.email;

        var input = document.getElementById('name');
        var user_name = userName;
        input.value = user_name;

        var input2 = document.getElementById("email")
        var user_email = EMAIL;
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
  sendPasswordResetEmail(auth, EMAIL)
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