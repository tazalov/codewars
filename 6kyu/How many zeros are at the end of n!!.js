/* 
Define n!! as

n!! = 1 * 3 * 5 * ... * n if n is odd,

n!! = 2 * 4 * 6 * ... * n if n is even.

Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.

For a positive integer n, please count how many zeros are there at the end of n!!.

Example:

30!! = 2 * 4 * 6 * 8 * 10 * ... * 22 * 24 * 26 * 28 * 30 
30!! = 42849873690624000 (3 zeros at the end)
*/

function countZeros(n) {
    let multi = 1n
    for (let i = n % 2 ? 1 : 2; i <= n; i += 2) {
        multi *= BigInt(i)
    }
    const res = multi.toString().match(/0+$/g)
    return res ? res[0].length : 0
}
