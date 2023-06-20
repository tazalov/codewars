/* 
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

function product(string) {
  const exc = string.replace(/[^!]+/g, '').length;
  const ques = string.replace(/[^?]+/g, '').length;
  return exc * ques;
}
