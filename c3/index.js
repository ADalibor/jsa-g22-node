/*C - create
R - read
U - update
D - delete*/

const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 99, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovi'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'},

];

//1.Site studenti od SK cie ime zavrsuva na a imaat prosek nad 7, podredeni po ime rastecko,
//2.Site studenti koi imaat prosek nad 9 i ne se od skopje, podredeni po prosek opagjacki,
//3.Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek.
//4.Gradovi podredeni po grupna visina na prosek
//5.Vkupen prosek na studenti cii ime zavrsuva na a nasproti site ostanati

// forEach, map, reduce, sort, filter, find

// forEach gi izminuva site elementi od nizata, ne vrakja nikakov rezultat
//console.log(s.ime);
//studenti.forEach(s => {
//})
//map izminuva niza za promeni na istata rezultatot e nova niza
//reducira/namaluva/sumira niza na eden edinstven rezultat
/*let ocenki = studenti.reduce((acc, s) => {
    return acc + s.prosek;
}, 0);
console.log(ocenki);*/

/*studenti.sort((a, b) => {
    if (a.prosek < b.prosek) return -1;
    if (a.prosek > b.prosek) return 1;
    return 0;

})
console.log(studenti)*/
//sortira elementi vo nizata spored dadena funkcija za sortiranje
/*studenti.sort((a, b) => {
    if (a.ime < b.ime) return -1;
    if (a.ime > b.ime) return 1;
    return 0;

})
console.log(studenti)*/
//vrakja niza od elementi koi odgovaraat na postaveniot uslov
//let studentiFilter = studenti.filter((s) => {
   //return s.ime === 'Pero';
   //return s.ime.endsWith('a');
//   return s.prosek > 8;

//});
//console.log(studentiFilter);
// vrakja element od nizata koj odgovara na postaveniot uslov
let studentiFind = studenti.find((s) => {
    return s.ime === "Pero";
});
console.log(studentiFind);
