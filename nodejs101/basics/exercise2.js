const fs = require('fs');

fs.readFile('demo.txt', (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
})

// appendFile: Dosya yoksa oluşturur içeriğine ekleme yapar.
// writeFile: Dosya yoksa oluşturur siler ve yazar.