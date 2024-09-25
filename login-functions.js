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