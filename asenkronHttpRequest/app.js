const https = require('https');

https.get('https://restcountries.com/v2/name/turkey', (response) => {

    let data = '';
    response.on('data', chunk => {
        data = data + chunk;
    });

    response.on('end', () => {
        const jsonData = JSON.parse(data);
        console.log(jsonData[0].currencies[0]);
    })
}).on('error', err => {
    console.log(`hata`);
});