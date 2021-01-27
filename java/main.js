// nav 
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const openBtn = document.querySelector(".humburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;
openBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  }
});

// Pop up

const   popUp = document.querySelector('.popup');
const closePopUp = document.querySelector('.popup-close');

closePopUp.addEventListener('click', ()=>{
  popUp.classList.remove('show')
});


window.addEventListener('load',()=>{
  setTimeout(()=>{
    popUp.classList.add('show')
  },5000)
})