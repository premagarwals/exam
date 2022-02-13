// Add all your JS here
var timed = 0;
var count = 0;
function print(){
    const t = new Date();
    const hour = t.getHours();
    const minute = t.getMinutes();
    const second = t.getSeconds();
    console.log("time-",hour,":",minute,":",second);
    if(window.document.visibilityState === "hidden"){
    timed = timed - Date.parse(t);
    count = count+1;
    }
    if(window.document.visibilityState === "visible"){
    timed = timed + Date.parse(t);
    }
    var seconds = parseInt((timed / 1000) % 60 );
    var minutes = parseInt((timed / (1000*60)) % 60);
    var hours = parseInt((timed / (1000*60*60)) % 12);
    
    timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('time').innerHTML = timeString;
    document.getElementById('sus').value = count;
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
  document.getElementById('pass').value = password;
  localStorage.setItem('pass',password);
  localStorage.setItem('PrevTime',time);
}
function sendMail(){
        var temp = {
        name: name,
        class: batch,
        act: document.getElementById("sus").value,
        time: document.getElementById("show").innerHTML,
        sus_time: document.getElementById("time").innerHTML,
    };
    
    emailjs.send('gmail','template',temp)
    .then(function(res){
        alert("Your all activities are submitted.",res.status)
    })
}

let token = prompt("Enter access token");
let pass = localStorage.getItem('pass');

if(token === pass){
    alert("welcome");}
else if(token === "admin"){
    location.replace("./doc.html");
}
else{
     alert("Sorry, we can't let you enter");
     window.close();
}
var NewTime = new Date();
var PreTime = localStorage.getItem('PrevTime');
if(NewTime - PreTime > 1000*60*10){
    set();
}
document.addEventListener('visibilitychange', print);


window.onload = () => {
  let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds = 0;

  let intervalId = null;

  intervalId = setInterval(startTimer, 1000);
  function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("show").innerHTML = hour+":"+minute+":"+seconds;
  }
  var name = prompt("Enter your name here");
  var batch = prompt("Enter your class here");

}

