const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test').then(_=> { 
    console.log("veritabanına bağlanıldı");

}).catch(err => console.log("hata çıktı" + err));

// Örnek 1
const schema = new Schema({ name : String});
console.log(schema.path('name') instanceof mongoose.SchemaType);
console.log(schema.path('name') instanceof mongoose.Schema.Types.String);
console.log(schema.path('name').instance);


// Örnek 2
const numberSchema = new Schema({
    integerOnly :{
        type : Number,
        get: v => {
            console.log('getter tetiklendi v:' + v);
            return Math.round(v) + 1;
        },
        set: v => {
            console.log('setter tetiklendi v:' + v);
            return Math.round(v) + 5;
        },
        alias: 'i'
    }
})

const Numara = mongoose.model('Numara', numberSchema);

var doc = new Numara();
doc.integerOnly = 2.005;
console.log(doc.integerOnly);

console.log(doc.i);
doc.i = 14.005;
console.log(doc.integerOnly);
console.log(doc.i); 


// Örnek 3
const metinSchema = new Schema({
    metin: {
        type: Schema.Types.String, // tipi string olmalı
        required: true, // zorunlu alan
        trim: true, // sağdan soldan boşluklar silinin
        lowercase: true, //tümü küçük harf olmalı
        minlength: 4, // min 4 karakter
        maxlength: 50, // max 50 karakter
        enum: ['emre', 'hasan', 'ayşe', 'can'], // metin alanları sadece bunları içerebilir
        validate: {
            validator: function(v) {
                return v.length > 2; // v nin uzunluğunu kontrol eder
        },
        message: 'buraya tıklandı'
    }
    }
    
});

const Metin = new mongoose.model('Metin', metinSchema);
const m1 = Metin({metin:'emre'});
m1.save();