const c2f = (c) => {
    return c * 1.8 + 32;
};//reusable funkcija

const f2c = (f) => {
    console.log((f - 32) * 5 / 9); 
};//ne reusable funkcija

let res1 = c2f(12);
console.log(res1);
f2c(100);

const fun = (parm, c) => {
    let r = parm(c) + 100;
    return r;
};

console.log('FUN:', fun(c2f, 12));