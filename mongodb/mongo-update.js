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

    // güncelleme
    db.collection('users').updateMany({ad: 'new hazal'}, {
        $set: {
            ad: 'hazal',
        },
        $inc: { // yas değişkenini 50 arttır
            yas:50,
        }
    }).then(sonuc => console.log(sonuc));

    // delete
    db.collection('users').deleteMany({
        ad:'hazal',
    }).then(sonuc => console.log(sonuc));



})