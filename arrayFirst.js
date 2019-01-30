let arrFirst = ['afirst1', 'afirst2', 'afirst3'];
let arrList = ['a1', 'afirst3', 'a2', 'afirst1', 'a3'];
let arrFst = [];
let arrLst = [];

arrList.map( (id, index) => {
    if( arrFirst.indexOf(id) >  -1 )
        arrFst.push(id)
    else 
        arrLst.push(id)
});

console.log(arrFst);
console.log(arrLst);