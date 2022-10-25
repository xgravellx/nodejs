const path = require('path');
const url = require('url');
const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Path
const result = path.parse(__filename);
console.log(result);

// URL
const website = 'http://localhost:8080/default.htm?year=2017&month=february';
let result1 = url.parse(website, true);
console.log(result1);

// Files
const files = fs.readdir('./', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})

// Events
// listener kayıt et
emitter.on('connection', () => {
    console.log('bağlantı kuruldu');
})
// Event'i tetikle
emitter.emit('connection');
