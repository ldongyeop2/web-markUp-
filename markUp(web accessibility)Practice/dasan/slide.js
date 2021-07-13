const nav = document.querySelector(".articleList");
const articles = document.querySelectorAll(".articles li");
const image1 = document.querySelector(".decoImage1");
const image2 = document.querySelector(".decoImage2");
const image3 = document.querySelector(".decoImage3");
const image4 = document.querySelector(".decoImage4");
const image5 = document.querySelector(".decoImage5");
const topBar = document.querySelector(".topBar");
const art1 = document.querySelector(".introduction").offsetTop;
const art2 = document.querySelector(".greeting").offsetTop;
const art3 = document.querySelector(".vision").offsetTop;
const art4 = document.querySelector(".history").offsetTop;

function scrollTop() {
  const scrollposition = window.scrollY;
  if (scrollposition > 225) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

function changeActive() {
  const scrollposition = window.scrollY;
  console.log(scrollposition);

  articles.forEach(articles => {
    articles.classList.remove('active');
  })
  
  if(scrollposition > 10){
    topBar.classList.remove("hidden");
  } else {
    topBar.classList.add("hidden");
  }

  if(scrollposition > 215 && scrollposition <1000) {
    articles[0].classList.add('active');
  } else if (scrollposition > 1000 && scrollposition < 2025){
    articles[1].classList.add('active');
  } else if (scrollposition > 2025 && scrollposition < 3660) {
    articles[2].classList.add('active');
  } else if (scrollposition > 3660) {
    articles[3].classList.add('active');
  }

}

function moveImage() {
  const scrollposition = window.scrollY;

  if(scrollposition > 4400) {
    image1.classList.add("move");
    image2.classList.add("move");
    image3.classList.add("move");
  } else if (scrollposition < 4500) {
    image1.classList.remove("move");
    image2.classList.remove("move");
    image3.classList.remove("move");
  }

  if(scrollposition < 5120) {
    image4.classList.remove("move");
    image5.classList.remove("move");
  } else if (scrollposition >= 5120) {
    image4.classList.add("move");
    image5.classList.add("move");
  }

}


topBar.addEventListener('click',function() {
  window.scrollTo({top:0, behavior:'smooth'});
});

articles[0].addEventListener("click",function() {
  window.scrollTo({top:art1, behavior:'smooth'})
})
articles[1].addEventListener("click",function() {
  window.scrollTo({top:art2, behavior:'smooth'})
})
articles[2].addEventListener("click",function() {
  window.scrollTo({top:art3, behavior:'smooth'})
})
articles[3].addEventListener("click",function() {
  window.scrollTo({top:art4, behavior:'smooth'})
})


window.addEventListener('scroll',moveImage);
window.addEventListener('scroll',scrollTop);
window.addEventListener('scroll',changeActive);

