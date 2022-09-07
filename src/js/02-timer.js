import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let SELECTED_DATE = null;
let DELTA_DATE = null;

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    SELECTED_DATE = selectedDates[0];
    const currentDate = Date.now();
    const selectedDate = Math.round(new Date(selectedDates[0]).getTime());
    let deltaDate = selectedDate - currentDate;
    if (deltaDate <= 0) {
      alert('Please choose a date in the future');
    }
    else {
    refs.start.disabled = false;
      // refs.start.addEventListener('click', () => { setInterval(convertMs(deltaDate), 1000) });
    }
  },
};

refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  refs.datetimePicker.disabled = true;
  const setFunc = setInterval(() => {
    const currentDate = Date.now();
    const selectedDate = Math.round(new Date(SELECTED_DATE).getTime());
    let deltaDate = selectedDate - currentDate;
    convertMs(deltaDate); 
    console.log(deltaDate);
     if (deltaDate <= 1000) {
       clearInterval(setFunc);
     } 
   }, 1000);
 
});
 

flatpickr(refs.datetimePicker, options);

function convertMs(ms) {
  // refs.start.disabled = true;
  // refs.datetimePicker.disabled = true;
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
  // console.log({ days, hours, minutes, seconds });

  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  let str = String(value).padStart(2, '0');
  return str;
}
// addLeadingZero(5);


// flatpickr(refs.datetimePicker, options);