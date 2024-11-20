import { auth, db } from '/src/firebase.js';
import { doc, collection, setDoc, addDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

//function to register to database
async function register_user_to_db(email, userID) {
    try{
        const docRef = await setDoc(doc(db, "users", userID), {
            name: "User",
            email: email,
            groups: [""]
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log("Error adding document: ", error);
    }
}


//function to register an account
async function register() {
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
            const userID = user.uid;
            //adding to database
            register_user_to_db(email, userID);
            alert("Creating Account :D")
            showLogin();
        }) 
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
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

//function to sign in to website
function signIn() {
    const email = document.querySelector("#login-email").value
    const password = document.querySelector("#login-password").value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "/src/homepage/homepage.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
}

//Sign in
document.querySelector("#login").addEventListener("click", () => {
    signIn()
})

//sign in when enter is hit on password
document.querySelector("#login-password").addEventListener("keyup", (e) => {
    if(e.keyCode == 13){
        e.preventDefault();
        signIn();
    }
})

//forgot password stuff
function resetPassword(){
    const email = document.querySelector("#login-email").value
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