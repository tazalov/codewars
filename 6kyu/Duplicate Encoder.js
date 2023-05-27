/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word) {
  const resultArr = [];
  const newString = word.toLowerCase();
  const replaceArr = [')', '('];
  for (let i = 0; i < newString.length; i++) {
    const wordArr = newString.split('');
    wordArr.splice(i, 1);
    wordArr.includes(newString[i])
      ? resultArr.push(replaceArr[0])
      : resultArr.push(replaceArr[1]);
  }
  return resultArr.join('');
}
