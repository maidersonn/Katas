/* 
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.
*/



function solution(number){

    const romanNumbers = {
        '1':'I', '2':'II', '3':'III', '4':'IV', '5':'V', '6':'VI', '7':'VII', '8':'VIII', '9':'IX', '10':'X', '20':'XX', '30':'XXX', '40':'XL', '50':'L', 
        '60':'LX', '70':'LXX', '80':'LXXX', '90':'XC', '100':'C', '200':'CC', '300':'CCC', '400':'CD', '500':'D', '600':'DC', '700':'DCC', '800':'DCCC', '900':'CM', 
        '1000':'M', '2000':'MM', '3000':'MMM',
    };


    const string = number + "";
    const length = string.length;

    if(length === 1) {
        return romanNumbers[number];

    } else if(length === 2){
        const tens = string.substring(0, 1) + '0';
        const units = string.substring(1, 2);
        return units === '0' ? romanNumbers[dezens] : (romanNumbers[dezens] + romanNumbers[units]);

    } else if(length === 3) {
        const hundreds = string.substring(0, 1) + '00';
        const tens = string.substring(1, 2);
        const units = string.substring(2, 3);
        if(tens === '0' && units === '0') return romanNumbers[hundreds];
        if(tens === '0') return romanNumbers[hundreds] + romanNumbers[units];
        if(units === '0') return romanNumbers[hundreds] + romanNumbers[tens + 0];
        return romanNumbers[hundreds] + romanNumbers[tens + 0] + romanNumbers[units]
    } else if(length === 4) {
        const thousands = string.substring(0, 1) + '000'
        const hundreds = string.substring(1, 2);
        const tens = string.substring(2, 3);
        const units = string.substring(3, 4); 
        if(tens === '0' && units === '0' && hundreds === '0') return romanNumbers[thousands];
        if(tens === '0' && units === '0') return romanNumbers[thousands] + romanNumbers[hundreds + '00'];
        if(tens === '0' && hundreds === '0') return romanNumbers[thousands] + romanNumbers[units];
        if(units === '0' && hundreds === '0') return romanNumbers[thousands] + romanNumbers[tens + '0'];
        if(units === '0') return romanNumbers[thousands] + romanNumbers[hundreds +'00'] + romanNumbers[tens + '0'];
        if(tens === '0') return romanNumbers[thousands] + romanNumbers[hundreds + '00'] + romanNumbers[units];
        if(hundreds === '0') return romanNumbers[thousands] + romanNumbers[tens + '0'] + romanNumbers[units];
        return romanNumbers[thousands] + romanNumbers[hundreds + '00'] + romanNumbers[tens + '0'] + romanNumbers[units];
    }

  }

  console.log(solution(1309));