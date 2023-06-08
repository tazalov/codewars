/* 
Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

function deleteDigit(n) {
  const nArr = n.toString().split('');
  const integerArr = [];
  for (let i = 0; i < nArr.length; i++) {
    const tempArr = [...nArr];
    tempArr.splice(i, 1);
    integerArr.push(tempArr.join(''));
  }
  const result = integerArr.map(Number).sort((a, b) => b - a);
  return result[0];
}
