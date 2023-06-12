/* 
Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.
*/

var Calculator = {};
Calculator.add = (x, y) => x + y;
Calculator.subtract = (x, y) => x - y;
Calculator.multiply = (x, y) => x * y;
Calculator.divide = (x, y) => (y !== 0 ? x / y : false);
