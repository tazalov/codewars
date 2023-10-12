/* 
The hamming distance between a pair of numbers is the number of binary bits that differ in their binary notation.

Example
For a = 25, b = 87, the result should be 4

25: 00011001
87: 01010111
The hamming distance between these two would be 4 ( the 2nd, 5th, 6th, 7th bit ).

Input/Output
[input] integer a
First Number. 1 <= a <= 2^20

[input] integer b
Second Number. 1 <= b <= 2^20

[output] an integer
Hamming Distance
*/

const getValideStr = (str, len) => {
  if (str.length < len) {
    str = '0'.repeat(len - str.length) + str
  }
  return str
}

function hammingDistance (a, b) {
  let aDec = a.toString(2)
  let bDec = b.toString(2)
  
  let maxLen = aDec.length > bDec.length ? aDec.length : bDec.length
  
  aDec = getValideStr(aDec, maxLen)
  bDec = getValideStr(bDec, maxLen)
  
  let count = 0
  
  for (let i = maxLen - 1; i >= 0; i--) {
    if (aDec[i] !== bDec[i]) {
      count += 1
    }
  }
  
  return count
}