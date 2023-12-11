const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = (btn.closest(".modal").style.display = "none");
    body.classList.remove("prevent-background-scroll");
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});











/*top*/
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




/*form*/
function checkpassword(){
    var x = document.getElementById('password').value;
  if(x.length >= 8){
      if(x.indexOf('A') >= 0){
        if(!(x.startsWith('1')) && !(x.startsWith('2')) && !(x.startsWith('3'))){
           if(x.search('!') >= 0){
             alert('password ok');
        }
        else{
         alert('missing !');
        }
      }
     else{
      alert('starts with 1 or 2 or 3');
     }
    }
    else{
    alert('no A in passowrd');
    }
  }
  else{
      alert('less than 8 digits');
  }
  }
const passwordField = document.getElementById("password")

const handleMouseMove = event => {
    if (!document.querySelector("#password:is(:focus)") && !document.querySelector("#password:is(:user-invalid)")) {
        const eyes = document.getElementsByClassName('eye')
  
        for (let eye of eyes) {
               const x = eye.getBoundingClientRect().left + 10;
               const y = eye.getBoundingClientRect().top + 10;
               const rad = Math.atan2(event.pageX - x, event.pageY - y);
               const rot = (rad * (180 / Math.PI) * -1) + 180;
        
               eye.style.transform = `rotate(${rot}deg)`;
            }
    }
}

const handleFocusPassword = event => {
    document.getElementById('face').style.transform = 'translateX(30px)'
    const eyes = document.getElementsByClassName('eye')

    for (let eye of eyes) {
        eye.style.transform = `rotate(100deg)`;
     }
}

const handleFocusOutPassword = event => {
    document.getElementById('face').style.transform = 'translateX(0)'
    if(event.target.checkValidity()) {
        document.getElementById('ball').classList.toggle('sad')
    } else {
        document.getElementById('ball').classList.toggle('sad')
        const eyes = document.getElementsByClassName('eye')
  
        for (let eye of eyes) {
               eye.style.transform = `rotate(215deg)`;
            }
    }
}


document.addEventListener("mousemove", event => handleMouseMove(event))
passwordField.addEventListener('focus', event => handleFocusPassword(event))
passwordField.addEventListener('focusout', event => handleFocusOutPassword(event))

document.getElementById('submit').addEventListener("mouseover", event => document.getElementById('ball').classList.toggle('look_at'))
document.getElementById('submit').addEventListener("mouseout", event => document.getElementById('ball').classList.toggle('look_at'))


function goToHomePage() {
    // Replace 'home.html' with the actual file or URL of your home page
    window.location.href = 'index.html';
}


/*burger pizza*/
function pizzagame(){
var choices = ['Neapolitan','Chicago','Sicilian','New York'];
    var com = choices[Math.round(Math.random()*3)];
    var player = document.getElementById('pizza').value;
    if (player == com){
        document.getElementById('answer').innerHTML = 'correct!';
    }
   else if(player == 'Neapolitan'){
   if(com == 'Chicago'){
    document.getElementById('answer').innerHTML = 'Ohno, the customer want a Chicago style pizza.';
   }
   else if(com == 'Sicilian'){
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a Sicilian style pizza.';
   }
   else{
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a New York style pizza.';
   }
   }
   
   else if(player == 'Chicago'){
   if(com == 'Neapolitan'){
    document.getElementById('answer').innerHTML = 'Ohno, the customer want a Neapolitan style pizza.';
   }
   else if(com == 'Sicilian'){
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a Sicilian style pizza.';
   }
   else{
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a New York style pizza.';
   }
   }
   
   else if(player == 'Sicilian'){
   if(com == 'Chicago'){
    document.getElementById('answer').innerHTML = 'Ohno, the customer want a Chicago style pizza.';
   }
   else if(com == 'Neapolitan'){
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a Neapolitan style pizza.';
   }
   else{
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a New York style pizza.';
   }
   }
   
     else{
   if(com == 'Chicago'){
    document.getElementById('answer').innerHTML = 'Ohno, the customer want a Chicago style pizza.';
   }
   else if(com == 'Neapolitan'){
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a Neapolitan style pizza.';
   }
   else{
   document.getElementById('answer').innerHTML = 'Ohno, the customer want a Sicilian style pizza.';
   }
   }
   
   }

