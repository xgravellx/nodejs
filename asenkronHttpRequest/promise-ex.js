console.log("Başladı");
console.log("Bitti");

function getUser(id) {
    
    return new Promise((resolve, reject) => {
        console.log(`${id} idli user getiriliyor`);
        setTimeout(() => {
            resolve({id: id, ad: "hazal"});
        },1500)
    })
}

function getCourse(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['java', 'flutter', 'kotlin']);
        }, 2000);
    })
}

function getComments(courseName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Harika bir kurs");
        }, 2000);
    })
}

getUser(123)
    .then(userObj => getCourse(userObj.ad))
    .then(kursDizisi => getComments(kursDizisi[0]))
    .then(yorum => console.log(yorum));
