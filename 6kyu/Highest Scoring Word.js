/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let xArray = x.split(' ');
  const summWordArray = xArray.map((el) => {
    let sumForCurretnEl = 0;
    for (let i = 0; i < el.length; i++) {
      const indexInAlph = alph.indexOf(el[i]);
      sumForCurretnEl += indexInAlph + 1;
    }
    return sumForCurretnEl;
  });
  const indexBiggestSummEl = summWordArray.indexOf(Math.max(...summWordArray));
  return xArray[indexBiggestSummEl];
}
