/* 
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/

function remove(string) {
  const res = [];
  const marks = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '!') {
      res.push(string[i]);
    } else {
      marks.push(string[i]);
    }
  }
  return res.concat(marks).join('');
}

/* 
function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}
*/
