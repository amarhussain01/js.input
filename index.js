// How tomaccept user input

// Easy Way with a window prompt

//let userName = window.prompt("What is your name?");
//console.log(username);

// DIFFICULTY WAY HTML textbox




let username;

document.getElementById("myButton").onclick = function(){

username = document.getElementById("myText").value;
console.log(username);
document.getElementById("myLabel").innerHTML = "Hello" + username;
}