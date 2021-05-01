const express = require('express');


const router = express.Router();

const books = [
    { title: 'The Lord of the Rings', summary: 'Frodo Baggins continues the story of his uncle Bilbo as his uncles ring finds its way into his posession.' },
    { title: 'The Wheel of Time', summary: 'Three young farm boys are suddenly thrust into a world of adventure when a woman of the Aes Sedai, a group of powerful and magical women, comes to town.' },
    { title: 'The Expanse', summary: 'Hundreds of years in the future, humans have expanded onto Mars and into the Belt. Earth and Mars are in a cold war, and the Belt tries compete with the main powers.' }
];


router.get('/', (req, res, next) => {
    res.render('prove02', { pageTitle: 'Prove02', path: '/prove02', novels: books });
});

router.post('/getBooks', (req, res, next) => {
    books.push({ title: req.body.title, summary: req.body.summary });
    console.log(books);
    res.redirect('/list');
});

router.get('/list', (req, res, next) => {
    res.render('list', { pageTitle: 'Prove02', path: '/list', novels: books });
});

module.exports = router;