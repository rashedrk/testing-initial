import { it, expect } from 'vitest'
import { add } from './math'

it('should return the correct sum if an array of numbers are provided', () => {
    // Arrange 
    const numbers = [1,2,3];
    const expectedResult = numbers.reduce((a,b) => a + b, 0);

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBe(expectedResult)
});
it('should return NaN if any element of array is invalid', () => {
    // Arrange 
    const numbers = [1,"s",3];

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBeNaN()
});
it('should return the correct sum if an array of numeric strings are provided', () => {
    // Arrange 
    const numbers = ['1','2','3'];
    const expectedResult = numbers.reduce((a,b) => +a + +b, 0);

    // Actions
    const result = add(numbers)

    // Assertion
    expect(result).toBe(expectedResult)
});