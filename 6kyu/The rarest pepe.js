/* 
The pepe market is on the verge of collapse. In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more. Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.
Your task in this kata is to implement a function that, given a list of pepes (pepes), returns the rarest pepe in the list. If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order. Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.
More info on rare pepes here.
*/

function findRarestPepe(pepes) {
  const pepesCountObj = pepes.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  let minValue = Infinity;

  for (const key in pepesCountObj) {
    if (pepesCountObj[key] < minValue) {
      minValue = pepesCountObj[key];
    }
  }

  const result = [];

  for (const key in pepesCountObj) {
    if (pepesCountObj[key] === minValue) {
      result.push(key);
    }
  }

  return minValue < 5
    ? result.length === 1
      ? result[0]
      : result.sort()
    : 'No rare pepes!';
}
