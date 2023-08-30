/* 
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return (acc += arraySum(el));
    } else if (!Number.isNaN(+el)) {
      return (acc += el);
    }
    return acc;
  });
}
