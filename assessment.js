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

const checkYuGiOh = (n) => {
    let n;
    if (Array.isArray(n) === true) {
        if (isNaN(n) === true) {
            console.log('invalid parameter: ' + JSON.stringify(n));
            return n;
        } else if (typeof n === 'object') {
            console.log('invalid parameter: ' + JSON.stringify(n));
            return n;
        } else {
            console.log('invalid parameter: ' + JSON.stringify(n));
            return n;
        }
    } else {
        value = multipleFactors(n);

        function multipleFactors(params) {
            let params;
            let newArrr = [];
            for (k = 1; k <= params; k++) {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    newArrr.push('yu-gi-oh');
                } else if (i % 2 === 0 && i % 3 === 0) {
                    newArrr.push('yu-gi');
                }
            }
        }
    }
};

console.log(checkYuGiOh(10));
console.log(checkYuGiOh('5'));
console.log(checkYuGiOh('fizzbuzz is meh'));

console.log(typeof Array.isArray(1));
