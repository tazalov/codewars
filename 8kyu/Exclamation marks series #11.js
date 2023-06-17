/* 
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s) {
  const viowel = 'aeiouAEIOU';
  const arr = s.split('');
  return arr
    .map((el) => {
      if (viowel.includes(el)) {
        el = '!';
        return el;
      }
      return el;
    })
    .join('');
}

/*
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
*/
