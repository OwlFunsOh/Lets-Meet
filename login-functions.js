import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'

import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    //insert secrets here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Sign up page when you hit Sign up button
document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
})

function showRegistration(){
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
}

//Return to Sign in page when Sign in is hit on the sign up page
document.querySelector("#back").addEventListener("click", () => {
    showLogin();
})

function showLogin(){
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
}

//When forgot password is pressed, prompt user to enter email and then press
document.querySelector("#forgot-password").addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == ""){
        alert("Enter email, and then press forgot password again")
    } else {
        forgotPassword("Your email is " + email);
    }
})

function forgotPassword(email){
    alert(email)
}

//function to register an account
function register() {
    const email = document.querySelector("#registration-email").value
    const password = document.querySelector("#registration-password").value
    const verifyPassword = document.querySelector("#confirm-password").value

    if (email.trim() == ""){
        alert("Enter email");
    } else if (password.trim().length < 7){
        alert("Password must be at least 7 characters");
    } else if (password != verifyPassword){
        alert("Passwords do not match");
    } else {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed up
            const user = userCredential.user;
            alert("Creating Account :D")
        }) 
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
         });
    }
}

document.querySelector("#register").addEventListener("click", () => {
    register();
})

//register when you hit the enter key
document.querySelector("#confirm-password").addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();

    register();
  }
});

