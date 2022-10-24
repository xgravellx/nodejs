const path = require('path');
const url = require('url');
const fs = require('fs');

const result = path.parse(__filename);
console.log(result);

const website = 'http://localhost:8080/default.htm?year=2017&month=february';
let result1 = url.parse(website, true);
console.log(result1);

const files = fs.readdir('./', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})
