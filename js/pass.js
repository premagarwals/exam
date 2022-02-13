
function view(){
    console.log(localStorage.getItem('admin'));
}
function go(){
    var passwd = document.getElementById("goo").value;
    localStorage.setItem('admin',passwd);
}
function set(){
 var NewTime = new Date();
 var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
  document.getElementById('hole').value = password;
  localStorage.setItem('pass',password);
  localStorage.setItem('PrevTime',NewTime);
}
var NewTime = new Date();
var PreTime = new Date(localStorage.getItem('PrevTime'));
document.getElementById('hole').value = localStorage.getItem('pass');
let admin = localStorage.getItem('admin');
let pass = prompt("Enter access token");
localStorage.setItem('admin','hututu')
if(pass === admin){
    alert(NewTime - PreTime);
  }
else{
     alert("Sorry, we can't let you enter");
     alert(admin);
     window.close();
}

if(NewTime - PreTime > 1000*60*10){
    set();
};

