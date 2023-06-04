/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

const cubeOdd = (arr) => {
  const areNumbers = arr.every((element) => typeof element === 'number');
  if (!areNumbers) return undefined;

  return arr
    .map((number) => number ** 3)
    .filter((number) => number % 2 !== 0)
    .reduce((total, value) => total + value, 0);
};
