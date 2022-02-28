const popMenu = document.querySelector('.hamburger');
popMenu.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.add('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.add('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.add('active');
  const crossBar = document.querySelector('.enable-icon');
  crossBar.classList.add('active');
});

/* let navText = document.querySelector("hamburger");
navText.addEventListener("click",()=>{
    let myTextStyle = document.querySelectorAll(".link-1", "#main-nav");
    myTextStyle.classList.add("active");
}) */