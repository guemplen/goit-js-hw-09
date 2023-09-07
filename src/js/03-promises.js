import Notiflix from 'notiflix';

const promiseFormFields = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay }); // Fulfill
      } else {
        reject({ position, delay }); // Reject
      }
    }, delay);
  });
  return promise;
}

const onPromiseSubmit = event => {
  event.preventDefault();

  const amount = Number(event.target.elements.amount.value);
  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
};

promiseFormFields.addEventListener('submit', onPromiseSubmit);
