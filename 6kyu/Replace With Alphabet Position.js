/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const resultArray = [];
  const textLowerCase = text.toLowerCase();
  for (const el of textLowerCase) {
    if (alph.includes(el)) {
      resultArray.push(alph.indexOf(el) + 1);
    }
  }
  return resultArray.join(' ');
}

/*
  .replace(/[^a-zA-Z]+/g, '')
  */

  console.log("  *\n ***\n*****\n ***\n  *\n");