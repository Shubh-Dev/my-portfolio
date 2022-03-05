const div = document.createElement('div');
div.className = ('popResume');
const h2 = document.createElement('h2');
h2.textContent = 'My Resume';
h2.className = 'popUpResumeHeadline';
div.appendChild(h2);
document.getElementById('division-resumeWin').appendChild(div);

const resumePopUpWin = document.querySelector('.popResumeButton');
resumePopUpWin.addEventListener('click', () => {
  const popResumeWinUP = document.querySelector('.popResume');
  popResumeWinUP.classList.add('active');
  // pop-out
  const resumePopOutWin = document.querySelector('.popUpResumeHeadline');
  resumePopOutWin.addEventListener('click', () => {
    const popResumeWinUP = document.querySelector('.popResume');
    popResumeWinUP.classList.remove('active');
  });
});

console.log(div);