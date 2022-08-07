const https = require('https');
const axios = require('axios');
const { log } = require('console');

axios.get('https://restcountries.com/v2/name/turkey').then(res => {
    const ulke = res.data[0];
    const baskent = res.capital;
    const nufus = ulke.population;
    const enlem = ulke.latlng[0];
    const boylam = ulke.latlng[1];
    log(`Ülke: ${ulke} Başkent: ${baskent} Nufus: ${nufus} Enlem: ${enlem} Boylam: ${boylam}`);

    

})