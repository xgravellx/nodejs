const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

app.use(express.json());

function m1(req, res, next) {
    console.log("m1 deyim");
    next();
}
app.use(m1);
app.use((req, res, next) => {
    console.log("m2 deyim");
    res.send("m2 tamamlandı");
});

console.log("burada");

app.listen(3000, () => {
    console.log("Server 3000 portunu dinliyor");
});