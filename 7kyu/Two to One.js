/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const alphArray = alph.split('');
  const result = alphArray.reduce((acc, el) => {
    if (s1.includes(el) || s2.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
  return result.join('');
}
