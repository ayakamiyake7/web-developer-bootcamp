// const age = 33;

// if (age < 6) {
//   console.log("price = 0");
// } else if (age < 10) {
//   console.log("price = 10");
// } else if (age < 65) {
//   console.log("price = 20");
// } else {
//   console.log("price = 10");
// }

// const userInput = prompt("Enter something");
// if (userInput) {
//   console.log("TRUTHY!");
// } else {
//   console.log("FALSY");
// }

if (0) {
  console.log("TRUTHY!");
} else {
  console.log("FALSY");
} //169

// const password = prompt("Enter your password");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("VALID PASSWORD!");
// } else {
//   console.log("INCORRECT FORMAT ERROR!");
// } //170

const age = 250;

if (0 <= age && age < 6) {
  console.log("price = 0");
} else if ((6 <= age && age < 10) || 65 <= age) {
  console.log("price = 10");
} else if (10 <= age && age < 65) {
  console.log("price = 20");
} else {
  console.log("INVALID AGE!");
} //171

//173 switch
const day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("DONT KNOW THAT!");
}
