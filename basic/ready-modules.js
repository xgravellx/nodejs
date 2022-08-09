const path = require('path');
const fs = require('fs');


const pathObject = path.parse(__dirname);
console.log(pathObject);

fs.readdir('./', {witdFileTypes:true}, function (err, files) {
    console.log(files[0]);
})