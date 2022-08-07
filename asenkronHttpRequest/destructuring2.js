let kisi = {
    ad: {
        firstName: "hazel",
        lastName: "yilmaz"
    },
    sevdigiRenkler: ["siyah", "beyaz"],
    yas: 24
};

const {
    ad: {
        firstName,
        lastName
    },
    sevdigiRenkler: [item1, item2],
    yas
} = kisi;
console.log(`${firstName} ${item2}`);


function kisiyiGoster(isim = "Bilinmiyor", yas = 0, boyu = 180, sevdigiRenkler= []) {

}

kisiyiGoster("hazal", undefined, undefined, ["yesi"]);

const parametreler = {
    isim : "hazal",
    sevdigiRenkler : ['yesil', 'mavi']
}
function kisiyiGoster2({isim = "bilinmiyor", sevdigiRenkler = [], yas =0, boy = 0}) {
    console.log(isim + " " + yas);
}