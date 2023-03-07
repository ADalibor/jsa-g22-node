const fs = require('fs');

const read = async () => {
    return new Promise((success, fail) => {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if(err) return fail(err);
        data = JSON.parse(data);
        return success(data);
        });
    }); 
};

const write = async (data) => {
    return new Promise((success, fail) => {
        data = JSON.stringify(data);
        fs.writeFile('data.json', data, err => {
            if(err) return fail(err);
            return success();
        });
    });
};

const getAllStudents = async () => {
    return await read();
};
const addStudent = async (sData) => {
    let students = await read();
    students.push(sData);
    await write(students);
};