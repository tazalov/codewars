/* 
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

function remove(string) {
  const arr = string.split(' ');
  const res = arr.reduce((acc, el) => {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (el[i] === '!') count++;
    }
    if (count !== 1) acc.push(el);
    return acc;
  }, []);
  return res.join(' ');
}
