const express = require ('express');
const fs = require ('fs');
const { getCalculator } = require('./controllers/calculator');

const app = express();

app.use (express.urlencoded({extended: true}));

app.get('/calculator', calc.getCalculator);

app.post('/calculator', async (req, res) => {
    let result = "";
    switch(req.body.op) {
        case 'sobiranje':
            result = `${Number(req.body.a) + Number(req.body.b)}`;
            break;
        case 'odzemanje':
            result = `${Number(req.body.a) - Number(req.body.b)}`;
            break;
        case 'mnozenje':
            result = `${Number(req.body.a) * Number(req.body.b)}`; 
            break;
        case 'delenje':
            result = `${Number(req.body.a) / Number(req.body.b)}`;               
            break;
        default:
            result = `nepoznat operator!`;
    }
    try {
    let output = await parseTemplate('calculator', result);
    res.send(output)
    } catch(err){
        console.log(err);
        res.status(500).send('internal server error');
    }
});


app.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started');
});