const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restful_api')
    .then(() => console.log("veritabanına bağlanıldı"))
    .catch(hata => console.log("HATA VARR!!!" + hata));
