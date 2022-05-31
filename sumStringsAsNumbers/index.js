/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/



function sumStrings(a,b) { 

    return (BigInt(a || "0") + BigInt(b || "0")).toString();
   }

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
