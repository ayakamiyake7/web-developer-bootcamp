// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");

// input.addEventListener("change", function (e) {
//   console.log("CASKDJASKJHD");
// });

// input.addEventListener("input", function (e) {
//   h1.innerText = input.value;
// });

const h1 = document.querySelector("h1");
const username = document.querySelector("#username");
username.addEventListener("input", function () {
  h1.innerText = `Welcome, ${username.value}`;
  if (username.value === "") {
    h1.innerText = "Enter Your Username";
  }
});
