const button = document.getElementById("button");
const verificated_name = "Mario Joel";
const verificated_user = "mariojoel0721";
const verificated_password = "LinuxSystemRoot"

button.onclick = function(){
let nameInput = document.getElementById("name").value;
let userInput = document.getElementById("user").value;
let userPassword = document.getElementById("password").value;

if(nameInput==verificated_name && userInput==verificated_user && userPassword==verificated_password){
    window.location.href = "#";
}
}