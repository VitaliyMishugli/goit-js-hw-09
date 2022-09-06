import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
    const currentDate = Date.now();
    const selectedDate = Math.round(new Date(selectedDates[0]).getTime());
    let deltaDate = selectedDate - currentDate;
    // console.log(currentDate);
    // console.log(selectedDate);
    // console.log(deltaDate);
    
    if (deltaDate <= 0) {
      alert('Please choose a date in the future');
    }
    
    else {
    refs.start.disabled = false;
    // refs.start.addEventListener('click', setInterval(convertMs(deltaDate), 1000));
      refs.start.addEventListener('click', () => {
        setInterval(function () {
          const currentDate = Date.now();
          const selectedDate = Math.round(new Date(selectedDates[0]).getTime());
          let deltaDate = selectedDate - currentDate;

          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          // Remaining days
          const days = Math.floor(deltaDate / day);
          // Remaining hours
          const hours = Math.floor((deltaDate % day) / hour);
          // Remaining minutes
          const minutes = Math.floor(((deltaDate % day) % hour) / minute);
          // Remaining seconds
          const seconds = Math.floor((((deltaDate % day) % hour) % minute) / second);
          //  console.log({ days, hours, minutes, seconds });
          refs.days.textContent = days;
          refs.hours.textContent = hours;
          refs.minutes.textContent = minutes;
          refs.seconds.textContent = seconds;
          return { days, hours, minutes, seconds };
        }, 1000)
      }
      );
    }
  },
};

flatpickr(refs.datetimePicker, options);

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
  
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   console.log({ days, hours, minutes, seconds });
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.minutes.textContent = minutes;
//   refs.seconds.textContent = seconds;
//   return { days, hours, minutes, seconds };
// }


// flatpickr(refs.datetimePicker, options);