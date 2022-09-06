const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let intervalId = null;

refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  intervalId = setInterval(() => {
    let color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, 1000);
});

refs.stop.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.body.style.backgroundColor = '#fff';
  refs.start.disabled = false;
  refs.stop.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
