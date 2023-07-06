if (document.querySelector('.popup__container')) {
  const btn = document.querySelector('.button');
  const circle = document.querySelector('.circle');

  let buttonOn = false;

  btn.addEventListener('click', () => {
    if (!buttonOn) {
      buttonOn = true;
      circle.style.animation = 'toggleCircleRight 1s forwards';
      btn.style.animation = 'SwitchToLight 1s forward';
      chrome.tabs.executeScript({
        file: 'appOn.js',
      });
    } else {
      buttonOn = false;
      circle.style.animation = 'toggleCircleLeft 1s forwards';
      btn.style.animation = 'SwitchToDark 1s forward';
      chrome.tabs.executeScript({
        file: 'appOff.js',
      });
    }
  });
}
