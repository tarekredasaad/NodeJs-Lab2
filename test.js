function test() {
	this.events = {};
    this.good = "good";
}

// listner
test.prototype.on = function(type, listener) {
    console.log("number 1");
    console.log("number 1",type);
	this.events[type] = this.events[type] || [];
    console.log("number 6");
	this.events[type].push(listener,"ok");
    console.log("number 7");
    this.good.concat(" good connect");
}

test.prototype.emit = function(type) {
    // if(this.good){
    //     console.log("ok");
    // }
    // console.log("number 2");
    console.log("number 2");
    console.log("number 1",type);
	if (this.events[type]) {
        console.log("number 3",type);
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = test;