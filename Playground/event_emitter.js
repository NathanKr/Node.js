const events = require('events');
const eventEmitter = new events.EventEmitter();
const event1 = "event 1";

const eventHandler = function () {
  console.log(`i am handling ${event1}`);
}

eventEmitter.on(event1, eventHandler);

eventEmitter.emit(event1);