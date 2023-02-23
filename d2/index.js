const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovi'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'},

];
//zadaca 1
/*let studentiPrvaZadaca = studenti.filter((s) => {
    return (s.grad === 'Skopje' && s.ime.endsWith('a') && s.prosek > 7);
});
studentiPrvaZadaca.sort((a, b) => {
    if (a.ime < b.ime) return 1;
    if (a.ime > b.ime) return -1;
    if (a.ime === b.ime) return 0;
});
console.log(studentiPrvaZadaca);
//zadaca 2
let studentiVtoraZadaca = studenti.filter((s) => {
    return (s.prosek > 9 && s.grad !== 'Skopje');
});
studentiVtoraZadaca.sort((a, b) => {
    if (a.prosek > b.prosek) return -1;
    if (a.prosek < b.prosek) return 1;
    if (a.prosek === b.prosek) return 0;
})
console.log(studentiVtoraZadaca);
//zadaca 3
let studentiTretaZadaca = studenti.filter((s) => {
    return s.ime.length === 5;
});
studentiTretaZadaca = studentiTretaZadaca.slice(0, 3);
studentiTretaZadaca.sort((a, b) => {
    if (a.prosek > b.prosek) return 1;
    if (a.prosek < b.prosek) return -1;
    if (a.prosek === b.prosek) return 0;
});
console.log(studentiTretaZadaca);*/
//zadaca 4
let set = new Set(studenti.map(s => s.grad));
//console.log(set);
let res = Array.from(set).map(g => {
    let sbroj = studenti.filter(s => s.grad === g).length;//kolku studenti se od odreden grad
    let svkupno = studenti.reduce((acc, v) => {
        if (v.grad === g){//dali studentot e od odreden grad
            return acc + v.prosek;//go sobirame prosekot so prosecite na studentite od istiot grad
        }
        return acc;//vrati ja prethodnata sostojba
    }, 0);
    return {
        grad: g,
        prosek: svkupno / sbroj
    }
}).sort((a, b) => {
    if (a.prosek > b.prosek) return -1;
    if (a.prosek < b.prosek) return 1;
    if (a.prosek === b.prosek) return 0;
});
console.log(res)

//zadaca 5
/*let studentiNaA = studenti.filter((s) => {
    return s.ime.endsWith('a');
});
let studentiA = studentiNaA.reduce((acc, s) => {
    return acc + s.prosek;
}, 0);
console.log(studentiA);
let studentiB = studenti.filter((s) => {
    return !s.ime.endsWith('a');
});
let studentiNaB = studentiB.reduce((acc, s) => {
    return acc + s.prosek;
}, 0);
console.log(studentiNaB)*/
