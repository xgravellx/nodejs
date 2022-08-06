// kişiler json tabanlı bir dosyada tutulacak 
// dosyadan veriler okunup js dizisine dönüştürülecek
// jsonu js objelerine dönüştürmek için JSON.parse(json),, objeleri jsona dönüştürmek için JSON.stringify(jsDizisi)
// dosyadan okunan değerler Buffer tipindedir, tostring diyerek okunabilir json değerler dönüştürülebilir.

const ekle = function (isim, telNo) {
    console.log(`Eklenecek Kişi ${isim} Tel No: ${telNo}`);
}

const sil = function (isim) {
    console.log(`Silinecek Kişi: ${isim}`);
}

const goster = function (isim) {
    console.log(`Gösterilecek Kişi: ${isim}`);
}

const listele = function () {
    console.log(`Tüm rehberi göster`);
}

module.exports = {
    kisiEkle: ekle,
    kisiSil: sil,
    kisiGoster: goster,
    kisiListele: listele
}