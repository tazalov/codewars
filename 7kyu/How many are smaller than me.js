/* 
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/

function smaller(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const copy = nums.slice(i);
    let counter = 0;
    for (let j = 0; j < copy.length; j++) {
      if (nums[i] > copy[j]) counter++;
    }
    res.push(counter);
  }
  return res;
}

/* 
function smaller(nums) {
 return nums.map((n, i) => {
   return nums.slice(i).filter(v => v < n).length
 });
}
*/
