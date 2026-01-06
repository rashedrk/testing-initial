import { it, expect } from 'vitest'
import { add } from './math'

it('should return the correct sum if an array of numbers are provided', () => {
    // Arrange 
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((a, b) => a + b, 0);

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBe(expectedResult)
});
it('should return NaN if any element of array is invalid', () => {
    // Arrange 
    const numbers = [1, "s", 3];

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBeNaN()
});
it('should return the correct sum if an array of numeric strings are provided', () => {
    // Arrange 
    const numbers = ['1', '2', '3'];
    const expectedResult = numbers.reduce((a, b) => +a + +b, 0);

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBe(expectedResult)
});


//Testing Error

it('should throw an error if no argument is passed', () => {
    const resultFn = () => {
        add();
    }

    expect(resultFn).toThrow();
});

it('should throw an error if multiple arguments are passed', () => {
    const resultFn = () => {
        add(1,2,3);
    }

    // expect(resultFn).toThrow();

    //we can customize by using regex.
    expect(resultFn).toThrow(/is not iterable/i)
})