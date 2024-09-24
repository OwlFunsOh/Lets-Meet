// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDohRYNwOQsh8YLeevAHeGi57BsPDC311E",
authDomain: "lets-meet-47a8c.firebaseapp.com",
projectId: "lets-meet-47a8c",
storageBucket: "lets-meet-47a8c.appspot.com",
messagingSenderId: "847905556985",
appId: "1:847905556985:web:df8375a05e80ed9c95d528"
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