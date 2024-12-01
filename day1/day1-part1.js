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

function getDifference(firstSet, secondSet) {
  let difference = [];
  let total = 0;
  for (let i = 0; i < firstSet.length; i++) {
    difference.push(Math.abs(firstSet[i] - secondSet[i]));
  }
    difference.forEach(num => {
        total += num;
        //console.log(total);
    } );
  return total;
}

console.log(getDifference(firstSet, secondSet));