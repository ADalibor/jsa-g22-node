//student [ime, prezime, prosek, grad]
//CRUD
//dodavanje na student vo fajlot
//brisenje na student od fajlot
//menuvanje na podatoci na student od fajlot
//citanje na site studenti od fajlot

/*-treba da dodademe student vo fajlot
1. da ja vcitate celata sodrzina od fajlot | fs.readFile
2. da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt | JSON.parse
3. treba da gi dodadete podatocite na studentot vo nizata | Array.push
4. nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
5. tekstot treba da bide zacuvan vo fajlot | fs.writeFile

- Imeto na studentot treba da bide smeneto od AAA vo AAB
1. da ja vcitate celata sodrzina od fajlot | fs.readFile
2. da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt | JSON.parse
3. da gi izminete site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
4. nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
5. tekstot treba da bide zacuvan vo fajlot | fs.writeFile

- treba da se izbrise student od fajlot
1. da ja vcitate celata sodrzina od fajlot | fs.readFile
2. da ja konvertirate sodrzinata od obicen tekst vo js niza/objekt | JSON.parse
3. da gi izminete site elementi vo nizata i da go izbrisete samo soodvetniot clen | Array.filter
4. nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
5. tekstot treba da bide zacuvan vo fajlot | fs.writeFile */

/*

(async () => {
    let students = await getAllStudent();
    console.log(students);

    await insertStudent({ime: 'Pero', prezime: 'Perovski', prosek: 9.2, grad: 'Bitola'});

    let students = await getAllstudents();
    console.log(students);//da go ima pero vo listata

    //modifikacija
    await modifyStudent(0, {ime: 'Pero', prezime: 'Perovski', prosek: 8.1, grad: 'Bitola'});

    let students = await getAllstudents();
    console.log(students);//da bide smenet prosekot na pero

    //brisenje
    await deleteStudent(0);

    let students = await getAllstudents();
    console.log(students);//pero da go nema vo listata
})





*/



