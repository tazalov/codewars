/* 
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
This kata inspired by Sort rectangles and circles by area.
*/

function sortByArea(array) {
  let result = [...array];
  result.sort((a, b) => {
    let aa = whatIs(a);
    let bb = whatIs(b);
    if (aa - bb < 0) {
      return -1;
    }
    if (aa - bb > 0) {
      return 1;
    }
    return 0;
  });
  return result;
}

const whatIs = (el) => {
  if (Array.isArray(el)) {
    return el.reduce((acc, element) => acc * element);
  } else {
    return Math.pow(el, 2) * Math.PI;
  }
};
