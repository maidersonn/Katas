/*Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas
*/



function solution(input, markers) {
    const lines = input.split("\n");


    return lines.reduce((acc, currentLine) => {
        let line = cleanMarkers(currentLine, markers).replace(/\s+$/, '');
        if (acc.length) { acc += "\n"};
        return acc + line
    }, "");
    
  };


const cleanMarkers = (stringLine, markers) => {
    let solution = stringLine;
    markers.forEach(marker => {
        const markerPosition = solution.indexOf(marker);
        if (markerPosition >= 0) {
            solution = solution.slice(0, markerPosition);
        }
    });
    return solution;
}



const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result); 
// result should == "apples, pears\ngrapes\nbananas"
