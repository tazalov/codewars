/* 
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

const reverse = function (array) {
  const copyArray = [...array];
  for (let i = 1; i <= copyArray.length / 2; i++) {
    let temp = copyArray[i - 1];
    copyArray[i - 1] = array[copyArray.length - i];
    copyArray[copyArray.length - i] = temp;
  }
  return copyArray;
};

/*
const reverse = function(array) {
var newArr = [];
for (var i = array.length-1; i>=0; i--){
	newArr.push(array[i]);
}
return newArr;
}
*/
