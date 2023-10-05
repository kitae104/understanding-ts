function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedIntAges = combine(30, 26, 'as-number');
console.log(combinedIntAges);
var combinedStringAges = combine('30', '26', 'as-text');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
