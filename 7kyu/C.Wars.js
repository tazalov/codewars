/* 
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.

Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.
*/

function initials(n) {
  const nArr = n.split(' ');
  const resArr = [];
  for (let i = 0; i < nArr.length; i++) {
    if (i === nArr.length - 1) {
      resArr.push(nArr[i][0].toUpperCase() + nArr[i].slice(1));
    } else {
      resArr.push(`${nArr[i][0].toUpperCase()}.`);
    }
  }
  return resArr.join('');
}

/* 
const initials = str => str
  .replace(/\b\w/ig, m => m.toUpperCase())
  .replace(/\w+\s/ig, m => m[0] + '.');
*/
