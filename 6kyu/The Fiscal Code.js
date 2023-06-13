/* 
Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale).

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Notes:

The date format of the Date of Birth (dob) is: d/m/Y for example 25/12/2008.
*/

const months = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T',
};

const getRepStr = (str, regExp) => str.replace(regExp, '');
const addX = (str) => {
  while (str.length < 3) {
    str += 'x';
  }
  return str;
};

function fiscalCode(person) {
  const a = ['a', 'o', 'e', 'i', 'u', 'y'];
  const vowelsN = getRepStr(person.name, /[^aoeiu]+/gi);
  const consonantsN = getRepStr(person.name, /[aoeiu]+/gi);
  let resName = '';
  if (consonantsN.length === 3) {
    resName = consonantsN;
  } else if (consonantsN.length > 3) {
    resName = consonantsN[0] + consonantsN[2] + consonantsN[3];
  } else {
    resName = (consonantsN + vowelsN).slice(0, 3);
  }
  if (resName.length < 3) {
    resName = addX(resName);
  }
  let resSurname = '';
  const vowelsS = getRepStr(person.surname, /[^aoeiu]+/gi);
  const consonantsS = getRepStr(person.surname, /[aoeiu]+/gi);
  if (consonantsS.length >= 3) {
    resSurname = consonantsS.slice(0, 3);
  } else {
    resSurname = (consonantsS + vowelsS).slice(0, 3);
  }
  if (resSurname.length < 3) {
    resSurname = addX(resSurname);
  }
  const dArr = person.dob.split('/').map(Number);
  let resYear = String(dArr[2]);
  resYear = resYear.slice(resYear.length - 2);
  const resMonth = months[dArr[1]];
  let resDay = '';
  if (person.gender === 'F') {
    resDay = dArr[0] + 40;
  } else {
    dArr[0] < 10 ? (resDay = '0' + dArr[0]) : (resDay = dArr[0]);
  }
  return (resSurname + resName + resYear + resMonth + resDay).toUpperCase();
}
