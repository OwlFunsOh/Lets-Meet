import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

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

const auth = getAuth(app);
export { app, auth };

