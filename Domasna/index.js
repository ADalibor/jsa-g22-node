const fs = require('fs');

const fileWrite = (filename, data) => { 
    return new Promise((success, fail) => {
      fs.writeFile(filename, data, (err) => {
        if (err) return fail(err);
          return success();
      });
    });
  };

fileWrite('domasna1.txt', "Nov fajl so promise!")
.then(()=>{
    console.log('Zapisot e uspesen!')
})
.catch(err=>{
    console.log(err);
})



const renameFile = (oldFile, newFile) => { 
    return new Promise((success, fail) => {
      fs.rename(oldFile, newFile, (err) => {
        if (err) return fail(err);
          return success();
      });
    });
  };

renameFile('domasna1.txt', "DOMASNA!.txt", )
.then(()=>{
    console.log('Imeto e promeneto!')
})
.catch(err=>{
    console.log(err);
})