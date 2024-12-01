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

readFile('./day1input.txt');

const firstSet = [];
const secondSet = [];
function dataToArray(input) {
    const lines = input.split('\n');


    lines.forEach(line => {
        const [num1, num2] = line.split(/\s+/).map(Number);
        firstSet.push(num1); // Add the first number to the first array
        secondSet.push(num2); // Add the second number to the second array
    });

}

dataToArray(input);
firstSet.sort();
secondSet.sort();


function similarityScore(firstSet, secondSet) {
    const frequencies = [];
    let total = 0;

    for (let i = 0; i < firstSet.length; i++){
        frequencies[i] = calculateFrequency(secondSet, firstSet[i]);
    }
    frequencies.forEach(num => {
        total += num;
    });

    return total;
}

function calculateFrequency(array, value) {

    return array.filter(item => item === value).length * value;

}

console.log(similarityScore(firstSet,secondSet))

