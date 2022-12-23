const  fizzBuzz = require("./index");


test('si el numero es divisible por 3 devuelve fizz', () => {
    
    expect (fizzBuzz(3)).toBe("fizz");

});

test ('si el numero divisble por 5 devuelve buzz', () => {

expect (fizzBuzz(5)).toBe("buzz");

});

test('si el numero divisible por 3 y 5 devuelve fizzbuzz', () => {

expect (fizzBuzz(30)).toBe("fizzbuzz");

});

