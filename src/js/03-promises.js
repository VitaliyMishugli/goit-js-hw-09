import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
}

refs.formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  let {
    elements: { delay, step, amount },
  } = e.currentTarget;
  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);
    // console.log(Number(delay.value), Number(step.value), Number(amount.value));
  
  for (let i = 0; i < amount; i = i + 1){
    console.log(i);
    createPromise(i, delay)
      .then(({ i, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
        }, delay)
      })
      .catch(({ i, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
        }, delay)        
      });
  }
   delay = delay + step;
})

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
    
  })
  
  

}

// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');