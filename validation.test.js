import { it, describe, expect } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe('validateEmail()', () => {
    it('should validate a correct email address', () => {
        const email = 'example@gmail.com'; // Arrange 
        const resultFn = () => validateEmail(email); // Actions
        expect(resultFn).not.toThrow(); // Assertion
    });

    it('should throw an error if an invalid email is passed', () => {
        const email = 'example';
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });

    it('should throw an error if an empty string is passed', () => {
        const email = '';
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });

    it('should throw an error for a null email address', () => {
        const email = null;
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });

    it('should throw an error if an undefined email address', () => {
        const email = undefined;
        const resultFn = () => validateEmail(email);
        expect(resultFn).toThrow();
    });
});

describe('ValidateArrayNotEmpty()', () => {
    it('should validate a non-empty array', () => {
        const array = [1, 2, 3];
        const resultFn = () => validateArrayNotEmpty(array);
        expect(resultFn).not.toThrow()
    });

    it('should throw an error for an non array input', () => {
        const str = 'not an array';
        const resultFn = () => validateArrayNotEmpty(str);
        expect(resultFn).toThrow()
    });

    it('should throw an error for an empty array', () => {
        const array = [];
        const resultFn = () => validateArrayNotEmpty(array);
        expect(resultFn).toThrow()
    });

    it('should throw an error for null input', () => {
        const array = null;
        const resultFn = () => validateArrayNotEmpty(array);
        expect(resultFn).toThrow()
    });

    it('should throw an error for undefined input', () => {
        const array = undefined;
        const resultFn = () => validateArrayNotEmpty(array);
        expect(resultFn).toThrow()
    });



})