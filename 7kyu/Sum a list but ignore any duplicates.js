/* 
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  const hash = {}
  numList.forEach(el => {
    hash[el] = (hash[el] || 0) + 1
  })
  
  const arr = []
  numList.forEach(el => {
    if (hash[el] === 1) {
      arr.push(el)
    }
  })
  
  return arr.reduce((acc, num) => acc + num, 0)
}