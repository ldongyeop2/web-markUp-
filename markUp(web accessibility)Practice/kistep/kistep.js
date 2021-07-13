const button = document.querySelector(".newsButton");
const triger = document.querySelector(".triger");
const photoZone = document.querySelector(".photo");
const nextbutton = document.querySelector(".next");
const prebutton = document.querySelector(".pre");
const tLocation = document.querySelector("body").offsetTop;

function auto() {
  
}

function next() {
  
}


function pre() {
  
}

function go() {
  if(button.value === 'stop')
  {
    button.innerHTML="∥";
    button.setAttribute('value','going');
  } else {
    button.innerHTML="▷";
    button.setAttribute('value','stop');
  }
}

function setTop() {
  window.scrollTo({top:location, behavior:'smooth'});

}

function check() {
  const location = window.pageYOffset;
  if (location <= 200){
    triger.className ="triger ";
  } else {
    triger.className ="triger aaaa";
  }

}

button.addEventListener('click',go);
prebutton.addEventListener('click',pre);
nextbutton.addEventListener('click',next);
triger.addEventListener('click',setTop);
window.addEventListener('scroll',check);


