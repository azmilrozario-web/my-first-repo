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

// =====================
// Declare and initialize variables
// =====================

// const character = "#"  
// → Declares a constant variable named `character` with the value "#".  
//   This is the building block of your pyramid.  
const character = "#"; // (In plain English: The "brick" we’ll use for the pyramid)

// const count = 8  
// → Declares a constant variable `count` with the value 8.  
//   This tells us how many rows the pyramid will have.  
const count = 8; // (In plain English: The pyramid will be 8 steps tall)

// const rows = []  
// → Declares a constant variable `rows` as an empty array.  
//   This will store each row (line) of the pyramid as a string.  
const rows = []; // (In plain English: A bucket to collect each row we build)


// =====================
// First for loop → Build the rows of the pyramid
// =====================

// for (let i = 0; i < count; i = i + 1)  
// → Loop starts at i = 0, keeps running while i < count (8),  
//   and increases i by 1 each time.  
//   So i will go through: 0, 1, 2, 3, 4, 5, 6, 7.  
for (let i = 0; i < count; i = i + 1) {
  
  // character.repeat(i + 1)  
  // → Takes the string in `character` ("#") and repeats it (i+1) times.  
  //   Example: when i = 0 → "#" repeat (0+1) = "#";  
  //            when i = 1 → "#" repeat (1+1) = "##";  
  //            when i = 2 → "#" repeat (2+1) = "###"; etc.  
  // This prevents the "empty first row" bug (the off-by-one fix).  
  rows.push(character.repeat(i + 1));

  // rows.push(...)  
  // → Adds the new string (like "#", "##", "###") to the `rows` array.  
  //   After the loop runs, rows = ["#", "##", "###", "####", ...] up to 8 rows.  
}
// (In plain English: Go 8 times, each time build a bigger brick line,  
// and save it into the rows bucket)


// =====================
// Initialize result string
// =====================

// let result = ""  
// → Creates a variable named `result`, starting as an empty string.  
//   This will eventually hold the whole pyramid combined into one text block.  
let result = ""; // (In plain English: An empty piece of paper to write the pyramid on)


// =====================
// Second for...of loop → Combine rows into the result string
// =====================

// for (const row of rows)  
// → This goes through each string inside the `rows` array, one by one.  
//   Example: first "row" = "#", second "row" = "##", then "###", etc.
for (const row of rows) {
  
  // result = result + row + "\n"  
  // → Take the current result, add the current row, then add a newline character.  
  //   "\n" means “start a new line”.  
  // Example progression:  
  //   - First row: "" + "#" + "\n" → "#\n"  
  //   - Second row: "#\n" + "##" + "\n" → "#\n##\n"  
  //   - Third row: "#\n##\n" + "###" + "\n" → "#\n##\n###\n"  
  //   … continues until all rows are added, til the 8 times are over
  result = result + row + "\n";
}
// (In plain English: Go through each line we saved, add it to the paper,  
// and after every line, press “Enter” so the next row starts on a new line)


// =====================
// Print final result
// =====================

// console.log(result)  
// → Displays the final pyramid stored in `result` in the console.  
//   Because of the "\n" characters, it will print as multiple lines.  
console.log(result); // (In plain English: Show the pyramid on the screen)
