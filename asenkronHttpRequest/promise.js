const myPromise = new Promise((resolve, reject) => {
    console.log("3 saniyelik işlem başladı");
    setTimeout(() => {
        console.log("İşlem bitti");
        // resolve("İşlem sonucu burada");
        reject("Hata çıktı");
    }, 3000);
})

myPromise.then((sonuc) => {
    console.log(sonuc);
}).catch((err) => {
    console.log("Hataaaaaaaaaaa"); 
})