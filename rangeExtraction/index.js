/*
A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

function solution(list){
  
    return list.reduce((accu, current, index, array) => {
        if (current === array[0]) return accu + current;
        return isConsecutive(current, array[index -1]) ? accu + `/${current}` : accu + `,${current}`
    }, ``)
    .split(",")
   .map(makeRanges)
   .join()


}

const makeRanges = (element) => {
    const array = element.split("/")
    return array.length > 2 ? `${array[0]}-${array[array.length-1]}`: element.split("/").join();
};

const isConsecutive = (num1, num2) => {
    return num1 - num2 === 1 || num1 - num2 === -1; 
} 

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));