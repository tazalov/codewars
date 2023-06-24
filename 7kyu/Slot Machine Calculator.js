/* 
t's casino time and you're playing on a slot machine with 15 fields, placed in 3 rows of 5, containing the following symbols: "9","10","J","Q","K","A".

Example:

["Q","K","A","A","A"],
["10","A","Q","9","J"]
["A","A","A","J","K"]
There are 5 winning lines:

- empty fields can contain any symbol
- "X" can be any field, but must not change value

Line 1

["X","X","X","X","X"]
["","","","",""]
["","","","",""]

Line 2

["","","","",""]
["X","X","X","X","X"]
["","","","",""]

Line 3

["","","","",""]
["","","","",""]
["X","X","X","X","X"]

Line 4

["X","","","","X"]
["","X","","X",""]
["","","X","",""]

Line 5

["","","X","",""]
["","X","","X",""]
["X","","","","X"]
A line is valid if it has at least 3 connected fields, either horizontally or diagonally (depending on line type):

Invalid line

["X","","","",""]
["","","","",""]
["","","","",""]

Invalid line

["X","X","","",""]
["","","","",""]
["","","","",""]

---

Valid line

["X","X","X","",""]
["","","","",""]
["","","","",""]

Valid line

["X","X","X","X",""]
["","","","",""]
["","","","",""]

Valid line

["X","X","X","X","X"]
["","","","",""]
["","","","",""]
Each line must start on the left-most column:

Not a line

["","","","",""]
["","","","",""]
["","","X","X","X"]

Not a line

["","","","X",""]
["","","X","","X"]
["","X","","",""]
To implement a function calculateWin, you now need a win table:

3 in a row --> 50 points
4 in a row --> 150 points
5 in a row --> 300 points
This example would result in 100 points because of line 3 and 5 being placed with 3 As:

["Q","K","A","A","A"],
["10","A","Q","9","J"]
["A","A","A","J","K"]

Line 3 (50 points)

["","","","",""],
["","","","",""]
["A","A","A","",""]

Line 5 (50 points)

["","","A","",""],
["","A","","",""]
["A","","","",""]
*/

function calculateWin(lines) {
  let res = 0;
  res += getpoints(lines[0].join(''));
  res += getpoints(lines[1].join(''));
  res += getpoints(lines[2].join(''));
  res += getpoints(
    lines[0][0] + lines[1][1] + lines[2][2] + lines[1][3] + lines[0][4]
  );
  res += getpoints(
    lines[2][0] + lines[1][1] + lines[0][2] + lines[1][3] + lines[2][4]
  );

  return res;
}

function getpoints(str) {
  str = str.replace(/10/g, 'T');

  if (str == str[0].repeat(5)) {
    return 300;
  } else if (str.startsWith(str[0].repeat(4))) {
    return 150;
  } else if (str.startsWith(str[0].repeat(3))) {
    return 50;
  }
  return 0;
}
