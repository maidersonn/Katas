/*
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

foo 789 -> 790

Attention: If the number has leading zeros the amount of digits should be considered.
*/


function incrementString (string) {
    let lastElement = parseInt(string.substr(-1)); 

    if (isNaN(lastElement)) return string + 1;
    if (lastElement < 9) return  string.slice(0, -1) + (lastElement + 1);
    return incrementString(string.slice(0, -1)) + 0;
}