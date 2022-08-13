const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const databaseURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'test';

MongoClient.connect(databaseURL, {useUnifiedTopology: true, useNewUrlParser: true} ,(error, result) => {
    if (error) {
        return console.log("mongoya bağlanılamadı");
    }
    console.log("db ye bağlanıldı");
    const db=  result.db(databaseName);

    // Database to Create
    /* db.collection('users').innertMany([
        {ad: "hazal", okul: "asü"},
        {ad: "veli", il: "ankara"},
    ]).then(sonuc => console.log(sonuc)).catch(err => console.log(err)) */


    // Database to Find
    db.collection('users').find({ad: 'hazal'}, {limit:6}).toArray().then(bulunanVeriler => {
        console.log(bulunanVeriler.length);
    })

    // hazal isimli veriden kaç tane olduğunu bulmA
    db.collection('users').find({ad: 'hazal'}).count().then(sayi => console.log(sayi));

    // hazal isimli verilerden limitli şekilde almak
    db.collection('users').find({ad: 'hazal'}).limit(1).toArray().then(sayi => console.log(sayi));

    // Filtrelem yaparken tek özel seçim yapılacaksa findOne metodu kullanılabilir
    db.collection('users').findOne({ad: 'hazal'}).then(gelenUser => console.log("findOne", gelenUser));

    //id ye göre seçim
    db.collection('users').findOne({_id: new ObjectID('62f7843e97aa92f6a7adf2ee')}).then(gelenUser => console.log(gelenUser));


})