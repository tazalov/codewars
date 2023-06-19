/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  let res = '';
  const numArr = String(num).split('').map(Number);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 && numArr[i + 1] % 2) {
      res += `${numArr[i]}-`;
    } else {
      res += numArr[i];
    }
  }
  return res;
}


function add() {
  return 0;
}