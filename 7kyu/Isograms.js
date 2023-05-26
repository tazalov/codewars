/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str) {
  let arrayStr = str.split('');
  let res = arrayStr.reduce((acc, el) => {
    let newEl = el.toLowerCase();
    if (!acc.includes(newEl)) {
      acc.push(newEl);
    }
    return acc;
  }, []);
  return res.length === str.length ? true : false;
}
