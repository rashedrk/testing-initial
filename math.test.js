import { it, expect } from 'vitest'
import { add } from './math'

it('should return the correct sum if an array of numbers are provided', () => {
    const result = add([1,2,3])
    expect(result).toBe(6)
})