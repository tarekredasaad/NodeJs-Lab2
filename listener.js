var Emit = require('./test');
var util = require('util');

var testint = new Emit();
testint.on(testint.good,function(){
    console.log("hi everyone");
});
testint.on(testint.events);
// testint.emit(testint.good);
function own(){
   Emit.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(own, Emit);

own.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', "greeting");
}

var greeter1 = new own();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('hassan');