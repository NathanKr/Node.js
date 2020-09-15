const events = require('events');
const eventEmitter = new events.EventEmitter();
const eventName = "event 1";

const eventHandler = function () {
  console.log(`i am handling ${eventName}`);
}

eventEmitter.on(eventName, eventHandler);

eventEmitter.emit(eventName);