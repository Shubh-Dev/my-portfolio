const div = document.createElement('div');
div.className = ('popResume');
const h2 = document.createElement('h2');
h2.textContent = 'My Resume';
h2.className = 'popUpResumeHeadline';
div.appendChild(h2);
const crossButton = document.createElement('img');
crossButton.src = './images/Enabled-4.svg';
crossButton.className = 'popResumeCrossbutton';
div.appendChild(crossButton);
document.getElementById('division-resumeWin').appendChild(div);

const resumePopUpWin = document.querySelector('.popResumeButton');
resumePopUpWin.addEventListener('click', () => {
  const popResumeWinUP = document.querySelector('.popResume');
  popResumeWinUP.classList.add('active');
  // pop-out
  const resumePopOutWin = document.querySelector('.popResumeCrossbutton');
  resumePopOutWin.addEventListener('click', () => {
    const popResumeWinUP = document.querySelector('.popResume');
    popResumeWinUP.classList.remove('active');
  });
});

console.log(div);