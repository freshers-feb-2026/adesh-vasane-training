
console.log("Start");

setTimeout(() => {
  console.log("this is Macrotask");
}, 0);

Promise.resolve().then(() => {
  console.log("this is Microtask");
});

console.log("End");