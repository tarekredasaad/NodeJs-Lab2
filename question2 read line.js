const fs = require("fs");
// const readline = require("readline");

const readline = require('readline');
  
// Creating a readable stream from file
// readline module reads line by line 
// but from a readable stream only.
const file = readline.createInterface({
    input: fs.createReadStream('greet1.txt'),
    output: process.stdout,
    terminal: false
});
file.on('line', (line) => {
    console.log(line);
});
