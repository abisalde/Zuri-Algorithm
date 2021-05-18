'use strict';

const convertFahrToCelsius = (F) => {
    let valueType = '';

    // Checking for the typeof variables
    if (typeof F !== 'number' && Object.is(NaN, F)) {
        valueType = F + ' is not a valid number but a/an ' + `${typeof F}`;
    } else if (Array.isArray(F) === true) {
        valueType = F + ' is not a valid number but a/an array';
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

// if (Array.isArray(F) === true)

// if (typeof F !== 'number' && isNaN(Number(F)))
function fahr2cel(input) {
    let type = '';
    switch (true) {
        case Object.is(NaN, input):
            type = 'NaN';
            break;
        case typeof input === 'number':
            return (((input - 32) * 5) / 9).toFixed(4);
        case Array.isArray(input):
            type = 'Array';
        default:
            type = typeof input;
            break;
    }

    return `${
        typeof input === 'object'
            ? JSON.stringify(input, (_, value) => {
                  if (
                      typeof value in
                          ['bigint', 'symbol', 'undefined', 'function'] ||
                      value in [Infinity, -Infinity] ||
                      Object.is(NaN, value)
                  )
                      return String(value);
                  return value;
              })
            : input
    } is not a valid number but a/an ${type}`;
}
console.log(fahr2cel([1, 2, 3]));
console.log(fahr2cel({ temp: 0 }));
