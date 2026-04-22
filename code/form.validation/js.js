let nu = document.querySelector("#name")
let fom = document.querySelector("form")

fom.addEventListener("submit", function (dets) {

    dets.preventDefault();

    if (nu.value.length <= 2) {  
        document.querySelector("#hid").style.display = "initial"; 

    }
    else{
            document.querySelector("#hid").style.display = "none"; 

    }

})
