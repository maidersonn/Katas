function mix(s1, s2) {
 
    const o1 = extractLowercases(s1);
    const o2 = extractLowercases(s2);

    return makeOneMixedObject(o1, o2)
        .sort(comparator)
        .reduce((accu, object) => accu +`${object.prefix}:${object.content}/`, '')
        .slice(0, -1);
}
const comparator = (a, b) => {
    if (a.content.length > b.content.length) return -1;
    if (a.content.length < b.content.length) return 1;
    
    if (a.prefix > b.prefix) return 1;
    if (a.prefix < b.prefix) return -1;
    
    return a.content > b.content? 1 : -1          
};

const makeOneMixedObject = (o1, o2) => {
    const solution = [];

    for (const key in o1) {
        const valueLength = o1[key].length;

        if((valueLength > 1 && !o2[key]) || (valueLength > 1 && o1[key] > o2[key])){
            solution.push({prefix: '1', content: o1[key]});
            continue;
        }
        if(valueLength > 1 && o1[key] === o2[key]) {
            solution.push({prefix: "=", content: o1[key]})
            continue;
        }
   
        if(valueLength >= 1 && o1[key] < o2[key]) {
            solution.push({prefix: '2', content:o2[key]})
            continue;
        }
    };

    for (const key in o2) {
        if (o1[key]) continue;
        if (o2[key].length > 1) solution.push({prefix: '2', content:o2[key]}); 
    }

    return solution;
}

const extractLowercases = (string) => {
    const solution = {};

    for (let character of string) {
        if(isLowercaseLetter(character)){
            if(!solution[character]) {
                solution[character] = character;
            } else {
                solution[character] += character;
            }
        }
    }
    return solution; 
}
const isLowercaseLetter = (char) => char.match(/^[a-z]+$/);



console.log( mix("&&999looping XXXXis fun but dangerous", "less dangerous than coding"));
