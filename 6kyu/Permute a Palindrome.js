/* 
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

For this kata assume that all characters are lowercase.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome(input) {
  if (input.length < 2) return true;

  const codeChar = input.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  for (const key in codeChar) {
    if (codeChar[key] % 2 === 0) {
      delete codeChar[key];
    } else {
      codeChar[key] = codeChar[key] % 2;
    }
  }

  return Object.values(codeChar) <= 1;
}

const permuteAPalindrome = (str) => {
  let set = new Set();
  for (let char of str) {
    set[set.has(char) ? 'delete' : 'add'](char);
  }
  return set.size < 2;
};
