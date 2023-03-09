const express = require ('express');

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/ime/:a', (req, res) => {
    
});

app.post('/ime', (req, res) => {
    let ime = req.body.ime;
    let parno = ime.length % 2 === 0 ? 'da' : 'ne';
    let samoglaski = ["a", "e", "i", "o", "u"];
    let broj = 0;
    for (let bukva of ime) {
        if (samoglaski.includes(bukva)){
            broj++;
        }
    }
});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started successfully on port 10000');
});