const factorial = require('./factorial');

test('factorial of 3 to equal 6', () => {
    expect(factorial(3)).toEqual(6);
})

test('factorial of 4 to equal 24', () => {
    expect(factorial(4)).toEqual(24);
})

test('factorial of 0 to equal 1', () => {
    expect(factorial(0)).toEqual(1);
})

test('factorial of 1 to equal 1', () => {
    expect(factorial(1)).toEqual(1);
})

test('factorial of -4 to throw error', () => {
    expect(() => {
        factorial(-4);
    }).toThrowError('Factorial doesn\'t work with negative numbers!! You passed -4.');
})

test('factorial of null to throw error', () => {
    expect(() => {
        factorial(null);
    }).toThrowError('Factorial of null is an error');

})

test('factorial of undefined to throw error', () => {
    expect(() => {
        factorial(undefined);
    }).toThrowError('Undefined cannot have a factorial')
})