// 사용자 정의 타입 (alias)
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  n1: Combinable, 
  n2: Combinable,
  resultConversion: ConversionDescriptor,
){  
  let result;
  if(typeof n1 === 'number' && typeof n2 === 'number'|| resultConversion === 'as-number') {
    result = +n1 + +n2;
  } else {
    result= n1.toString() + n2.toString();
  }
  return result;
}

const combinedIntAges = combine(30, 26, 'as-number');
console.log(combinedIntAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
