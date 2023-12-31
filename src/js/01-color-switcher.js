function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// находим кнопки
// переменная для ид интервала
// операции с кликом на кнопке старт
// операциb с кликом на кнопке стоп
// вызываем каждую секунду смену цвета

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.setAttribute('disabled', 'disabled');
//console.log(stopButton);

let intervalId;

startButton.addEventListener('click', () => {
  //console.log('start');
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
    startButton.setAttribute('disabled', 'disabled');
    stopButton.removeAttribute('disabled');
  }
});

stopButton.addEventListener('click', () => {
  //console.log('stop');
  clearInterval(intervalId);
  intervalId = null;
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', 'disabled');
});

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
