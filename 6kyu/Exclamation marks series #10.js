/* 
Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word
Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

function remove(s) {
  const arr = s.split(' ');
  const marks = arr.map((el) => el.split(/[a-zA-Z]+/));
  const newArr = arr.map((el) => el.replace(/[^a-zA-Z]/g, ''));
  const marksCount = marks.map((el) => {
    const len1 = el[0].length;
    const len2 = el[1].length;
    return Math.min(len1, len2);
  });
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(
      `${'!'.repeat(marksCount[i])}${newArr[i]}${'!'.repeat(marksCount[i])}`
    );
  }
  return res.join(' ');
}

function remove1(s) {
  return s.replace(/!*?((!*)\w+\2)!*/g, '$1');
}
