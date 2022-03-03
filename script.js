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
const popInProjectDetails = document.querySelector('.button-1');
popInProjectDetails.addEventListener('click', () => {
  if (window.innerWidth < 992) {
    const popProject = document.querySelector('.container-modal');
    popProject.classList.add('active');
  }
  const popOutProjectDetails = document.querySelector('.popup-cross');
  popOutProjectDetails.addEventListener('click', () => {
    const popProjectOut = document.querySelector('.container-modal');
    popProjectOut.classList.remove('active');
  });
});
const popInWindowDesktop = document.querySelector('.button-1');
popInWindowDesktop.addEventListener('click', () => {
  if (window.innerWidth >= 992) {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.add('active');
  }
  const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
  popOutWindowDesktop.addEventListener('click', () => {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.remove('active');
  });
});
