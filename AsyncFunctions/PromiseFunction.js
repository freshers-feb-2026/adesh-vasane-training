let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// promise.all 

  let p1 = Promise.resolve("First");
let p2 = Promise.resolve("Second");
let p3 = Promise.resolve("Third");


//promise.allSettled

Promise.allSettled([p1, p2, p3])
  .then((values) => console.log(values));


  
  let p5 = Promise.resolve("First");
let p6 = Promise.resolve("Second");
let p7 = Promise.resolve("Third");

Promise.all([p5, p6, p7])
  .then((values) => console.log(values));