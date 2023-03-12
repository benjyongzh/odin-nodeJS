let events = require('events');
import {eventEmitter} from './demo-events'


//create event handler
let myEventHandler = () => {
    console.log('I hear a scream too');
}

//Assign event handler to an event
eventEmitter.on('scream', myEventHandler);