// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: process.env.apiKey,
authDomain: process.env.authDomain,
projectId: process.env.projectId,
storageBucket: process.env.storageBucket,
messagingSenderId: process.env.messagingSenderId,
appId: process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Sign up page when you hit Sign up button
document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
})

function showRegistration(){
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
}

//Return to Sign in page when Sign in is hit on the sign up page
document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
})

function showLogin(){
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
}