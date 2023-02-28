const {getAllStudents, addStudent, editStudent, deleteStudent} = require('./students');

(async () => {
    try {
        await addStudent({
            ime: 'Pero',
            prezime: 'Perovski',
            godina: 2022
        });

        let students = await getAllStudents();
        console.log(students);

        await editStudent(0, {
            ime:'Jovan',
            prosek: 9.2
        });

        students = await getAllStudents();
        console.log(students);

        await deleteStudent(0);

        students = await getAllStudents();
        console.log(students);

    } catch(err) {
        console.log('ERROR', err);
    } finally {
        console.log('END OF CODE')
    }
})();