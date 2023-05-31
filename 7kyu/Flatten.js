/* 
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/

/*
const flatten = (array) => [].concat(...array);
*/

var flatten = function (array) {
  const copyArg = [...array];
  if (!copyArg.length) {
    return [];
  } else {
    const result = copyArg.reduce((acc, el) => {
      if (Array.isArray(el)) {
        acc = [...acc, ...el];
      } else {
        acc.push(el);
      }
      return acc;
    }, []);
    return result;
  }
};
