# Hi, I’m Azmil 👋  

I’m learning JavaScript and RPG Maker MV to build my own game.  
This is my first GitHub repo.  

Just learning GitHub step by step

# my-first-repo
Just learning GitHub step by step

## My JavaScript Practice

```javascript
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = "";
for (const row of rows) {
  result = result + row;
}
console.log(result);
