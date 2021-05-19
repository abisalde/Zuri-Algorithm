'use strict';

const convertFahrToCelsius = (F) => {
    let valueType = Array.isArray(F) ? 'array' : typeof F;
    console.log(valueType);
    let value = '';

    switch (valueType) {
        case 'number':
        case 'string':
            return `${(((F - 32) * 5) / 9).toFixed(4)}`;

        case 'array':
            value = `[${F}]`;
            break;

        case 'object':
            value = JSON.stringify(F);
            break;

        default:
            value = Number(F);
            break;
    }
    return `${value} is not a valid number but a/an ${valueType}`;
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius('0'));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
