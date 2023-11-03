/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  let sharpIdx = url.indexOf('#')
  return sharpIdx === -1 ? url : url.slice(0, sharpIdx)
}

//or
const removeUrlAnchor = url => url.replace(/#.+$/,'');