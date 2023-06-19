/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x) {
  const num = x.filter((el) => typeof el === 'number');
  const str = x.filter((el) => typeof el === 'string');
  const numSum = num.length ? num.reduce((a, b) => a + b) : 0;
  const strSum = str.length ? str.reduce((a, b) => +a + +b) : 0;
  return numSum - strSum;
}
