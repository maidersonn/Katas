/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function rgb(r, g, b){


    const converToHex = (number) => {

        const hex = {
            '0': '0', '1':'1', '2':'2', '3':'3', '4':'4', '5':'5', '6':'6', '7':'7', '8':'8', '9':'9', '10':'A', '11':'B', '12':'C', '13':'D', '14':'E', '15':'F'
        }
        let solution = "";

        let newNumber = number;
  
        if(newNumber < 0) {
            newNumber = 0;
        }
        if(newNumber > 255) {
            newNumber = 255;
        }

        while (newNumber >= 16) {
            const remainder = newNumber % 16 + ""; 
            newNumber = Math.trunc(newNumber / 16);

            solution = hex[remainder] + solution;
        }
    
        solution = hex[newNumber] + solution;
       
        return solution.length === 1 ? 0 + solution : solution;
    }

    const rSolution = converToHex(r);
    const bSolution = converToHex(b);
    const gSolution = converToHex(g);

    
    return rSolution + gSolution + bSolution;
    
    
}

console.log(rgb(0, 0, 0));
