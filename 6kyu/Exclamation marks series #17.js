/* 
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
  const weight = {
    '!': 2,
    '?': 3,
  };
  let leftW = 0;
  for (let l of left) {
    leftW += weight[l];
  }
  let rightW = 0;
  for (let r of right) {
    rightW += weight[r];
  }
  if (leftW > rightW) {
    return 'Left';
  } else if (leftW === rightW) {
    return 'Balance';
  } else {
    return 'Right';
  }
}
