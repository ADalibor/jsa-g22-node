const {read, write} = require('./io')

const getAllStudents = async () => {
    return await read();
};

const addStudent = async (studentData) => {
    let students = await read();
    students.push(studentData);
    await write(students);
};

const deleteStudent = async (studentIndex) => {
    let students = await read();
    students = students.filter((s, i) => i !== studentIndex);
    await write(students);
};

const editStudent = async (studentIndex, studentData) => {
    let students = await read();
    students = students.map((s, i) => {
        if(i === studentIndex) {
            return {
                ...s,
                ...studentData
            };
        }
        return s;
    });
    await write(students);
};

module.exports = {
    getAllStudents,
    addStudent,
    deleteStudent,
    editStudent
}