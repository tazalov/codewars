/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  const pattern = 'aeiou';
  const strArray = str.split('');
  const strObject = strArray.reduce((acc, el) => {
    if (pattern.includes(el)) {
      el = el.toLowerCase();
      acc[el] = (acc[el] || 0) + 1;
    }
    return acc;
  }, {});
  const arrayCount = Object.values(strObject);
  if (arrayCount.length) {
    return arrayCount.reduce((acc, el) => (acc += el));
  } else {
    return 0;
  }
}
