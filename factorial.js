// function factorial(n) {
//     return 6;
// }



function factorial(n) {
	//TODO add short circuit logic
    if (n < 0) {
        throw new Error('Factorial doesn\'t work with negative numbers!! You passed ' + n + '.');
    }

    if (0 === n || 1 === n) {
        return 1;
    }

    if (n === null) {
        throw new Error('Factorial of null is an error')
    }

    if (n === undefined) {
        throw new Error('Undefined cannot have a factorial')
    }
    
    var result = 1;

    for (var i = n; i >= 2; i--) {
        result = result * i; 
    }	 

    return result;
    
   
}

module.exports = factorial;