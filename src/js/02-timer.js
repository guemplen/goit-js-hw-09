import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDate = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

startButton.setAttribute('disabled', 'disabled');
let currentDate = new Date();
let selectedDate = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
});

const timer = {
  deadline: null,
  intervalId: null,
  refs: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
};

function startTimer() {
  selectedDate = new Date(inputDate.value);
  if (selectedDate <= currentDate) {
    window.alert('Please choose a date in the future');
    return;
  }
  timer.deadline = selectedDate.getTime();
  timer.intervalId = setInterval(updateTimer, 1000);
  updateTimer();
  startButton.setAttribute('disabled', 'disabled');
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const timeDifference = timer.deadline - currentTime;
  //console.log(timeDifference);

  if (timeDifference <= 0) {
    clearInterval(timer.intervalId);
    Notiflix.Notify.success('The timer completed successfully');
    return;
  }

  const time = convertMs(timeDifference);
  timer.refs.days.textContent = String(time.days).padStart(2, '0');
  timer.refs.hours.textContent = String(time.hours).padStart(2, '0');
  timer.refs.minutes.textContent = String(time.minutes).padStart(2, '0');
  timer.refs.seconds.textContent = String(time.seconds).padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
