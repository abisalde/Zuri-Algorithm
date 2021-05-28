'use strict';

const convertFahrToCelsius = (F) => {
    let valueType = Array.isArray(F) ? 'array' : typeof F;
    console.log(valueType);

    // For invalid strings like 'ABCS' or '0.Q@2'
    let inValidStr = isNaN(parseFloat(F));
    let value = '';
    let result = '';

    switch (valueType) {
        case 'number':
        case 'string':
            inValidStr
                ? (value += F)
                : (result += `${((parseInt(F - 32) * 5) / 9).toFixed(4)}`);
            break;

        case 'array':
        case 'object':
            value = JSON.stringify(F);
            break;

        default:
            value = String(F);
            break;
    }
    return inValidStr
        ? `${value} is not a valid number but a/an ${valueType}`
        : result;
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
console.log(convertFahrToCelsius('ABCDG'));
console.log(convertFahrToCelsius(true));
