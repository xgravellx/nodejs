const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());

const kullanicilar = [
    {id:1, ad: 'ahmet', yas: '22'},
    {id:2, ad: 'ayşe', yas: '12'},
    {id:3, ad:'ali', yas: '54'},
    {id:4, ad: 'zeynep', yas: '34'},
]

app.get('/', (req, res) => {
    console.log("ana sayfaya gidildi");
    res.send("merhaba from index");
})

app.get('/users', (req, res) => {
    res.send(kullanicilar);
})

app.get('/users/:id', (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if(bulunanUser) {
        res.send(bulunanUser);
    }
    else {
        res.status(404).send(`${req.params.id} idli kullanıcı bulunamadı.`)
    }
})

app.post('/users', (req, res) => {

    const schema = Joi.object({
        ad: Joi.string().min(3).max(30).required(),
        yas: Joi.number().integer().min(10).max(99).required(),
    })
    const sonuc = schema.validate(req.body);
    console.log(sonuc);

    if(sonuc.error) {
        res.status(400).send(sonuc.error.details[0]);
    }
    else {
        const yeniKullanici = {
            id: kullanicilar.length + 1, 
            ad: req.body.ad,
            yas: req.body.yas,
        }
    
        kullanicilar.push(yeniKullanici);
        res.send(yeniKullanici);
    }    
})

app.put('/users/:id', (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id));
    if(!bulunanUser) {
       return res.status(404).send(`${req.params.id} idli kullanıcı bulunamadı`); 
    }
    const {error} = kullaniciBilgileriniOnayla(req.body);

    if(error) {
        res.status(400).send(sonuc.error.details[0]);
    }
    else {
        bulunanUser.ad = req.body.ad;
        bulunanUser.yas = req.body.yas;
    
        res.send(yeniKullanici);
    }
    
})

function kullaniciBilgileriniOnayla(user) {
    const schema = Joi.object({
        ad: Joi.string().min(3).max(30).required(),
        yas: Joi.number().integer().min(10).max(99).required(),
    })
    return schema.validate(user);
}

app.listen(3000, () => {
    console.log("Server 3000 portunu dinliyor");
});
