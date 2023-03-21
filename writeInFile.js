const fs = require('fs');

fs.writeFile("./info.txt", "Hey Hello ItI!", function(err) {
if(err) {
return console.log(err);
}
console.log("The file was saved!");
});
