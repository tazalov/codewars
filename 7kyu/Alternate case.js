/* 
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  const sArr = s.split('');
  const newArr = sArr.map((el) => {
    if (isLC(el)) {
      return el.toUpperCase();
    }
    return el.toLowerCase();
  });
  return newArr.join('');
}

const isLC = (char) => char === char.toLowerCase();

/* 
function alternateCase(s) {
  return s.split('').map(function(el) {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  }).join('');
}
*/
