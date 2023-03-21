const fs = require('fs');
   
// List all the filenames before renaming
// getCurrentFilenames();
   
// Rename the file
fs.rename('test.txt', 'info.txt', () => {
  console.log("\nFile Renamed!\n");
});