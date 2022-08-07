// array destructuring

let isim = ['hazal', 'yılmaz'];
let [firstName, lastName] = isim;
console.log(`${firstName} ${lastName}`);

let [a, b] = "Lorem ipsum".split(' ');
console.log(a);
console.log(b);

let [ilk, , son] = ['sarı', 'mavi', 'beyaz'];
console.log(ilk + " " + son);

let [ad1, ad2, ...ad3] = ['ahmet', 'mehmet', 'ali', 'fatma', 'ayse'];
console.log(ad3);

let [s1="bilinmiyor", s2="bilinmiyor"] = [];
console.log(s1);

// object destructuring
let options = {
    title: "Menu",
    width: 100,
    height: 100
}
let {title, width, height} = options;
console.log(title + " " + width + " " + height);

const kisi = {
    ad: "Hazal",
    yas: 24
}
const {ad:x, yas:y} = kisi;
console.log(x +" "+ y); 

const meslek = "engineer";
const il = "Kocaeli";
const person = {
    meslek,
    il
}

console.log(person);

