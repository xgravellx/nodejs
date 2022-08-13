const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test').then(_=> { 
    console.log("veritabanına bağlanıldı");

}).catch(err => console.log("hata çıktı" + err));

const userSchema = new mongoose.Schema({
    isim : String,
});

const User = mongoose.model('user', userSchema);

const hazal = User({isim : 'Hazal'});
hazal.save().then(sonuc => console.log(sonuc)).catch(hata => console.log(hata));