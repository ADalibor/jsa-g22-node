const express = require ('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let data = {
        ime: 'Pero',
        prezime: 'Perovski',
        niza: ['Skopje', 'Bitola', 'Tetovo', 'Debar', 'Ohrid'],
        studenti: [
            {ime: 'Pero', prezime: 'Perovski', prosek: 9.2},
            {ime: 'Goran', prezime: 'Goranovski', prosek: 8.2},
            {ime: 'Dejan', prezime: 'Dejanovski', prosek: 7.3},
            {ime: 'Stojan', prezime: 'Stojanovski', prosek: 6.2},
            {ime: 'Petar', prezime: 'Petrovski', prosek: 8.0},
        ]
    }
    res.render('index', data);
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Service started on port 10000');
});