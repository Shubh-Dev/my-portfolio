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
const projects = [
  {
    id: 1,
    name: 'Tonic',
    img: './images/Enabled-3.svg',
    img1: './images/frame2.svg',
    img2: './images/SnapshootPortfolio.svg',
    details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    img3: './images/Tags.svg',
    img4: './images/Icon-export-button.svg',
    img5: './images/github.svg',
    img6: './images/Portfolio-2.svg',
    img7: './images/portfolio-3.svg',
    img8: './images/projrctDetails-snap.svg',
    img9: './images/Tags-triple.svg',
    github: 'https://github.com/Shubh-Dev',
    gitLink: 'https://github.com/Shubh-Dev',
  },
  {
    id: 2,
    name: 'multi-post stories',
    img1: './images/SnapshootPortfolio.svg',
    details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    img2: './images.Tags.svg',
    github: 'https://github.com/Shubh-Dev',
  },
  {
    id: 3,
    name: 'Tonic',
    img: './images/portfolio-3.svg',
    img1: './images/SnapshootPortfolio.svg',
    details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    img2: './images.Tags.svg',
    github: 'https://github.com/Shubh-Dev',
  },
  {
    id: 4,
    name: 'Multi-post stories',
    img: './images/portfolio-4.svg',
    img1: './images/SnapshootPortfolio.svg',
    details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
    img2: './images/Tags.svg',
    github: 'https://github.com/Shubh-Dev',
  },
];
// mobile-pop-button-1
const popInProjectDetails = document.querySelector('.button-1');
popInProjectDetails.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    const popProject = document.querySelector('.container-modal');
    popProject.classList.add('active');
    document.querySelector('.project-head-1').textContent = projects[0].name;
    document.querySelector('.popup-cross').src = projects[0].img;
    document.querySelector('.canopy-img-1').src = projects[0].img1;
    document.querySelector('.main-project-img-mobile').src = projects[0].img2;
    document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
    document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
    document.querySelector('.button-icon-live').src = projects[0].img4;
    document.querySelector('.button-icon-git').src = projects[0].img5;
  } else if (window.innerWidth >= 992) {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.add('active');
    document.querySelector('.desktop-popup-main-head').textContent = projects[0].name;
    document.querySelector('.popup-cross-desktop').src = projects[0].img;
    document.querySelector('.skill-list-img').src = projects[0].img1;
    document.querySelector('.desktop-main-img-popup').src = projects[0].img6;
    document.querySelector('.popUpWindowPara').textContent = projects[0].details;
    document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
    document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
    document.querySelector('.popup-img-live-1').src = projects[0].img4;
    document.querySelector('.popup-img-live-2').src = projects[0].img5;
  }
  const popOutProjectDetails = document.querySelector('.popup-cross');
  popOutProjectDetails.addEventListener('click', () => {
    const popProjectOut = document.querySelector('.container-modal');
    popProjectOut.classList.remove('active');
  });
});
// mobile button-pop 2
const popInProjectDetails2 = document.querySelector('.button-2-pop');
popInProjectDetails2.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    const popProject = document.querySelector('.container-modal');
    popProject.classList.add('active');
    document.querySelector('.project-head-1').textContent = projects[1].name;
    document.querySelector('.popup-cross').src = projects[0].img;
    document.querySelector('.canopy-img-1').src = projects[0].img1;
    document.querySelector('.main-project-img-mobile').src = projects[0].img6;
    document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
    document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
    document.querySelector('.button-icon-live').src = projects[0].img4;
    document.querySelector('.button-icon-git').src = projects[0].img5;
  } else if (window.innerWidth >= 992) {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.add('active');
    document.querySelector('.desktop-popup-main-head').textContent = projects[1].name;
    document.querySelector('.popup-cross-desktop').src = projects[0].img;
    document.querySelector('.skill-list-img').src = projects[0].img1;
    document.querySelector('.desktop-main-img-popup').src = projects[0].img8;
    document.querySelector('.popUpWindowPara').textContent = projects[0].details;
    document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
    document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
    document.querySelector('.popup-img-live-1').src = projects[0].img4;
    document.querySelector('.popup-img-live-2').src = projects[0].img5;
  }
  const popOutProjectDetails = document.querySelector('.popup-cross');
  popOutProjectDetails.addEventListener('click', () => {
    const popProjectOut = document.querySelector('.container-modal');
    popProjectOut.classList.remove('active');
  });
});

// mobile button-pop 3
const popInProjectDetails3 = document.querySelector('.button-3-pop');
popInProjectDetails3.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    const popProject = document.querySelector('.container-modal');
    popProject.classList.add('active');
    document.querySelector('.project-head-1').textContent = projects[0].name;
    document.querySelector('.popup-cross').src = projects[0].img;
    document.querySelector('.canopy-img-1').src = projects[0].img1;
    document.querySelector('.main-project-img-mobile').src = projects[0].img7;
    document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
    document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
    document.querySelector('.button-icon-live').src = projects[0].img4;
    document.querySelector('.button-icon-git').src = projects[0].img5;
  } else if (window.innerWidth >= 992) {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.add('active');
    document.querySelector('.desktop-popup-main-head').textContent = projects[0].name;
    document.querySelector('.popup-cross-desktop').src = projects[0].img;
    document.querySelector('.skill-list-img').src = projects[0].img1;
    document.querySelector('.desktop-main-img-popup').src = projects[0].img7;
    document.querySelector('.popUpWindowPara').textContent = projects[0].details;
    document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
    document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
    document.querySelector('.popup-img-live-1').src = projects[0].img4;
    document.querySelector('.popup-img-live-2').src = projects[0].img5;
  }
  const popOutProjectDetails = document.querySelector('.popup-cross');
  popOutProjectDetails.addEventListener('click', () => {
    const popProjectOut = document.querySelector('.container-modal');
    popProjectOut.classList.remove('active');
  });
});
// mobile button-pop 4
const popInProjectDetails4 = document.querySelector('.button-4-pop');
popInProjectDetails4.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    const popProject = document.querySelector('.container-modal');
    popProject.classList.add('active');
    document.querySelector('.project-head-1').textContent = projects[1].name;
    document.querySelector('.popup-cross').src = projects[0].img;
    document.querySelector('.canopy-img-1').src = projects[0].img1;
    document.querySelector('.main-project-img-mobile').src = projects[3].img;
    document.querySelector('.popup-mobile-pro1-para').textContent = projects[0].details;
    document.querySelector('.skillset-mobile-popup-img').src = projects[0].img3;
    document.querySelector('.button-icon-live').src = projects[0].img4;
    document.querySelector('.button-icon-git').src = projects[0].img5;
  } else if (window.innerWidth >= 992) {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.add('active');
    document.querySelector('.desktop-popup-main-head').textContent = projects[1].name;
    document.querySelector('.popup-cross-desktop').src = projects[0].img;
    document.querySelector('.skill-list-img').src = projects[0].img1;
    document.querySelector('.desktop-main-img-popup').src = projects[3].img;
    document.querySelector('.popUpWindowPara').textContent = projects[0].details;
    document.querySelector('.desktop-aside-skill-icon-1').src = projects[0].img3;
    document.querySelector('.desktop-aside-skill-icon-2').src = projects[0].img9;
    document.querySelector('.popup-img-live-1').src = projects[0].img4;
    document.querySelector('.popup-img-live-2').src = projects[0].img5;
  }
  const popOutProjectDetails = document.querySelector('.popup-cross');
  popOutProjectDetails.addEventListener('click', () => {
    const popProjectOut = document.querySelector('.container-modal');
    popProjectOut.classList.remove('active');
  });
});

const popInWindowDesktop = document.querySelector('.button-1');
popInWindowDesktop.addEventListener('click', () => {
  // if (window.innerWidth >= 992) {
  //   const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
  //   popDesktopProjectOut.classList.add('active');
  // }
  const popOutWindowDesktop = document.querySelector('.popup-cross-desktop');
  popOutWindowDesktop.addEventListener('click', () => {
    const popDesktopProjectOut = document.querySelector('.container-desktop-modal');
    popDesktopProjectOut.classList.remove('active');
  });
});
// form section
document.getElementById('my-form').addEventListener('submit', (e) => {
  const emailValue = document.getElementById('my-email').value;
  const emailError = document.getElementById('error-mes');
  const regex = /^[a-z]/g;
  if (regex.test(emailValue)) {
    emailError.textContent = '';
  } else {
    e.preventDefault();
    emailError.textContent = 'Email should be in lowercase';
  }
});