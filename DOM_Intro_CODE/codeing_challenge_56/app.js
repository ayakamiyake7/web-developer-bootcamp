const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const allLetters = document.querySelectorAll("span");
for (let i = 0; i < allLetters.length; i++) {
  letter.style.color = colors[i];
}

// let i = 0;
// for (let letter of allLetters) {
//   letter.style.color = colors[i];
//   i++;
// }
