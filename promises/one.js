// const promiseOne = new Promise((resolve, reject) => {
//   // Async tasks
//   setTimeout(() => {
//     console.log("Async task is done");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Task2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("task2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "abby", email: "abby@2b.com" });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;

//     if (!error) {
//       resolve({ username: "abby1", pasword: "1234" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// const usernamex = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "abby1", pasword: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
