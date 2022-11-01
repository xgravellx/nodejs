const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('selamla', (user) => {
    console.log(`Merhaba ${user.name} ${user.surname}`);
})

// on: Bir kere tanımlayıp sürekli tetikleyebiliriz
// once: Bir kere tanımlayıp bir kere tetiklenir.  

eventEmitter.emit('selamla', {name: 'Hazal', surname: 'Yılmaz'});
