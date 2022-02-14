
function view(){
    console.log(Cookies.get('admin', { domain: 'https://premagarwals.github.io/exam' }));
}
function go(){
    var passwd = document.getElementById("goo").value;
    Cookies.set('admin',passwd, { expires: 365, path: 'https://premagarwals.github.io/exam' });
;
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
  Cookies.set('pass',password, { expires: 365, path: 'https://premagarwals.github.io/exam' });
  Cookies.set('prevTime',NewTime, { expires: 365, path: 'https://premagarwals.github.io/exam' });
}
var NewTime = new Date();
var PreTime = new Date(Cookies.get('prevTime', { domain: 'https://premagarwals.github.io/exam' }));
document.getElementById('hole').value = Cookies.get('pass', { domain: 'https://premagarwals.github.io/exam' });
let admin = Cookies.get('admin', { domain: 'https://premagarwals.github.io/exam' });
let pass = prompt("Enter access token");
Cookies.set('admin','12345', { expires: 365, path: 'https://premagarwals.github.io/exam' });
if(pass === admin){
    alert("Welcome to admin panel");
    document.body.style.display = "block";
  }
else{
     alert("Sorry, we can't let you enter");
     alert(admin);
     location.replace("./null.html");
}

if(NewTime - PreTime > 1000*60*10){
    set();
};

