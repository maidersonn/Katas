/**
 * Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and
 * each uppercase letter becomes lowercase. For example:
 *  "hello WORLD".toAlternatingCase() === "HELLO world"
    "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
 */

String.prototype.toAlternatingCase = function () {
  const isUpperCase = (str) => str === str.toUpperCase();
  let result = [];
  this.split("").forEach((elmt) => {
    let switched = isUpperCase(elmt) ? elmt.toLowerCase() : elmt.toUpperCase();
    result.push(switched);
  });
  return result.join("");
};
