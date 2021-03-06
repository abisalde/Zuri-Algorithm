const checkYuGiOh = (n) => {
    var n;

    // if statements to verify the values passed into the _CheckYuGiOh_ is valid
    if (isNaN(n) === true) {
        if (Array.isArray(n) === true) {
            return 'invalid parameter: ' + JSON.stringify(n);
        } else if (typeof n === 'object') {
            return 'invalid parameter: ' + JSON.stringify(n);
        } else {
            return 'invalid parameter: ' + JSON.stringify(n);
        }
    } else {
        let value;

        value = multipleFactors(n);

        // Creating a functions to replace the multiple factors numbers (2, 3, 5) to phrases ('yu', 'gi', 'oh')
        function multipleFactors(params) {
            var params;
            var newArr = [];
            for (k = 1; k <= params; k++) {
                if (k % 2 === 0 && k % 3 === 0 && k % 5 === 0) {
                    newArr.push('yu-gi-oh');
                } else if (k % 2 === 0 && k % 3 === 0) {
                    newArr.push('yu-gi');
                } else if (k % 2 === 0 && k % 5 === 0) {
                    newArr.push('yu-oh');
                } else if (k % 3 === 0 && k % 5 === 0) {
                    newArr.push('gi-oh');
                } else if (k % 5 === 0) {
                    newArr.push('oh');
                } else if (k % 3 === 0) {
                    newArr.push('gi');
                } else if (k % 2 === 0) {
                    newArr.push('yu');
                } else {
                    newArr.push(k);
                }
            }
            return newArr;
        }
        return value;
    }
};

console.log(checkYuGiOh(10));
console.log(checkYuGiOh('5'));
console.log(checkYuGiOh('fizzbuzz is meh'));
console.log(checkYuGiOh(20));
console.log(checkYuGiOh(30));
