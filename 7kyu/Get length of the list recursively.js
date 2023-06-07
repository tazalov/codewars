/* 
Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/

function lenR(x) {
  if (x.length === 0) {
    return 0;
  } else {
    return 1 + lenR(x.slice(1));
  }
}
