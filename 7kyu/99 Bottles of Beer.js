/* 
Instructions
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

var sing = function () {
  let countBeer = 99;
  let songArray = [];
  for (let i = countBeer; i >= 0; i--) {
    let firstString = `${i} bottle${
      i === 1 ? '' : 's'
    } of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.`;
    let secondString;
    if (i === 1) {
      secondString = `Take one down and pass it around, no more bottles of beer on the wall.`;
    } else if (i === 0) {
      firstString = `No more bottles of beer on the wall, no more bottles of beer.`;
      secondString = `Go to the store and buy some more, 99 bottles of beer on the wall.`;
    } else {
      secondString = `Take one down and pass it around, ${i - 1} bottle${
        i === 2 ? '' : 's'
      } of beer on the wall.`;
    }
    songArray.push(firstString, secondString);
  }
  return songArray;
};
