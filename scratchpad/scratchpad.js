const fs = require('fs');

const array = [1, 2, 3, 1, 7];
let arrayCopy = array;
let sortedArray = array.slice().sort((a, b) => a - b);
let reversedArray = []


console.log(array)
console.log(sortedArray)

