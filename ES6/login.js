
// login codes starts

var loginArr = JSON.parse(localStorage.getItem("signup")) || [];

document.querySelector("#myForm").addEventListener("submit", formSubmit);

function formSubmit(event){

    event.preventDefault();

    if(loginArr.length === 0)
    {
        alert("Signup first")
        window.location.href = "signup.html";
    }

    var loginEmail = document.querySelector("#emailID").value;
    var loginPassword = document.querySelector("#password").value;

    loginArr.map(function(elem, index){
        
        if(loginEmail == elem.emailID)
        {
            if(loginPassword == elem.password)
            {
                alert("Login Successful!")
                window.location.href = "index.html"
            }
        }
        else
        {
            if(index < loginArr.length - 1)
            {
                
            }
            else
            {
                alert("Invalid Credentials")
                window.location.href = "login.html"
            }
        }
    })
    
}

// login codes ends