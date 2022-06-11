// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log("THIS IS:", this)
//         console.log(`${this.name} says MEOWWWW`);
//     }
// }

// const meow2 = cat.meow;

const square = {
  area(side) {
    return Math.pow(side, 2);
  },
  perimeter(side) {
    return side * 4;
  },
};
console.log("square", square.area(3), "perimeter", square["perimeter"](3));

// Challenge 46
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};
console.log("eggCount", hen.eggCount, "layAnEgg", hen.layAnEgg());
