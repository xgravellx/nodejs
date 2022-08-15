const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test').then(_ => {
    console.log("veritabanına bağlanıldı");
}).catch(err => console.log("Bağlantıda hata çıktı"));

var blogSchema= new Schema({
    title: String,
    author: String,
    body: String,
    comments:[{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number,
    }
}, {collection: 'yazilarim', minimize: false});

const Blog = mongoose.model('blog', blogSchema);
const myBlog = new Blog({title: 'ilk blog'});

myBlog.save().then(b => console.log(b)).catch(hata => console.log(hata));

Blog.create({title: 'İkinci blogum'});