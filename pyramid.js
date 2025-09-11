// Define the character we will eventually use to build the pyramid
const character = "#";

// Define how many rows (levels) we want in the pyramid
const count = 8;

// Create an empty array to hold our row data
const rows = [];

// This loop runs from i = 0 up to (but not including) count (8)
// On each iteration, we add the current i value into the rows array
for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

// Create a variable to store the final "pyramid string"
let result = "";

// Loop through each item inside the rows array
// For every row value, we add (concatenate) it onto the result string
for (const row of rows) {
  result = result + row;
}

// Finally, print the complete result string to the console
console.log(result);
