/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  const stringArray = string.split('');
  const resArray = [];
  stringArray.map((el, i) => {
    if (el.toUpperCase() === el) {
      resArray.push(' ', el);
    } else {
      resArray.push(el);
    }
  });
  return resArray.join('');
}
