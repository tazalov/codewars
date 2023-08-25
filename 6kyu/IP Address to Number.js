/* 
An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum (or ip_to_num, depending on the language) that takes an ip address and converts it to a number, as well as the function numToIp (or num_to_ip) that takes a number and converts it to an IP address string. Input will always be valid.

Conversion Example
//original IP address
192.168.1.1

//breaks down into 4 binary octets
11000000 . 10101000 . 00000001 . 00000001

//which are merged together (unsigned 32-bit binary)
11000000101010000000000100000001

//and finally converted to base 10
3232235777
Note that the binary octets are unsigned (so we can't have negative numbers).

Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.

Examples
ipToNum / ip_to_num
'192.168.1.1' converts to 3232235777
'10.0.0.0'    converts to  167772160
'176.16.0.1'  converts to 2953838593
numToIp / num_to_ip
3232235777 converts to '192.168.1.1'
 167772160 converts to    '10.0.0.0'
2953838593 converts to  '176.16.0.1'
*/

function ipToNum(ip) {
  const arr = ip
    .split('.')
    .map((el) => Number(el).toString(2).padStart(8, '0'));
  return parseInt(arr.join(''), 2);
}

function numToIp(num) {
  let str = num.toString(2).padStart(32, '0');
  const temp = [];
  for (let i = 0; i < str.length; i += 8) {
    temp.push(str.slice(i, i + 8));
  }
  return temp.map((el) => parseInt(el, 2)).join('.');
}
