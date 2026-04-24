let email = document.querySelector("#email")
let password = document.querySelector("#password")

let form = document.querySelector("#u")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    let emailValid = emailRegex.test(email.value);
    let passwordValid = passwordRegex.test(password.value);


    if (!emailValid) {
        document.querySelector("#emailError").textContent = "Invalid Email ";
        document.querySelector("#emailError").style.display = "initial";
    }

    if (!passwordValid) {
        document.querySelector("#passwordError").textContent = "invaild password";
       document.querySelector("#passwordError").style.display = "initial";
    }



})
