/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let stringArray = s.split('');
  return stringArray
    .map(
      (el, i) =>
        el[0].toUpperCase() +
        el
          .repeat(i + 1)
          .slice(1)
          .toLowerCase()
    )
    .join('-');
}
