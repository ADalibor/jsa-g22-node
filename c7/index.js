const express = require ('express');

const app = express();//kreira nova express aplikacija

app.use(express.urlencoded({extended: true}))

app.get('/zdravo', (req, res) => {
    res.send('Zdravo svetu');
});

app.get('/zdravo/:ime', (req, res) => {
    res.send(req.params.ime);//req.params.ime = :ime (vo URL-to)
})

app.get('/calculator/:op/:a/:b', (req, res) => {
    switch(req.params.op) {
        case 'sobiranje':
            return res.send(`${Number(req.params.a) + Number(req.body.b)}`);
        case 'odzemanje':
            return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
        case 'mnozenje':
            return res.send(`${Number(req.params.a) * Number(req.params.b)}`); 
        case 'delenje':
            return res.send(`${Number(req.params.a) / Number(req.params.b)}`);               
    }
});

app.post('/calculator', (req, res) => {
    switch(req.body.operacija) {
        case 'sobiranje':
            return res.send(`${Number(req.body.a) + Number(req.body.b)}`);
        case 'odzemanje':
            return res.send(`${Number(req.body.a) - Number(req.body.b)}`);
        case 'mnozenje':
            return res.send(`${Number(req.body.a) * Number(req.body.b)}`); 
        case 'delenje':
            return res.send(`${Number(req.body.a) / Number(req.body.b)}`);               
    }
    res.send(req.body.operacija);

});

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started successfully on port 10000');
});

