/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
*/

function anagrams(word, words) {

    const wordHistograma = getHistograma(word);
    const solution = []

    words.forEach(element => {
        const elementHistograma = getHistograma(element);
        if(areEquals(elementHistograma, wordHistograma)) {
            solution.push(element);
        }
    });
  
    return solution;
}


const getHistograma = (word) => {
    const histograma = {};

    for(const letter of word) {
        histograma[letter] = histograma[letter] ? histograma[letter] + 1 : 1;
    }
    return histograma;
} 


const areEquals = (obj1, obj2) => {

    for(const p in obj1){
            if(obj1[p] !== obj2[p]){
                return false;
            } 
    }

    for(var p in obj2){
            if(obj1[p] !== obj2[p]){
                return false;
            }
    }

    return true;
}

console.log(anagrams('abba', ['bbaa', 'baba','abba', 'ddf', 'aaabb']));