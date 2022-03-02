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
  const popProject = document.querySelector('.container-modal');
  popProject.classList.add('active');
});
const popOutProjectDetails = document.querySelector('.popup-cross');
popOutProjectDetails.addEventListener('click', () => {
  const popProjectOut = document.querySelector('.container-modal');
  popProjectOut.classList.remove('active');
});

// const modal = document.getElementById('#container-modal');
// modal.append

// const popOutProjectDetails = document.querySelector('.button-1');
// popOutProjectDetails.addEventListener('click', () => {
//   const popOutButton = document.querySelector('.project-1');
//   popOutButton.classList.add('active');
// });
// const projects = [
//   {
//     id: 1,
//     name: 'Tonic',
//     img: './images/frame2',
//     img1: './images/SnapshootPortfolio.svg',
//     details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
//     img2: './images.Tags.svg',
//     github: 'https://github.com/Shubh-Dev',
//   },
//   {
//     id: 2,
//     name: 'multi-post stories',
//     img: './images/Portfolio-2.svg',
//     img1: './images/SnapshootPortfolio.svg',
//     details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
//     img2: './images.Tags.svg',
//     github: 'https://github.com/Shubh-Dev',
//   },
//   {
//     id: 3,
//     name: 'Tonic',
//     img: './images/portfolio-3.svg',
//     img1: './images/SnapshootPortfolio.svg',
//     details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
//     img2: './images.Tags.svg',
//     github: 'https://github.com/Shubh-Dev',
//   },
//   {
//     id: 4,
//     name: 'Multi-post stories',
//     img: './images/portfolio-4.svg',
//     img1: './images/SnapshootPortfolio.svg',
//     details: 'Laboris tempor commodo excepteur voluptate dolore sunt.Et in mollit non aliqua elit dolor est laboris mollit cupidatat exercitation.Consequat id amet consequat excepteur velit sit cupidatat proident ad dolor pariatur tempor dolor.Labore esse tempor nostrud culpa Lorem ipsum commodo in do dolore.Cupidatat nulla quis consectetur velit duis ex anim tempor consequat ex.',
//     img2: './images.Tags.svg',
//     github: 'https://github.com/Shubh-Dev',
//   },
// ];
// const popModal = document.getElementById('container-modal');
// document.getElementById('body').onload = () => {
//   projects.map((project, index) => {
//     popModal.innerHTML +=
//   <div class = 'grid-item pj'>
//     <div class = 'bg-img'>
//       <h3>${projects.name}</h3>
//       <img src="projects.img" alt = "img">
//       <img src="projects.img1" alt = "img">
//     </div>

//   </div>
//   });
// };
