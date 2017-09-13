const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('myEvent', () => {
  console.log('an myEvent occurred!');
});

myEmitter.emit('event');

myEmitter.emit('myEvent');
myEmitter.emit('myEvent');