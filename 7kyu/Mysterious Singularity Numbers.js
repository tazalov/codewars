/* 
This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

Task
The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

Example
Let's take the number 5 as an example:

1 - doesn't divide integer by 2, 3, and 5
2 - divides integer by 2
3 - divides integer by 3
4 - divides integer by 2
5 - divides integer by 5
Answer: 1

because only one number doesn't divide integer by any of 2, 3, 5
*/

function realNumbers(n) {
  const dict = [1, 7, 11, 13, 17, 19, 23, 29];
  const mod = n % 30;
  const length = dict.filter((e) => e <= mod);
  return Math.floor(n / 30) * 8 + length.length;
}
