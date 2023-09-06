import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//console.log(flatpickr);

const inputDate = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

startButton.setAttribute('disabled', 'disabled');
const currentDate = new Date();

flatpickr(inputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < currentDate) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
    //console.log(selectedDates[0]);
  },
});

startButton.addEventListener('click', function () {
  console.log('start');
});
