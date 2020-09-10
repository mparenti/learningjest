function handleNull (possibleNull) {
    if (possibleNull === null) {
        throw new Error('You cannot snake case a null value');
    }
}

function handleUndefined (possibleUndefined) {
    if (possibleUndefined === undefined) {
        throw new Error('You cannot snake case an undefined value');
    }
}

function handleNumber (possibleNumber) {
    if (typeof(possibleNumber) === "number") {
        throw new Error('You cannot snake case a number');
    }
}

function handleBoolean (possibleBoolean) {
    if (typeof(possibleBoolean) === "boolean") {
        throw new Error('You cannot snake case a boolean');
    }
}


// function kebabToSnake (stringToConvert) {
//     handleNull(stringToConvert);
//     handleUndefined(stringToConvert);
//     handleNumber(stringToConvert);
   
//     var result = '';
//     // f-b 
//     for (var i = 0; i < stringToConvert.length; i++) {
//         // console.log('result before loop iteration: ' + result)
//         if (stringToConvert[i] === '-') {
//             result += '_';
//         } else {
//             result += stringToConvert[i];
//         } 
//        // console.log('result after loop iteration: ' + result)

//     }
//     return result;
// }

function kebabToSnake (stringToConvert) {
    handleNull(stringToConvert);
    handleUndefined(stringToConvert);
    handleNumber(stringToConvert);
    handleBoolean(stringToConvert);
    return stringToConvert.replace('-', '_');
}

module.exports = kebabToSnake;