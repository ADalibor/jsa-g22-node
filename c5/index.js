const fs = require('fs');

const dumbFunction = () => {
    throw 'AN ERROR HAPPENED!';
};

const readFile = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return success(data);
        })
    });
};

try {
    //kod koj sto sakate da se izvrsi
    readFile('pero.txt');
    dumbFunction();
} catch(err){
    console.log(err);
}


