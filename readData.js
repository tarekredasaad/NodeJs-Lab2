var fs = require('fs');

// var content = fs.readFileSync('./data.json', 'utf8',)
// console.log(content);

fs.readFile('./data.json', 'utf8', function(err, data){
	if(err) throw err;
	console.log(data)
})
console.log('done');

