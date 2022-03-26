
// passing value into local storage start 

document.querySelector("#myForm").addEventListener("submit", formSub);

var signupArr = JSON.parse(localStorage.getItem("signup", signupArr)) || [];

function formSub(event){

    event.preventDefault();

    let obj = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        emailID: document.querySelector("#emailID").value,
        password: document.querySelector("#password").value,
        confirmPassword: document.querySelector("#confirmPassword").value
    };

    signupArr.push(obj);

    localStorage.setItem("signup", JSON.stringify(signupArr));
}

// passing value into local storage ends


// submit codes start

document.querySelector("#signupSubmit").addEventListener("click", function(){

    // checking all fields code starts
    if( document.querySelector("#name").value === "" || document.querySelector("#number").value === "" || document.querySelector("#emailID").value === "" || document.querySelector("#password").value === "" || document.querySelector("#confirmPassword").value === "" )
    {
        alert("Fill all details")
    }
    else
    {
        window.location.href = "login.html";
    }
    // checking all fields code ends


    // password check code start
    if( document.querySelector("#password").value !== document.querySelector("#confirmPassword").value )
    {
        alert("Password mismatch");
    }
    // password check code ends
    
})

// submit codes ends