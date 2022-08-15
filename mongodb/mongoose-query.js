const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test').then(_ => {
    console.log("veritabanına bağlanıldı");
}).catch(err => console.log("Bağlantıda hata çıktı"));

const userSchema = new Schema({}, {collection: 'user'});
const User = mongoose.model('user', userSchema);

/* User.find({age:22}, {name:1, company:1, age: 1}).then(tumUserlar => console.log(tumUserlar)).catch(err => console.log(err));
 */

// Karşılaştırma Operatörleri
/*
eq: Eşitlik
ne: Eşit olmayan
gt, gte, lt, lte, in, min
*/



/* User.find({age : {$ne: 38}}, {name:1, age:1}).then(userlar => console.log(userlar)); */

// Sayfalama Yaparken
const sayfaNumarasi = 4;
const sayfaBasinaGonderi = 10;
User.find({})
    .skip((sayfaNumarasi -1) * sayfaNumarasi)
    .limit(sayfaBasinaGonderi)
    .then(sonuc => console.log(sonuc));