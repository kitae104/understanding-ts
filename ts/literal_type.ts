function combine3(
  n1: number | string, 
  n2: number | string,
  resultConversion: 'as-number' | 'as-text',
){  
  let result;
  if(typeof n1 === 'number' && typeof n2 === 'number'|| resultConversion === 'as-number') {
    result = +n1 + +n2;
  } else {
    result= n1.toString() + n2.toString();
  }
  return result;
}

const combinedIntAges2 = combine3(30, 26, 'as-number');
console.log(combinedIntAges2);

const combinedStringAges2 = combine3('30', '26', 'as-number');
console.log(combinedStringAges2);

const combinedNames3 = combine3('Max', 'Anna', 'as-text');
console.log(combinedNames3);