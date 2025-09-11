// Declare a constant named 'character' and assign it the string "#", this will be the symbol we will use
const character = "#";

// Declare a constant named 'count' and assign it the number 8, as we want 8 steps to the pyramid later
const count = 8;

// Declare a constant named 'rows' and assign it an empty array [], this is to hold our 8 steps as we go
const rows = [];

// Start a 'for' loop:
//  - let i = 0 → initialize loop variable i with the value 0
//  - i < count → run loop as long as i is less than count (8)
//  - i = i + 1 → after each loop, increase i by 1
for (let i = 0; i < count; i = i + 1) {
  
  // rows.push(i):
  //   - 'rows' is the array declared earlier
  //   - .push() is an array method that adds a new element to the end
  //   - here, it adds the current value of i into rows
  rows.push(i);
}

// Declare a variable named 'result' and assign it an empty string "", which we will fill as we go
let result = "";

// console.log(result):
//   - console.log is a function that prints something to the console
//   - here, it prints the current value of result (which is "")
console.log(result);

// Print result again (same as above, still an empty string)
console.log(result);
