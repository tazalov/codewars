/* 
The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

Another example
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Note that the added character could also exist in the original string

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

Write the function addedChar() that takes two strings and return the added character as described above.
*/

function addedChar(s1, s2) {
  const newStr1 = s1.split('').sort();
  const newStr2 = s2.split('').sort();
  for (let i = 0; i < newStr2.length; i++) {
    if (newStr1[i] !== newStr2[i]) return newStr2[i];
  }
}

//best

/* 
function addedChar(s1, s2){
 let s11 = [...s1].sort()
 let s22 = [...s2].sort()
 return s22.find((el, i) => el !== s11[i])
}
*/
