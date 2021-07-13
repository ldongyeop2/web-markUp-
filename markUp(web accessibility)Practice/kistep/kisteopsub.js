const list = document.querySelector(".h");
const button = document.querySelector(".eachMenu");


function selectMenu(){
  list.classList.toggle('none');
}

button.addEventListener("click", selectMenu);