'use strict';

const convertFahrToCelsius = (F) => {
    let valueType = '';

    // Checking for the typeof variables
    if (typeof F !== 'number' && isNaN(Number(F))) {
        valueType = F + ' is not a valid number but a/an ' + `${typeof F}`;
    } else {
        // Calculating the Value of Fanhrenheit after values pass checking
        valueType = `${(((parseFloat(F) - 32) * 5) / 9).toFixed(4)}`;
    }
    console.log(valueType);
    return valueType;
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
