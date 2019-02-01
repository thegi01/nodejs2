
let today = 20190201;
let arr = [20190207, 20190201];

let idx = arr.findIndex( date => {
    return today - date >=0;
});

console.log(idx);
