let action = document.getElementById("box")
localStorage.setItem("name", "Admin");
localStorage.setItem("pass", "123");

function check(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    let checkName = localStorage.getItem("name");
    let checkPass = localStorage.getItem("pass");

    if(username == checkName && password == checkPass){
        location.replace("../Homepage/")
    }else{
        alert("Wrong password or username! Please type in again")
    }
}

function cont(){
    location.replace("../Contact/")
}

function home(){
    location.replace("../Mainpage/")
}
