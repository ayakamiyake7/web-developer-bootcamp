// const new = 'new';
let input = prompt("What would you like to do?");
const todo = ["Eat breakfast", "Go to the cinema"];

while (input !== "quit") {
  input = prompt("What would you like to do?");

  if (input === "list") {
    console.log("***************");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newInput = prompt("What would you like add?");
    todo.push(newInput);
    console.log(`${newInput} added to list`);
  } else if (input === "delete") {
    const deleteTodo = parseInt(prompt("Enter the number you want to delete."));
    if (!Number.isNaN(deleteTodo)) {
      todo.splice(deleteTodo, 1);
    } else {
      console.log("Unknown index...");
    }
  }
}
console.log("OK, quit!");
