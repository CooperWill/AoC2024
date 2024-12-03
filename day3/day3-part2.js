const fs = require('fs');
let input;


function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        input = data.toString()
    } catch (error) {
        console.error('Error!@#:', error);
    }
}

readFile('./day3input.txt');

//console.log(input)

const bigList = getData(input);
const justTheStats = trimFat(bigList);



const cleanArray = separateProblems(justTheStats);
console.log(doCalcs(cleanArray))


function getData(numbers){
    const numberArray = numbers.trim()

    return numberArray;
}

function trimFat(string){
    return string.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g)?.join(" ") || "";

}

function separateProblems(bigString){
    const cleanArray = bigString
        .split(" ");

    return cleanArray;
}

function doCalcs(array){
    let total = 0;
    let safeFlag = true;

    let numbers = array[0].match(/\d+/g).map(Number);

    for(let i = 0; i < array.length; i++){
        if (array[i] === "do()"){
            safeFlag = true;

        }else if(array[i] === "don't()"){
            safeFlag = false;


        }else if(safeFlag){
            numbers = array[i].match(/\d+/g).map(Number);
            total += (numbers[0] * numbers[1]);
        }

    }

    return total;

}