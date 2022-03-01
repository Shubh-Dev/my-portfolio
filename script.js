const popMenu = document.querySelector('.hamburger');
popMenu.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.add('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.add('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.add('active');
  const lineBar = document.querySelector('.hamburger');
  lineBar.classList.add('active');
  const imgCross = document.querySelector('.cross-img');
  imgCross.classList.add('active');
});

const popOutMenu = document.querySelector('.cross-img');
popOutMenu.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.remove('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.remove('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.remove('active');
  const lineBar = document.querySelector('.hamburger');
  lineBar.classList.remove('active');
  const imgCross = document.querySelector('.cross-img');
  imgCross.classList.remove('active');
});

const popOutMenu2 = document.querySelector('.link-3');
popOutMenu2.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.remove('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.remove('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.remove('active');
  const lineBar = document.querySelector('.hamburger');
  lineBar.classList.remove('active');
  const imgCross = document.querySelector('.cross-img');
  imgCross.classList.remove('active');
});

const popOutMenu3 = document.querySelector('.link-4');
popOutMenu3.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.remove('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.remove('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.remove('active');
  const lineBar = document.querySelector('.hamburger');
  lineBar.classList.remove('active');
  const imgCross = document.querySelector('.cross-img');
  imgCross.classList.remove('active');
});

const popOutMenu4 = document.querySelector('.link-5');
popOutMenu4.addEventListener('click', () => {
  const myHeader = document.querySelector('.main-header');
  myHeader.classList.remove('active');
  const myNavbar = document.querySelector('.main-nav');
  myNavbar.classList.remove('active');
  const myLogo = document.querySelector('.my-logo');
  myLogo.classList.remove('active');
  const lineBar = document.querySelector('.hamburger');
  lineBar.classList.remove('active');
  const imgCross = document.querySelector('.cross-img');
  imgCross.classList.remove('active');
});

/* let navText = document.querySelector("hamburger");
navText.addEventListener("click",()=> {
    let myTextStyle = document.querySelectorAll(".link-1", "#main-nav");
    myTextStyle.classList.add("active");
}) */