const kebabToSnake = require('./snake');

test('kebabToSnake hello-world to hello_world', () => {
   const kebabHello = 'hello-world';
   const snakeHello = 'hello_world';
   expect(kebabToSnake(kebabHello)).toEqual(snakeHello);
})

test('noKebab case passed in string', () => {
    const noKebab = 'hello world';
    expect(kebabToSnake(noKebab)).toEqual(noKebab);
})

test('null cannot be snake cased', () => {
    expect(() =>{
        kebabToSnake(null);
    }).toThrowError('You cannot snake case a null value');
})

test('undefined cannot be snake cased', () => {
    expect(() =>{
        kebabToSnake(undefined);
    }).toThrowError('You cannot snake case an undefined value');
})

test('numbers cannot be snake cased', () => {
expect(() => {
    kebabToSnake(5);
}).toThrowError('You cannot snake case a number')
})


test('boolean cannot be snake cased', () => {
    expect(() => {
        kebabToSnake(true);
    }).toThrowError('You cannot snake case a boolean')
    })