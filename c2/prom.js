const fs = require('fs');//vcituvanje na paket/modul za rabota so filesystem - fajlovi i direktoriumi

fs.writeFile(
    'data.txt',//fajlot kade kje se zapise
     'HELLO WORLD...Node...:(',//sto kje bide zapisano vo fajlot
      (err) => { //funkcijata koja kje se izvrsi otkako kje zavrsi zapisot
        if(err) return console.log(err);
        console.log('zapisot e napraven!')
}
);


fs.writeFile('data.txt','HELLO WORLD...Node...:(',(err) => {
        if(err) return console.log(err);
        console.log('zapisot e napraven!');
}
);

//PROMISE
//cekor 1
//const fileWrite = () => {

//};

//cekor 2
//const fileWrite = () => {
//    return new Promise();
//};

//cekor 3
//const fileWrite = () => {
//    return new Promise(() => {

//    })
//};

//cekor 4
//const fileWrite = () => {
 //   return new Promise((success, fail) => {
        
//    })
//};

//cekor 5
//const fileWrite = () => {
//    return new Promise((success, fail) => {
//        fs.writeFile('data.txt','HELLO WORLD...Node...:(',(err) => {
//            if(err) return fail(err);
//            console.log('zapisot e napraven!');
//    }
//    );
        
//    })

//};

//cekor 6
//const fileWrite = () => {
//    return new Promise((success, fail) => {
//        fs.writeFile('data.txt','HELLO WORLD...Node...:(',(err) => {
//            if(err) return fail(err);
//            return success;
//    }
//    );
//    })

//};

//cekor 7
//const fileWrite = (filename, data) => {
//    return new Promise((success, fail) => {
//        fs.writeFile(filename,data,(err) => {
//            if(err) return fail(err);
//            return success();
 //   });
//    });
//};

fileWrite('data1.txt', "Nov fajl so zapis od promise!")
.then(()=>{
    console.log('zapisot e uspesen!(vo noviot fajl)')
})
.catch(err=>{
    console.log(err);
})

(async () => {
    try{
        await fileWrite('data1.txt', 'Nov fajl so zapis od promise!');
    } catch(err) {
        console.log(err);
    }
})


const main = async () => {
    try{
        await fileWrite('data1.txt', 'Nov fajl so zapis od promise!');
        await fileWrite('data1.txt', 'Nov fajl so zapis od promise!');
        await fileWrite('data1.txt', 'Nov fajl so zapis od promise!');
    } catch(err) {
        console.log(err);
    }
};
main();

