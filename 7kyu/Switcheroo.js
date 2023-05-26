/* 
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
  let y = x.split('');
  return y
    .map((el) => {
      console.log(el);
      if (el === 'a') {
        return (el = 'b');
      } else if (el === 'b') {
        return (el = 'a');
      } else {
        return (el = el);
      }
    })
    .join('');
}
