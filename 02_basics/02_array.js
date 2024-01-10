const marval_heros = ['ironmarn','spiderman','hulk'];

// console.log(marval_heros);

const dc_heros = ['superman','flash','Batman']

// console.log(dc_heros)

//merge array - way :1

// marval_heros.push(dc_heros);
// console.log(marval_heros)

//merge array - way :2

// const allHeros = marval_heros.concat(dc_heros);
// console.log('all heros',allHeros);

//merge array - way :3 (spread operator)
const my_heros = [...marval_heros,...dc_heros];
// console.log(my_heros);

// flat()

// const another_array = [1,2,3,[4,5,6],7,8,[9,10,11,12,[13,14,15]]]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array)


console.log(Array.isArray('avishkar'))
console.log(Array.from('avishkar'))
console.log(Array.from({name:'avishkar'})) //return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

