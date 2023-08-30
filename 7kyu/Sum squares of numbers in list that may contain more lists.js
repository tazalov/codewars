/* 
var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
*/

const SumSquares = (l) =>
  l.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return (acc += SumSquares(el));
    } else {
      return (acc += el ** 2);
    }
  }, 0);
