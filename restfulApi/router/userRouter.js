const router = require('express').Router();
/* const router = express.Router(); */
const User = require('../models/userModel');
var createError = require('http-errors');

router.get('/',async (req, res) => {
    const tumUserlar = await User.find({});
    res.json(tumUserlar);
});

router.get('/:id', (req, res) => {
    res.json({mesaj : "idsi:" + req.params.id + "olan user listelenecek"});
});

router.post('/', async (req, res) => {

    try {
        const eklenecekUser = new User(req.body);
        const sonuc = await eklenecekUser.save();
        res.json(sonuc);
    }catch (err) {
        console.log("user kaydederken hata" + err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const sonuc= await User.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true});        
        if (sonuc) {
            return res.json(sonuc);
        } else {
            return res.status(404).json({
                mesaj: "güncellenirken hata oldu",
            })
        }
    } catch (error) {
        console.log("user güncellenirken hata çıktı " + error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const sonuc= await User.findByIdAndDelete({_id: req.params.id});
        if(sonuc) {
             return res.json(sonuc);
        } else {
            throw createError(404, "kullanıcı bulunamadı");
        }
    } catch (e) {
        next(e);
    }
});




module.exports = router;