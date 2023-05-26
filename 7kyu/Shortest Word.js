/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const sArray = s.split(' ');
  const res = sArray.reduce((acc, el) => {
    if (acc.length > el.length) {
      acc = el;
    }
    return acc;
  });
  return res.length;
}
