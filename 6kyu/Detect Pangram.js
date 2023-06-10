/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  const clearStrArr = string
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split('');
  const countCharObj = clearStrArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  return Object.keys(countCharObj).length === alph.length;
}

/* 
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
*/
