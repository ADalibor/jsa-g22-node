const http = require('http');

const handler = (req, res) => {

    const [_, name, a] = req.url.split('/');
    console.log(name, a);

    let karakteri = a.length;
    let parnoIme = karakteri % 2 === 0 ? 'da' : 'ne';
    let samoglaski = '';
    let soglaski = karakteri - samoglaski;
    res.end(`karakteri: ${karakteri}, parno: ${parnoIme}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`);
    
    //switch (a) {
    //    case 'Aleksandra':
    //        res.end(`karakteri: ${karakteriBroj}`, `parno: ${parnoIme}` );
    //    break;
    //    default:
    //        res.end('ok');    
    //};
        
};

const server = http.createServer(handler);
server.listen(9999, err => {
    if(err) return console.log(err);
    console.log('Server successfully started!');
});