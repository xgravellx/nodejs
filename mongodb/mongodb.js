/* const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId; */

const {MongoClient, ObjectID} = require('mongodb');

const databaseURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'test';

MongoClient.connect(databaseURL, (error, result) => {
    if (error) {
        return console.log("mongoya bağlanılamadı");
    }
    console.log("db ye bağlanıldı");
    const db=  result.db(databaseName);

    const myID = new ObjectID();
    console.log(myID.id.length);
    console.log(myID.getTimestamp());

    db.collection('test').insertOne({
         _id: myID,
         ad: 'hazal',
         updateID: myID,
    }).then(snc => console.log(snc));

    /* db.collection('users').insertOne({
        ad: 'çağrı',
        yas: 24
    }, (error, sonuc) => {
        if (error) {
            console.log("veri eklenemedi");
        } else {
            console.log(sonuc);
        }
    }) */


})