let events = require('events');
export let eventEmitter = new events.EventEmitter();

//create event handler
let myEventHandler = () => {
    console.log('I hear a scream');
}

//Assign event handler to an event
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event
eventEmitter.emit('scream');