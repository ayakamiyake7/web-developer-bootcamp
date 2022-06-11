console.log("HELLO!!!...");
// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000)
setTimeout(() => {
  console.log("...");
}, 5000);

console.log("GOODBYE!!");

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// clearInterval(id);

console.log("-----------------------------------------------------");
const id = setInterval(() => {
  console.log(Math.random());
}, 4000);
clearInterval(id);
