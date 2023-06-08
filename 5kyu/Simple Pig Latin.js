/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  const strArr = str.split(' ');
  const pigArr = strArr.map((el) =>
    /\w/.test(el) ? `${el.slice(1)}${el[0]}ay` : el
  );
  return pigArr.join(' ');
}
