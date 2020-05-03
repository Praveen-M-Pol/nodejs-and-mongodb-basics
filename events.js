var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('I hear a screem');
}

eventEmitter.on('screem1', myEventHandler);
eventEmitter.emit('screem1');