var fs = require('fs');

var content = fs.readFileSync('./greet1.txt', 'utf8',)
console.log(content)
// // // // //
// // // // // // // // non blocking
 fs.readFile('./greet1.txt', 'utf8', function(err, data){
	if(err) throw err;
	console.log(data)
})
console.log('done');

console.log('Done!');