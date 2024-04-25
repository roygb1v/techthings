function fetchData(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('this should not run'); // only either one would be run not both
      resolve('data after 3000ms ' + num);
    }, 3000);
  });
}

function resolvedCallback(data) {
  console.log('data in resolvedCallback on call stack', data);
}

function rejectedCallback(err) {
  console.log('err in rejectedCallback on call stack', err);
}

console.log('before');
for (let i = 0; i < 1; i++) {
  fetchData(i).then(resolvedCallback).catch(rejectedCallback);
}
console.log('after');

/**
 *
 * In the loop above, fetchData is called five times one after the other without waiting for
 * the previous iteration to continue. After 3000ms, the data is returned.
 * Since JavaScript has a single thread of execution, it executes code from top to bottom.
 * The event loop takes care of this. JavaScript's thread of execution is essentially the
 * event loop.
 *
 * The event loop is responsible for executing code on the call stack - which contains function calls and
 * a global function which executes code in a program like this one.
 *
 * The event loop also checks to see if the job queue has any elements to dequeue and put it on the call stack
 * to be executed.
 *
 * A promise is a Javascript object that has the fields `data`, `onFufilled` and `onRejected`.
 * When you create a new promise, it accepts a callback function which take the paramters resolve and reject.
 *
 * resolve and reject are functions which accept an argument
 *
 * any argument put into resolve will be the returned callback parameter in .then
 * any argument put into reject will be the returned callback parameter in .catch
 *
 * why is there a need to wrap setTimeout in a promise ?
 * This is to allow methods to be called on the promise object when the callback function
 * in setTimeout eventually completes after a delay.
 * The promise acts as a marker for the thread of execution to come back to this when
 * setTimeout eventually completes - which is to take the callback function in .then from
 * the job queue and put it onto the call stack to be executed.
 *
 *
 */
