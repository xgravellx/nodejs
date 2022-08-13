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

    // delete
    db.collection('users').deleteMany({
        ad:'hazal',
    }).then(sonuc => console.log(sonuc));

    // deleteOne ilk bulduğu veriyi siler 
})