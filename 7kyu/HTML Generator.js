/* 
Another rewarding day in the fast-paced world of WebDev. Man, you love your job! But as with any job, somtimes things can get a little tedious. Part of the website you're working on has a very repetitive structure, and writing all the HTML by hand is a bore. Time to automate! You want to write some functions that will generate the HTML for you.

To organize your code, make of all your functions methods of a class called HTMLGen. Tag functions should be named after the tag of the element they create. Each function will take one argument, a string, which is the inner HTML of the element to be created. The functions will return the string for the appropriate HTML element.

For example,

JavaScript:

var g = new HTMLGen();
var paragraph = g.p('Hello, World!');
var block = g.div(paragraph);

// The following are now true
paragraph === '<p>Hello, World!</p>'
block === '<div><p>Hello, World!</p></div>'
Python:

g = HTMLGen();
paragraph = g.p('Hello, World!')
block = g.div(paragraph)

# The following are now true
paragraph == '<p>Hello, World!</p>'
block == '<div><p>Hello, World!</p></div>'
Your HTMLGen class should have methods to create the following elements:

a
b
p
body
div
span
title
comment
Note: The comment method should wrap its argument with an HTML comment. It is the only method whose name does not match an HTML tag. So, g.comment('i am a comment') must produce <!--i am a comment-->.
*/

class HTMLGen {
  constructor() {}
  a(str) {
    return `<a>${str}</a>`;
  }
  b(str) {
    return `<b>${str}</b>`;
  }
  p(str) {
    return `<p>${str}</p>`;
  }
  body(str) {
    return `<body>${str}</body>`;
  }
  div(str) {
    return `<div>${str}</div>`;
  }
  span(str) {
    return `<span>${str}</span>`;
  }
  title(str) {
    return `<title>${str}</title>`;
  }
  comment(str) {
    return `<!--${str}-->`;
  }
}

function HTMLGen() {
  this.div = (s) => '<div>' + s + '</div>';
  this.b = (s) => '<b>' + s + '</b>';
  this.p = (s) => '<p>' + s + '</p>';
  this.a = (s) => '<a>' + s + '</a>';
  this.body = (s) => '<body>' + s + '</body>';
  this.span = (s) => '<span>' + s + '</span>';
  this.title = (s) => '<title>' + s + '</title>';
  this.comment = (s) => '<!--' + s + '-->';
}

/*
function HTMLGen() {}

['a', 'b', 'p', 'body', 'div', 'span', 'title'].forEach(function(tag) {
  HTMLGen.prototype[tag] = function(content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
  }
})

HTMLGen.prototype.comment = function(content) {
  return '<!--' + content + '-->'
}
*/
