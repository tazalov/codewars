/* 
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
  const resultArray = new Array();
  const subArray = Array(2 * nFloors - 1).fill(' ');
  for (let i = 1; i <= nFloors; i++) {
    if (i === 1) {
      subArray[nFloors - 1] = '*';
      resultArray.push(subArray.join(''));
    } else {
      subArray[nFloors - i] = '*';
      subArray[nFloors + i - 2] = '*';
      resultArray.push(subArray.join(''));
    }
  }
  return resultArray;
}
