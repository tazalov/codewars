/* 
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false  
*/

function onlyOne() {
  let countTrue = 0
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i]) countTrue++
    if (countTrue > 1) return false
  }
  return countTrue === 1
}

const onlyOne = (...args) => args.filter(Boolean).length === 1