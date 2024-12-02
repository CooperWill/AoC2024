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

readFile('./day2input.txt');



const bigList = getData(input);

function getData(numbers){
    const numberArray = numbers
        .trim()
        .split('\n')
        .map(line => line.split(' ').map(Number));
    return numberArray;
}



function confirmSafety(array){
    let safeZones = 0;

    for(let i = 0; i < array.length; i++){
        const subArray = array[i];
        if(validateSubarray(subArray)){
            safeZones += 1;
        }else if(isSafeWithOneRemoval(subArray)){
            safeZones += 1;
        }

    }

    return safeZones;
}

function validateSubarray(subarray){ //checks to make sure the given subarray meets all criteria

    for (let i = 0; i < subarray.length; i++){
        if (subarray[0] === subarray[subarray.length - 1]){
            return false;
        }
        if (subarray[i] === subarray[i + 1]){

            return false;

        }
        if (subarray[0] < subarray[subarray.length - 1]){
            if (subarray[i] > subarray[i + 1] || subarray[i + 1] - subarray[i] >= 4){

                return false;
            }
        }
        if (subarray[0] > subarray[subarray.length - 1]){
            if (subarray[i] < subarray[i + 1] || subarray[i] - subarray[i + 1] >= 4){

                return false;
            }
        }
    }

    return true;

}

function isSafeWithOneRemoval(array) {
    return array.some((_, yx) => {
        const modifiedArray = array.slice(0, yx).concat(array.slice(yx + 1));
        return validateSubarray(modifiedArray);
    });
}


console.log(confirmSafety(bigList));





