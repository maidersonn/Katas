const morse = '···· · −·−−   ·−−− ··− −·· ·';

const threeSpacesRegex = /\s{3,}/

const words = morse.split(threeSpacesRegex);

const solution = [];

words.forEach((word) => {
    let decodedWord =  "";
    const letters = word.split(" ");
    for(const letter of letters) {
        // code morse
        decodedWord = decodedWord + letter;
    } 
    solution.push(decodedWord);
})
const final = solution.join(" ")
console.log(final);