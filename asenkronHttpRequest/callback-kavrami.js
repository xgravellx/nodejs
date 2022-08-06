console.log("Program başladı");

getuser(12345, (userObject) => {
    getCourse(userObject.ad, (kursDizisi) => {
        getComments(kursDizisi[0])
    })
});

console.log("Program bitti");

function getuser(id, callback) {
    console.log(`${id} idli user getiriliyor`);
    setTimeout(() => {
        callback({id: id, ad: "hazal"});
    },1500)
}

function getCourse(userName, callback) {
    console.log(`${userName} kişisinin kursları getiriliyor`);
    setTimeout(() => {
        callback(['java', 'flutter', 'kotlin']);
    }, 2000);
}

function getComments(kursAdi) {
    console.log(`${kursAdi} isimli kursun yorumları getiriliyor`);
    setTimeout(() => {
        console.log("Harika bir kurs");
    }, 2000);
}